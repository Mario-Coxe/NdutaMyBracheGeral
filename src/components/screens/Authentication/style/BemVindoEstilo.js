import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  buttonText: {
    fontWeight: 'bold',
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D6001B',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 30,
  },
  textContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 30,
  },
  subtitle: {
    fontSize: 14,
    marginTop: 30,
    marginBottom: 30,
    textAlign: 'center',
    color: '#fff',
  },
  buttonsContainer: {
    width: '90%',
    flexDirection: 'column',
    marginTop: 20,
  },
  buttonContainer: {
    width: '100%',
  },
  button: {
    height: 55,
    borderRadius: 15,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  idiomaContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  idiomaText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#D6001B',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    borderColor: '#fff',
    borderWidth: 2,
    borderTopWidth: 0,
  },
  modalButton: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  modalButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});
