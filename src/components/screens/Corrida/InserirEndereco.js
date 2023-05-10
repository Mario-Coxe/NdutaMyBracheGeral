import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput, Button, Text } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import axios from 'axios';
import Geolocation from 'react-native-geolocation-service';

export default function App() {

  const [userPosition, setUserPosition] = useState(null);
  const [destinationCoords, setDestinationCoords] = useState(null);
  const [routeCoordinates, setRouteCoordinates] = useState([]);
  const [distance, setDistance] = useState(0);
  const [duration, setDuration] = useState(0);
  const [destination, setDestination] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const [currentLocation, setCurrentLocation] = useState(null);
  const [locationError, setLocationError] = useState(null);

  const apiKey = '5b3ce3597851110001cf6248fd3254fbd1b2437cbdd8ff1ad08261c4';

  const handleDestinationChange = async (text) => {
    setDestination(text);
    if (text) {
      const url = `https://nominatim.openstreetmap.org/search?format=json&q=${text}&limit=5`;
      const response = await axios.get(url);
      const data = response.data;
      setSuggestions(data);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionPress = async (suggestion) => {
    setDestination(suggestion.display_name);
    setSuggestions([]);

    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${suggestion.display_name}&limit=1`;
    const response = await axios.get(url);
    const data = response.data;
    const coordinates = { latitude: parseFloat(data[0].lat), longitude: parseFloat(data[0].lon) };
    fetchRoute(coordinates);
  };

  const fetchRoute = async (destinationCoords) => {
    const start = currentLocation.coords;
    const end = destinationCoords;
    const url = `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${apiKey}&start=${start.longitude},${start.latitude}&end=${end.longitude},${end.latitude}`;
    const response = await axios.get(url);
    const data = response.data;

    const coordinates = data.features[0].geometry.coordinates.map((c) => ({
      latitude: c[1],
      longitude: c[0],
    }));

    setRouteCoordinates(coordinates);
    setDistance(data.features[0].properties.segments[0].distance);
    setDuration(data.features[0].properties.segments[0].duration);

    setDestinationCoords(end); // adiciona as coordenadas do destino ao estado
  };


  useEffect(() => {
    Geolocation.getCurrentPosition(
      (position) => {
        setCurrentLocation(position);
      },
      (error) => {
        setLocationError(error.message);
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }, []);

  if (locationError) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Erro ao obter localização: {locationError}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {currentLocation && (
        <MapView
          style={styles.map}
          initialRegion={{
            ...currentLocation.coords,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {currentLocation && (
            <Marker coordinate={currentLocation.coords} title="Posição atual" />
          )}

          {destinationCoords && (
            <Marker 
            coordinate={destinationCoords} 
            title={destination} 
              pinColor='blue'
            />
          )}
          {routeCoordinates.length > 0 && (
            <Polyline
              coordinates={routeCoordinates}
              strokeColor="#FF0000"
              strokeWidth={3}
            />
          )}
        </MapView>
      )}
      <View style={styles.destinationInputContainer}>
        <TextInput
          style={styles.destinationInput}
          placeholder="Digite seu destino"
          value={destination}
          onChangeText={handleDestinationChange}
        />
        {suggestions.length > 0 && (
          <View style={styles.suggestionsContainer}>
            {suggestions.map((suggestion) => (
              <Text
                key={suggestion.place_id}
                style={styles.suggestionText}
                onPress={() => handleSuggestionPress(suggestion)}
              >
                {suggestion.display_name}
              </Text>
            ))}
          </View>
        )}
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>
          Distância: {distance / 1000} km
        </Text>
        <Text style={styles.infoText}>
          Duração: {Math.round(duration / 60)} min
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  destinationInputContainer: {
    position: 'absolute',
    top: 20,
    left: 20,
    right: 20,
    zIndex: 2,
  },
  destinationInput: {
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  suggestionsContainer: {
    backgroundColor: '#fff',
    borderRadius: 5,
    marginTop: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  suggestionText: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  infoContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    zIndex: 2,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 5,
  },
  errorText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 50,
  },
});