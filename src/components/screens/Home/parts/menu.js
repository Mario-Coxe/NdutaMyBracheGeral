import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import estilo from '../style/css_menu_inicial';

const MenuItem = ({source, text}) => (
  <TouchableOpacity style={estilo.estilo.BotaoEsquerdo}>
    <Image source={source} style={estilo.estilo.img} />
    <Text style={estilo.estilo.texto}>{text}</Text>
  </TouchableOpacity>
);

const Menu = () => {
  return (
    <View style={estilo.estilo.conteiner}>
      <View style={estilo.estilo.GrupoBotaoCima}>
        <MenuItem
          source={require('../../../../assets/icones/taxi.png')}
          text="Taxi"
        />
        <MenuItem
          source={require('../../../../assets/icones/aluguel.png')}
          text="Aluguel"
        />
      </View>
      <View style={estilo.estilo.GrupoBotaoBaixo}>
        <MenuItem
          source={require('../../../../assets/icones/turismo.png')}
          text="Turismo"
        />
        <MenuItem
          source={require('../../../../assets/icones/casamento.png')}
          text="Casamento"
        />
      </View>
    </View>
  );
};

export default Menu;
