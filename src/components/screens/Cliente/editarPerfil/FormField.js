import React, {useState} from 'react';
import {StyleSheet, TextInput, View, Text} from 'react-native';
import BotaoRecto from '../../../common/myCommon/BotaoRecto';

const FormField = () => {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.cabecalho}>
        <Text style={styles.titulo}>Editar Perfil</Text>
        <Text style={styles.subtitle}>Vamos começar</Text>
      </View>
      <View style={styles.form}>
        {renderInput('Nome Completo', nome, setNome)}
        {/* {renderInput('Telefone', telefone, setTelefone, 'numeric')}
         */}
        {renderInput('Email', email, setEmail, 'email-address')}
        {/* {renderInput('Senha', senha, setSenha, null, true)}
        {renderInput(
          'Confirmar Senha',
          confirmarSenha,
          setConfirmarSenha,
          null,
          true,
        )} */}
        <View style={styles.botaoContainer}>
          <BotaoRecto titulo={'Guardar'} backgroundColor={'#D6001B'} />
        </View>
      </View>
    </View>
  );
};

const renderInput = (
  placeholder,
  value,
  onChangeText,
  keyboardType = null,
  secureTextEntry = false,
) => (
  <TextInput
    style={styles.input}
    value={value}
    onChangeText={onChangeText}
    keyboardType={keyboardType}
    secureTextEntry={secureTextEntry}
    placeholder={placeholder}
  />
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  cabecalho: {
    alignItems: 'center',
    marginBottom: 10,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#D6001B',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  form: {
    paddingHorizontal: 20,
    top: 20,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#F4F8FB',
  },
  botaoContainer: {
    alignItems: 'center',
    marginTop: 1,
    height: 50,
  },
});

export default FormField;
