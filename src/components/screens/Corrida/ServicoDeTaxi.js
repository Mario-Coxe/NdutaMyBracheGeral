/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Mapa from './MapaScreen';
import CarOption from '../../common/myCommon/myCommon';
const TaxiScreen = () => {
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <View style={{flex: 1}}>
      <Mapa />
      {modalVisible && (
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <CarOption
                  imageSource={require('../../../assets/imagens/carro.png')}
                  text="Econômico"
                />
                <CarOption
                  imageSource={require('../../../assets/imagens/carro.png')}
                  text="SUV"
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  top: 30,
                }}>
                <CarOption
                  imageSource={require('../../../assets/imagens/carro.png')}
                  text="Carrinha"
                />
                <CarOption
                  imageSource={require('../../../assets/imagens/carro.png')}
                  text="Famíliar"
                />
              </View>
            </View>
            <View>
              <TouchableOpacity
                style={styles.button}
                onPress={() => setModalVisible(false)}>
                <Text style={styles.buttonText}>Fechar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
      {!modalVisible && (
        <TouchableOpacity
          style={{position: 'absolute', bottom: 20, left: 10}}
          onPress={() => setModalVisible(true)}>
          <Text
            style={{
              fontSize: 13,
              fontWeight: 'bold',
              color: '#D6001B',
              right: -140,
              backgroundColor: '#FFFFFF',
              borderColor: '#D6001B',
              borderRadius: 10,
              paddingVertical: 8,
              paddingHorizontal: 36,
            }}>
            Carro
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  carOption: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    top: 45,
    width: '45%',
    padding: 10,
    borderRadius: 20,
    elevation: 7,
  },
  button: {
    position: 'absolute',
    bottom: -115,
    left: 50,
    right: 50,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D6001B',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  buttonText: {
    color: 'red',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 12,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.0)',
  },
  modalContent: {
    backgroundColor: '#fff',
    width: '100%',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    paddingHorizontal: 20,
    paddingBottom: 30,
    height: 300,
  },
});

export default TaxiScreen;
