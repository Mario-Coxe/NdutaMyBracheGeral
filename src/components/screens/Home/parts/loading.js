/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import estilo from './style/style/css_motorista';

const Loading = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={estilo.estilo.conteiner}>
      <View>
        <Text style={{fontSize: 25, padding: 50}}>
          Aguarde um instante por favor...
        </Text>
      </View>
      <View style={styles.container}>
        {isLoading && <ActivityIndicator size="large" color="#D6001B" />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 80,
  },
});

export default Loading;
