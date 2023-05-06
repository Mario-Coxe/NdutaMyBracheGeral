import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import LottieView from 'lottie-react-native';
import {ResponsiveUtil} from '../../util/ResponsiveUtil';

const CommonLoading = () => {
  const [show, setShow] = useState(false);

  const showLoading = () => {
    setShow(true);
  };

  const hideLoading = () => {
    setShow(false);
  };

  if (show) {
    return (
      <View style={styles.container}>
        <LottieView
          source={require('./loading.json')}
          autoPlay
          loop
          style={styles.loading}
        />
      </View>
    );
  }
  return null;
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999998,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  loading: {
    zIndex: 999999,
    width: ResponsiveUtil.width(50),
    height: ResponsiveUtil.height(50),
  },
});

export default CommonLoading;
