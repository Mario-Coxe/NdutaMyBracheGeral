import React, { Component } from 'react';
import { Image, StyleSheet, View, StatusBar, ActivityIndicator } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import BemVindoScreen from './BemVindoScreen';
import styles from './style/SplashEstilos';

const splashImg = require('../../../assets/images/splash1.png');
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { showSplash1: true, showSplash2: false };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ showSplash1: false, showSplash2: true });
      setTimeout(() => {
        this.setState({ showSplash2: false });
      }, 2000);
    }, 2000);
  }

  render() {
    if (this.state.showSplash1) {
      return (
        <View style={[styles.container, { backgroundColor: '#D6001B'}]}>
          <StatusBar barStyle="light-content" backgroundColor="#D6001B" />
          <Image source={require("../../../assets/images/splash1.png")} style={styles.splashImage} />
        </View>
      );
    } else if (this.state.showSplash2) {
      return (
        <View style={[styles.container, { backgroundColor: '#D6001B' }]}>
          <StatusBar barStyle="light-content" backgroundColor="#D6001B" />
          <Image source={require("../../../assets/images/splash2.png")} style={styles.splashImage2} />
          <ActivityIndicator size="large" color="#FFFFFF" />
        </View>
      );
    } else {
      return (
        <BemVindoScreen />
      );
    }
  }
}
