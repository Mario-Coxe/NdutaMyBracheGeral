import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../../components/screens/Home/HomeScreen2';
import MapaScreen from '../../components/screens/Corrida/MapaScreen';
import MotoristaScreen from '../../components/screens/Home/MotoristaScreen';
import HistoryScreen from '../../components/screens/Historico/HistoryScreen';
import ChatScreen from '../../components/screens/Chat/conversas/ChatScreen';
import MessageScreen from '../../components/screens/Chat/mensagens/MessageScreen';
import CorridaDetailsScreen from '../../components/screens/Corrida/detalhesDaCorrida/CorridaDetailsScreen';
import InserirEndereco from '../../components/screens/Corrida/InserirEndereco';
import Teste from '../../components/screens/Corrida/teste';
import Rota from '../../components/screens/Corrida/RotaScreen';
import RotaPercorrida from '../../components/screens/Corrida/RotaPercorridaScreen'

const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false, // esconde o título da screen
      }}>
        
      <Stack.Screen name="InserirEndereco" component={InserirEndereco} />
      <Stack.Screen name="Teste" component={Teste} />
      <Stack.Screen name="RotaPercorrida" component={RotaPercorrida} />
     
      <Stack.Screen name="Rota" component={Rota} />
      <Stack.Screen name="Mapa" component={MapaScreen} />
      <Stack.Screen name="Motorista" component={MotoristaScreen} />
      <Stack.Screen name="CorridaDetails" component={CorridaDetailsScreen} />
      <Stack.Screen name="Message" component={MessageScreen} />
      <Stack.Screen name="Chat" component={ChatScreen} />
      <Stack.Screen name="History" component={HistoryScreen} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
