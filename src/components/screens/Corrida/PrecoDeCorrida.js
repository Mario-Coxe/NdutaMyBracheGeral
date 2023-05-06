/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Mapa from './MapaScreen';

const PriceScreen = () => {
  const [modalVisible, setModalVisible] = useState(true);
  const options = [
    {
      id: '1',
      name: 'Standard',
      price: '5200AOA',
      waitTime: '8 min',
      image: require('../../../assets/images/carro.png'),
    },
    {
      id: '2',
      name: 'Economia',
      price: '720AOA',
      waitTime: '5 min',
      image: require('../../../assets/images/carro.png'),
    },
    {
      id: '3',
      name: 'Standard',
      price: '5200AOA',
      waitTime: '2 min',
      image: require('../../../assets/images/carro.png'),
    },
  ];

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.optionContainer}
      onPress={() => setModalVisible(false)}>
      <View style={styles.optionImageContainer}>
        <Image source={item.image} style={styles.optionImage} />
      </View>
      <View style={styles.optionTextContainer}>
        <Text style={styles.optionName}>{item.name}</Text>
        <Text style={styles.optionPrice}>{item.price}</Text>
        <Text style={styles.optionWaitTime}>{item.waitTime}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{flex: 1}}>
      <Mapa />
      {modalVisible && (
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList
              data={options}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              contentContainerStyle={styles.optionsContainer}
              horizontal={true}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => setModalVisible(false)}>
              <Text style={styles.buttonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      {!modalVisible && (
        <TouchableOpacity
          style={{
            position: 'absolute',
            bottom: 20,
            backgroundColor: '#D6001B',
            width: '80%',
            height: '8%',
            alignSelf: 'center',
            padding: 20,
            borderRadius: 10,
            alignItems: 'center',
          }}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.buttonText}>Escolher opção de transporte</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  // ... estilos existentes
});

export default PriceScreen;
