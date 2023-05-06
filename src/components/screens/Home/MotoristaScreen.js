import React from 'react';
import {Text, View, Image} from 'react-native';
import estilo from './style/css_motorista';
import BotaoRecto from '../../common/myCommon/BotaoRecto';

const Motorista = () => {
  return (
    <View style={estilo.estilo.conteiner}>
      <View>
        <View style={estilo.estilo.avatarContainer}>
          <Image
            source={require('../../../assets/icones/avatar.png')}
            style={estilo.estilo.avatar}
          />
        </View>

        <View style={estilo.estilo.infoContainer}>
          <Text style={estilo.estilo.label}>Motorista:</Text>
          <Text style={estilo.estilo.motoristaNome}>Laurindo Antonio</Text>
          <View style={estilo.estilo.row}>
            <Text style={estilo.estilo.bold}>viatura:</Text>
            <Text style={estilo.estilo.boldRed}> Azul</Text>
          </View>
          <View style={estilo.estilo.row}>
            <Text style={estilo.estilo.bold}>cor:</Text>
            <Text style={estilo.estilo.boldRed}> Cinzento</Text>
          </View>
          <View style={estilo.estilo.row}>
            <Text style={estilo.estilo.bold}>telefone:</Text>
            <Text style={estilo.estilo.boldRed}> 992820277</Text>
          </View>
        </View>
      </View>

      <View style={estilo.estilo.botaoContainer}>
        <View style={estilo.estilo.botaoWrapper}>
          <BotaoRecto titulo={'cancelar'} />
        </View>
        <View style={estilo.estilo.botaoWrapper}>
          <BotaoRecto titulo={'chamar'} />
        </View>
        <View style={estilo.estilo.botaoWrapper}>
          <BotaoRecto titulo={'sms'} />
        </View>
      </View>
    </View>
  );
};

export default Motorista;
