import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './Estilos/BotaoRectoClienteEstilo'

const BotaoRecto = ({titulo}) => {
    const onPress = () =>" setCount(prevCount => prevCount + 1)";
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={{color:'white',fontSize:14}}>
             {titulo} 
              </Text>
        </TouchableOpacity>
      </View>
    );
}

export default BotaoRecto