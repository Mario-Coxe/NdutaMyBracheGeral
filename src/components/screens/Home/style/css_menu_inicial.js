import {StyleSheet} from 'react-native'
 const estilo=StyleSheet.create({
     
    conteiner:{
                backgroundColor:'#fff',
                width:'100%',
                height:'45%',
                borderTopLeftRadius:50,
                borderTopRightRadius:50,
                elevation:4,
                borderStyle:'solid',
                borderColor:"#D6001B"
            },
    GrupoBotaoCima:{
                flexDirection:"row",
                justifyContent:'space-between',
                bottom:20
            },
    GrupoBotaoBaixo:{
                flexDirection:"row",
                justifyContent:'space-between',
                top:8
            },
    BotaoEsquerdo:{
                flexDirection:'row',
                justifyContent:'space-around',
                backgroundColor:'white',
                top:45,width:'37%',
                padding:10,
                borderRadius:20,
                elevation:7,
                left:20
    },
    BotaoDireto:{
                flexDirection:'row',
                justifyContent:'space-around',
                backgroundColor:'white',
                top:45,width:'37%',
                padding:10,
                borderRadius:20,
                elevation:7,
                right:34
        
    },
    img:{
        height:45,
        width:45
    },
    texto:{
         fontSize:14,
         fontWeight:'bold'
        }

    
})
export default{estilo}