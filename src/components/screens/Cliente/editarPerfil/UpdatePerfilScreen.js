import React from 'react';
import {View, SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import FormField from './FormField';

const UpdatePerfilScreen = () => {
  return (
    <SafeAreaView style={estilo.container}>
      <StatusBar backgroundColor={'#D6001B'} />
      <View style={estilo.camada1}>
        <FormField />
      </View>
    </SafeAreaView>
  );
};

const estilo = StyleSheet.create({
  container: {
    backgroundColor: '#D6001B',
    width: '100%',
    height: '100%',
  },
  camada1: {
    backgroundColor: 'white',
    width: '100%',
    height: 640,
    position: 'absolute',
    bottom: 0,
    marginBottom: 0,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
});

export default UpdatePerfilScreen;
