/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Alert,
  StatusBar,
  View,
  PermissionsAndroid,
  Image,
  Text,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import MapView, {Marker} from 'react-native-maps';

import Menu_Inicial from './parts/menu';
import coordenadas from './ex.json';

export default function HomeScreen() {
  // eslint-disable-next-line no-unused-vars
  const [buttonBackgroundColor, setButtonBackgroundColor] = useState('white');
  const [region, setRegion] = useState(null);
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    getMyLocation();
    initializeMarkers();
  }, []);

  const initializeMarkers = () => {
    coordenadas.usuario.forEach((c, index) => {
      newMarker(c.latitude, c.longitude, index);
    });
  };

  const newMarker = (latitude, longitude, key) => {
    const markerData = {
      key,
      coords: {
        latitude,
        longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      pinColor: '#D6001B',
    };

    setRegion({
      latitude,
      longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });

    setMarkers(oldArray => [...oldArray, markerData]);
  };

  const getMyLocation = () => {
    Geolocation.getCurrentPosition(
      info => {
        setRegion({
          latitude: info.coords.latitude,
          longitude: info.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      },
      () => console.log('error'),
      {
        enableHighAccuracy: true,
        timeout: 200,
      },
    );
  };

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Permissão de Localização',
          message: 'Nduta precisa da permissão para acessar a tua localização.',
        },
      );
      if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        Alert.alert('Permissão de localização não concedida');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SafeAreaView>
      <View>
        <StatusBar backgroundColor={'#999999'} />
        <View
          style={{
            backgroundColor: '#fff',
            width: '100%',
            height: 59,
            elevation: 7,
          }}>
          <View
            style={{
              padding: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../../assets/icones/nduta3.jpeg')}
              style={{width: '50%', height: 50}}
            />
            <Text style={{fontSize: 20, color: 'red'}}>Elone</Text>
          </View>
        </View>

        <MapView
          onMapReady={requestLocationPermission}
          style={{width: '100%', height: '50%'}}
          region={region}
          zoomEnabled={true}
          minZoomLevel={17}
          showsUserLocation={true}
          loadingEnabled={true}>
          {markers.map(marker => (
            <Marker
              key={marker.key}
              coordinate={marker.coords}
              pinColor={marker.pinColor}
              image={require('../../../assets/icones/destino.gif')}
              style={{width: 0, height: 3}}
            />
          ))}
        </MapView>
        <Menu_Inicial />
      </View>
    </SafeAreaView>
  );
}
