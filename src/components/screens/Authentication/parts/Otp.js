/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {TextInput, View, Text, StatusBar, SafeAreaView} from 'react-native';
import BotaoRecto from '../../../common/myCommon/BotaoRecto';
import styles from '../style/AutenticacaoEstilo';

const Formulario = () => {
  const [tempoRestante, setTempoRestante] = useState(45);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTempoRestante(tempo => tempo - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const renderInputs = () => {
    const placeholders = ['6', '2', '7', '3', '.', '.'];
    return placeholders.map((placeholder, index) => (
      <View key={index} style={index === 0 ? styles.inputWrapper : null}>
        <TextInput
          placeholder={placeholder}
          style={styles.input}
          maxLength={1}
          keyboardType="numeric"
        />
      </View>
    ));
  };

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
            <View style={{flexDirection: 'row'}}>{renderInputs()}</View>
            <View>
              <Text style={styles.Reenviarcodigo}>
                Reenvie o código em{' '}
                <Text style={{color: 'red'}}>
                  {tempoRestante} {tempoRestante === 1 ? 'segundo' : 'segundos'}
                </Text>
              </Text>
            </View>
            <View style={styles.botaoContainer}>
              <BotaoRecto titulo={'Confirmar'} />
            </View>
          </SafeAreaView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Formulario;
