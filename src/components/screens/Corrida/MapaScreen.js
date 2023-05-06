import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';


const App = () => {
  const [coordinates, setCoordinates] = useState({
    latitude: 0,
    longitude: 0,
  });

  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        setCoordinates({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      },
      error => console.log(error),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }, []);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignContent: 'center',
    },
    map: {
      flex: 1,
    },
  });

  return (
    <View style={styles.container}>
      <View style={{backgroundColor:'(50,50,50)',width:'100%',height:50, elevation:7, justifyContent:'center', alignItems:'center'}}>
        <View style={{flexDirection: 'row'}}>
          <Image source={require('../../../assets/images/voltar.png')} style={{width:"20%",height:30, resizeMode: 'contain', left: -80}}/>
          <Image source={require('../../../assets/images/ndutaVermelho.png')} style={{width:"50%",height:35, justifyContent:'center', alignItems:'center', resizeMode: 'contain', right: 40}}/>
          <Image source={require('../../../assets/images/configuracao.png')} style={{width:"20%",height:30, resizeMode: 'contain', position: 'absolute', right: -80}}/>
        </View>
      </View>
      <MapView
        style={styles.map}
        region={{
          latitude: coordinates.latitude,
          longitude: coordinates.longitude,
          latitudeDelta: 0.0143,
          longitudeDelta: 0.0134,
        }}>
        <Marker
          coordinate={coordinates}
          image={require('../../icon/location.png')}
          style={styles.marker}
        />
      </MapView>
    </View>
  );
};

export default App;
