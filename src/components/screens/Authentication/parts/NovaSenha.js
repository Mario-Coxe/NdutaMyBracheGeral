import React, {useState} from 'react';
import {TextInput, View, Text, StatusBar, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import BotaoRecto from '../../../common/myCommon/BotaoRecto';
import BotaoVoltar from '../../../common/myCommon/BotaoVoltar';
import styles from '../style/ConfirmarSenhaEstilo';

const NewPasswordScreen = () => {
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const navigation = useNavigation();

  const handleUpdateClick = () => {
    navigation.navigate('Login');
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
            <BotaoVoltar />
            <Text style={styles.subtitle}>Redifina a sua senha</Text>
            <Text style={styles.titulo}>Aqui tudo é fácil!</Text>
          </View>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              onChangeText={setNome}
              placeholder="Nova Senha"
            />
            <TextInput
              style={styles.input}
              onChangeText={setSenha}
              secureTextEntry={true}
              placeholder="ConfirmSenha"
            />
            <View style={styles.botaoContainer}>
              <BotaoRecto titulo={'Continuar'} onPress={handleUpdateClick} />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NewPasswordScreen;
