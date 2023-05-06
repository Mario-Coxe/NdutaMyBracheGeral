/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './Estilos/BotaoVoltarEstilo';

const b = ({onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Image
          style={{width: 30, height: 30}}
          source={require('../../../assets/images/icons8-return-64.png')}
        />
        <Text style={{color: '#D6001B', fontSize: 20}} />
      </TouchableOpacity>
    </View>
  );
};

export default b;
