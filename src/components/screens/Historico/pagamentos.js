import S from '../../../components/common/myCommon/separador';
import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';

const DATA = [
  {
    id: '1',
    Nome: 'Agostinho Manuel',
    sms: 'pago peolo MC Express',
    tempo: '12:20 AM',
  },
  {id: '2', Nome: 'Jorge Antonio', sms: 'Pago por cash', tempo: '12:20 AM'},
];

const renderItem = ({item}) => (
  <SafeAreaView>
    <View style={styles.item}>
      <View style={styles.row}>
        <Text style={styles.title}>{item.Nome}</Text>
        <Text style={styles.time}>{item.tempo}</Text>
      </View>
      <Text style={styles.sms}>{item.sms}</Text>
    </View>
    <S />
  </SafeAreaView>
);

const Pagamentos = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 60,
    margin: 6,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    left: 60,
  },
  sms: {
    fontSize: 14,
    left: 60,
  },
  time: {
    right: 17,
    fontWeight: 'bold',
  },
});

export default Pagamentos;
