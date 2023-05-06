import React, {useState, useEffect} from 'react';
import MapView, {Marker, Polyline} from 'react-native-maps';
import coordinates from './Dados.json';
import {Text} from 'react-native';
import axios from 'axios';
import Geolocation from '@react-native-community/geolocation';

import {ApplicationProperties} from '../../../application.properties';

const calculatePrice = (distance, time, dynamicFareFactor) => {
  const baseFare = 5.0;
  const pricePerKm = 1.5;
  const pricePerMinute = 0.25;

  const price = baseFare + distance * pricePerKm + time * pricePerMinute;
  return price * dynamicFareFactor;
};

const RotaScreen = () => {
  const [distance, setDistance] = useState(0);
  const [price, setPrice] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [dynamicFareFactor, setDynamicFareFactor] = useState(1);
  const [route, setRoute] = useState([]);

  const [location, setLocation] = useState(null);
  const [destination, setDestination] = useState(null);
  const [routeCoords, setRouteCoords] = useState([]);

  const fetchRoute = async (origin, destination) => {
    try {
      const apiKey = ApplicationProperties.apiKey;
      const coordinates = `${origin.longitude},${origin.latitude}|${destination.longitude},${destination.latitude}`;
      const url = `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${apiKey}&coordinates=${coordinates}`;

      const response = await axios.get(url);
      if (
        response.data &&
        response.data.features &&
        response.data.features[0].geometry.coordinates
      ) {
        const routeCoords = response.data.features[0].geometry.coordinates.map(
          coord => ({
            latitude: coord[1],
            longitude: coord[0],
          }),
        );

        return routeCoords;
      }
    } catch (error) {
      console.error('Error fetching route:', error);
    }
  };

  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      error => console.log(error),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  }, []);

  return (
    <MapView
      style={{flex: 1}}
      initialRegion={{
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
      {route.map((coordinate, index) => (
        <Marker key={index} coordinate={coordinate} />
      ))}
      <Polyline coordinates={route} strokeWidth={5} strokeColor="blue" />
      {/*  <Text>Preço: R$ {price.toFixed(2)}</Text> */}
    </MapView>
  );
};

export default RotaScreen;
