import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import loader_IMG from '../images/Others/beach.png';

import * as Animatable from 'react-native-animatable';

const Apploader = () => {
  return (
    <View style={styles.loadercontainer}>
      <Animatable.Image
        animation="zoomIn"
        duration={500} // Specify the duration of the animation
        style={styles.image}
        iterationCount="infinite"
        source={loader_IMG}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loadercontainer: {
    position: 'absolute',
    height: Dimensions.get('window').height,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(256,256,256,0.4)',
    zIndex: 11,
    top: 0,
    left: 0,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
    objectFit: 'cover',
  },
});

export default Apploader;
