import {StyleSheet} from 'react-native'
 const estilo=StyleSheet.create({
     
    conteiner:{
                backgroundColor:'#fff',
                width:'100%',
                height:'45%',
                borderTopLeftRadius:50,
                borderTopRightRadius:50,
                elevation:4,
               
              
            },
    GrupoBotaoCima:{
                flexDirection:"row",
                justifyContent:'space-between',
                bottom:20
            },
    GrupoBotaoBaixo:{
                flexDirection:"row",
                justifyContent:'space-between',
                top:250
            },
    BotaoEsquerdo:{
            
                backgroundColor:'#D6001B',
                top:45,width:'20%',
                padding:10,
                borderRadius:20,
                elevation:7,
                left:20
    },
    BotaoDireto:{
                
                backgroundColor:'#D6001B',
                top:45,width:'20%',
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