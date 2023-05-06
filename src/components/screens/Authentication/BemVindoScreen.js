/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  StatusBar,
  Modal,
  TouchableOpacity,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import Registro from './RegistrationScreen'; // importa a tela de registro
import Login from './LoginScreen';
import styles from './style/BemVindoEstilo';

import {setMostrarVisible} from '../../../features/common/CommonAction';
const BemVindoScreen = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const [MostrarTelaLogin, setMostrarTelaLogin] = useState(false);
  const [ModalVisible, setModalVisible] = useState(false);

  const handleRegistrationClick = () => {
    navigation.navigate('Registration');
  };

  const handleLoginClick = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={ModalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.modalButton}>
              <Text style={styles.modalButtonText}>Inglês</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton}>
              <Text style={styles.modalButtonText}>Francês</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton}>
              <Text style={styles.modalButtonText}>Português</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <StatusBar barStyle="light-content" backgroundColor="#D6001B" />
      <View style={styles.imageContainer}>
        <Image
          source={require('../../../assets/images/splash2.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Seja Bem-Vindo!</Text>
        <Text style={styles.subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={[styles.buttonContainer, {marginBottom: 20}]}>
          <TouchableOpacity
            style={[styles.button, {borderColor: '#fff'}]}
            onPress={handleRegistrationClick}>
            <Text style={[styles.buttonText, {color: '#fff'}]}>Registrar</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.buttonContainer, {marginTop: 20}]}>
          <TouchableOpacity
            style={[styles.button, {backgroundColor: '#fff'}]}
            onPress={handleLoginClick}>
            <Text style={[styles.buttonText, {color: '#D6001B'}]}>Acessar</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.idiomaContainer}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text style={[styles.idiomaText]}>Idioma</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BemVindoScreen;
