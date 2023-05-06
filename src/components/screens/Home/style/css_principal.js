import {StyleSheet} from 'react-native'
import { widthPercentageToDP as largura, heightPercentageToDP as altura, } from 'react-native-responsive-screen'
export const estilo=StyleSheet.create({
    conteiner:{

    },
    conteinerModAL:{
        backgroundColor: 'red',
        width:largura('100%'),
        height:altura('30%'),
        borderTopLeftRadius:50,
        borderTopRightRadius:50,
        borderColor:'#D6001B',
        elevation:6,
        top:457

    }

})