/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {TextInput, View, Text, StatusBar, SafeAreaView} from 'react-native';
import BotaoRecto from '../../common/myCommon/BotaoRecto';
import styles from './style/AutenticacaoEstilo';
import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
const OtpScreen = () => {

  const [tempoRestante, setTempoRestante] = useState(45);
  const navigation = useNavigation();

  const handleHome = () => {
    navigation.navigate('Home');
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTempoRestante(tempo => tempo - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (tempoRestante === 0) {
      //Tenho de determinar o que vai acontecer
    }
  }, [tempoRestante]);

  return (
    <SafeAreaView style={styles.container2}>
      <StatusBar backgroundColor={'#D6001B'} />
      <View style={styles.camada1}>
        <View style={styles.container}>
          <StatusBar
            style={styles.status}
            barStyle="light-content"
            backgroundColor="#D6001B"
          />
          <View style={styles.cabecalho}>
            <Text style={styles.titulo}>Validação</Text>
          </View>
          <Text style={styles.subtitle}>
            Insira o código de 6-dígitos que foi enviado para O número +244 923
            558 191.{' '}
            <Text style={{color: 'red'}}>
              {' '}
              Você inseriu o número Correcto?{' '}
            </Text>
          </Text>
          <SafeAreaView style={styles.container}>
            <View style={{flexDirection: 'row'}}>
              <View>
                <TextInput
                  placeholder="6"
                  style={styles.input}
                  maxLength={1}
                  keyboardType="numeric"
                />
              </View>
              <View>
                <TextInput
                  style={styles.input}
                  placeholder="2"
                  maxLength={1}
                  keyboardType="numeric"
                />
              </View>
              <View>
                <TextInput
                  style={styles.input}
                  placeholder="7"
                  maxLength={1}
                  keyboardType="numeric"
                />
              </View>
              <View>
                <TextInput
                  style={styles.input}
                  placeholder="3"
                  maxLength={1}
                  keyboardType="numeric"
                />
              </View>
              <View>
                <TextInput
                  style={styles.input}
                  placeholder="."
                  maxLength={1}
                  keyboardType="numeric"
                />
              </View>
              <View>
                <TextInput
                  style={styles.input}
                  placeholder="."
                  maxLength={1}
                  keyboardType="numeric"
                />
              </View>
            </View>
            <View>
              <Text style={styles.Reenviarcodigo}>
                Reenvie o código em{' '}
                <Text style={{color: 'red'}}>
                  {tempoRestante} {tempoRestante === 1 ? 'segundo' : 'segundos'}
                </Text>
              </Text>
            </View>
            <View style={styles.botaoContainer}>
              <BotaoRecto titulo={'Confirmar'}  onPress={handleHome} />
            </View>
          </SafeAreaView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OtpScreen;
