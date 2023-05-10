import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MapView, {Marker, Polyline} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import haversine from 'haversine';
import {ApplicationProperties} from '../../../application.properties';

const App = () => {
  const [location, setLocation] = useState(null);
  const [destination, setDestination] = useState(null);
  const [routeCoords, setRouteCoords] = useState([]);
  const [distance, setDistance] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(0);

  useEffect(() => {
    Geolocation.watchPosition(
      position => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      error => console.log(error),
      {enableHighAccuracy: true, distanceFilter: 10},
    );
  }, []);

  useEffect(() => {
    if (location && destination) {
      const newDistance = haversine(location, destination, {unit: 'km'});
      setDistance(newDistance);
      setTimeRemaining(calculateTimeRemaining(newDistance));
    }
  }, [location, destination]);

  const calculateTimeRemaining = distance => {
    const speed = 60; // Considerando a velocidade média do carro em km/h
    const time = distance / speed; // Tempo em horas
    return time * 60; // Tempo em minutos
  };

  const onMapPress = e => {
    setDestination(e.nativeEvent.coordinate);
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: location ? location.latitude : 0,
          longitude: location ? location.longitude : 0,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onPress={onMapPress}>
        {location && <Marker coordinate={location} />}
        {destination && <Marker coordinate={destination} />}
        {routeCoords.length > 0 && (
          <Polyline
            coordinates={routeCoords}
            strokeWidth={5}
            strokeColor="blue"
          />
        )}
      </MapView>
      <View style={styles.info}>
        <Text>Distância restante: {distance.toFixed(2)} km</Text>
        <Text>Tempo restante: {timeRemaining.toFixed(2)} minutos</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  info: {
    padding: 10,
    backgroundColor: 'white',
  },
});

export default App;
