import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import axios from 'axios';

export default function App() {
  const [routeCoordinates, setRouteCoordinates] = useState([]);
  const [distance, setDistance] = useState(0);
  const [duration, setDuration] = useState(0);

  const start = { latitude: -8.885031, longitude: 13.233225 };
  const end = { latitude: -8.840111, longitude: 13.280035 };
  const apiKey = '5b3ce3597851110001cf6248fd3254fbd1b2437cbdd8ff1ad08261c4';

  useEffect(() => {
    async function fetchRoute() {
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
    }

    fetchRoute();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: (start.latitude + end.latitude) / 2,
          longitude: (start.longitude + end.longitude) / 2,
          latitudeDelta: Math.abs(start.latitude - end.latitude) * 1.5,
          longitudeDelta: Math.abs(start.longitude - end.longitude) * 1.5,
        }}
      >
        <Marker
          coordinate={start}
          title="Ponto A"
        />
        <Marker
          coordinate={end}
          title="Ponto B"
        />
        <Polyline
          coordinates={routeCoordinates}
          strokeColor="#ff0000"
          strokeWidth={2}
        />
      </MapView>
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
});
