import {React} from 'react';
import {
  TextInput,
  View,
  Text,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
//import CommonLoading from '../../../components/common/CommonLoading';
import {useNavigation} from '@react-navigation/native';
import {Controller, useForm} from 'react-hook-form';
import {useSelector} from 'react-redux';
import {authRequest} from '../../../features/authentication/actions/AuthAction';

import BotaoRecto from '../../common/myCommon/BotaoRecto';
//import Autenticacao from './OTPAuthScreen';
import styles from './style/LoginEstilo';

import {authenticate} from '../../../features/authentication/actions/authThunk';
//import CommonLoading from '../../common/CommonLoading';

const LoginScreen = () => {
  const dispatch = useDispatch();

  const navigation = useNavigation();
  const isLoading = useSelector(state => state.auth.status);
  const loggedIn = useSelector(state => state.auth.loggedIn);
  const error = useSelector(state => state.auth.error);

  const schema = yup.object().shape({
    telefone: yup
      .string()
      .min(9, 'O telefone deve ter pelo menos 9 digitos.')
      .required('Por favor, insira seu telefone.'),
    password: yup
      .string()
      .min(5, 'A senha deve ter pelo menos 5 caracteres.')
      .required('Por favor, insira sua senha.'),
  });

  const {control, handleSubmit, errors} = useForm({
    //resolver: yupResolver(schema),
  });

  const handleForgotPasswordClick = () => {
    navigation.navigate('RecuperSenha');
  };

  const onSubmit = async credentials => {
    try {
      dispatch(authenticate(credentials));
      if (loggedIn) {
        navigation.navigate('Home');
      }
    } catch (err) {
      console.error('Authentication failed', err);
    }
  };

  const inputFields = [
    {
      name: 'telefone',
      placeholder: 'Telefone',
      keyboardType: 'default',
      secureTextEntry: false,
      defaultValue: '929764155',
    },
    {
      name: 'password',
      placeholder: 'Password',
      keyboardType: 'default',
      defaultValue: '1234567890',
      secureTextEntry: true,
    },
  ];

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
            <Text style={styles.titulo}>Faça Login</Text>
            <Text style={styles.subtitle}>Vamos começar </Text>
          </View>
          <View style={styles.form}>
            {inputFields.map((field, index) => (
              <Controller
                key={index}
                control={control}
                name={field.name}
                defaultValue={field.defaultValue}
                render={({field: {onChange, onBlur, value}}) => (
                  <TextInput
                    style={styles.input}
                    keyboardType={field.keyboardType}
                    secureTextEntry={field.secureTextEntry}
                    placeholder={field.placeholder}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
              />
            ))}
            {error && Object.keys(error).length > 0 && (
              <Text style={styles.error}>{error.message}</Text>
            )}

            <View>
              <TouchableOpacity onPress={handleForgotPasswordClick}>
                <Text style={[styles.esqueceu]}>Esqueceu sua senha?</Text>
              </TouchableOpacity>
            </View>
            {/* Adicione esta linha */}
            <View style={styles.botaoContainer}>
              <BotaoRecto
                titulo={isLoading ? 'Carregando...' : 'Acessar'}
                //titulo={'Acessar'}
                onPress={handleSubmit(onSubmit)}
              />
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={[styles.button, styles.facebookButton]}>
                <Icon name="facebook-f" size={20} color="#fff" />
                <Text style={styles.buttonText}>Login com Facebook</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, styles.googleButton]}>
                <Icon name="google" size={20} color="#fff" />
                <Text style={styles.buttonText}>Login com Google</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
