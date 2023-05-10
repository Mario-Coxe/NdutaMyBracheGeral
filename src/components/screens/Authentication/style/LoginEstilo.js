import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  cabecalho: {
    alignItems: 'center',
    marginBottom: 40,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#D6001B',
  },
  form: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#F4F8FB',
    color: '#000',
    fontSize: 15,
  },
  botaoContainer: {
    alignItems: 'center',
    marginTop: 1,
  },
  subtitle: {
    fontSize: 12,
    color: '#000',
  },
  container2: {
    backgroundColor: '#D6001B',
    width: '100%',
    height: '100%',
  },
  camada1: {
    backgroundColor: 'white',
    width: '100%',
    height: '95%',
    position: 'absolute',
    bottom: 0,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  esqueceu: {
    marginTop: 0,
    color: 'black',
    textAlign: 'right',
  },
  error: {
    marginTop: 0,
    color: 'red',
    textAlign: 'right',
  },  
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 100,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 5,
    margin: 5,
  },
  facebookButton: {
    backgroundColor: '#3b5998',
  },
  googleButton: {
    backgroundColor: '#db4a39',
  },
  buttonText: {
    marginLeft: 10,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
