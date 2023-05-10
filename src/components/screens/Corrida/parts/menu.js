import {Text, View, Image} from 'react-native';
import React, {Component} from 'react';

export default class menu extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: '(50,50,50)',
          width: '100%',
          height: 50,
          elevation: 7,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('../../../../assets/images/voltar.png')}
            style={{width: '20%', height: 30, resizeMode: 'contain', left: -80}}
          />
          <Image
            source={require('../../../../assets/images/ndutaVermelho.png')}
            style={{
              width: '50%',
              height: 35,
              justifyContent: 'center',
              alignItems: 'center',
              resizeMode: 'contain',
              right: 40,
            }}
          />
          <Image
            source={require('../../../../assets/images/configuracao.png')}
            style={{
              width: '20%',
              height: 30,
              resizeMode: 'contain',
              position: 'absolute',
              right: -80,
            }}
          />
        </View>
      </View>
    );
  }
}
