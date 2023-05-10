import React, {useState} from 'react';
import {
  TextInput,
  View,
  Text,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import BotaoRecto from '../../../common/myCommon/BotaoRecto';
import BotaoVoltar from '../../../common/myCommon/BotaoVoltar';

import styles from '../style/RecuperarSenhaEstilo';

const RecuperSenhaScreen = () => {
  const navigation = useNavigation();
  const [EmailOrTelefone, setsetEmailOrTelefone] = useState('');

  const handleBack = () => {
    navigation.navigate('Login');
  };

  const handleRecuperSenha = () => {
    navigation.navigate('OTP');
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
            <BotaoVoltar onPress={handleBack} />
            <Text style={styles.subtitle}>Você Tem Um Problema?</Text>
            <Text style={styles.titulo}>Não Te Preocupe!</Text>
          </View>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              onChangeText={setsetEmailOrTelefone}
              placeholder="Email ou Telefone"
            />
            <View>
              <TouchableOpacity onPress={handleBack}>
                <Text style={[styles.esqueceu]}>Sem Problema? Faça Login</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.botaoContainer}>
              <BotaoRecto titulo={'Continuar'} onPress={handleRecuperSenha} />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RecuperSenhaScreen;
