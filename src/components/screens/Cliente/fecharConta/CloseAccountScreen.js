import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  TextInput,
} from 'react-native';
import BotaoRecto from '../../../common/myCommon/BotaoRecto';
import BotaoVoltar from '../../../common/myCommon/BotaoVoltar';

const CloseAccountScreen = () => {
  return (
    <SafeAreaView style={estilo.container}>
      <StatusBar backgroundColor={'#D6001B'} />
      <View style={estilo.camada1}>
        <BotaoVoltar />
        <View>
          <Text style={estilo.titulo}>Fechar a Conta</Text>
          <TextInput
            style={estilo.input}
            keyboardType="email-address"
            placeholder="Escreva o motivo..."
          />
        </View>
        <View style={estilo.botaoContainer}>
          <BotaoRecto titulo={'Confirmar o Pedido'} />
        </View>
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
  titulo: {
    color: '#D6001B',
    fontSize: 30,
    fontWeight: 'bold',
    padding: 30,
    bottom: 300,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#F4F8FB',
    bottom: 260,
    width: '80%',
    left: 37,
  },
  botaoContainer: {
    bottom: 200,
    right: 14,
    width: '85%',
  },
});

export default CloseAccountScreen;
