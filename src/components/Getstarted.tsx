import React, { useState, useEffect } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Animated,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import yova_tourism_IMG from '../images/Others/yuvatourismicon.jpg';

const Getstarted = () => {
  const [isVisible, setIsVisible] = useState(true);
  const height = useState(new Animated.Value(400))[0];

  const hideWelcome = () => {
    Animated.timing(height, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
    }).start(() => setIsVisible(false));
  };
  useEffect(() => {
    setTimeout(() => {
      hideWelcome();
    }, 4000);
  }, []);

  return (
    <>
      {isVisible && (
        <Animated.View style={[styles.container, { height: height }]}>
          <LinearGradient
            colors={['#00b89f', '#00b89f']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={[styles.linearGradient]}>
            <Image style={styles.yovaimage} source={yova_tourism_IMG} />
            <Text style={styles.text1}>Yuva Tourism Club Welcome You</Text>
            <Text style={styles.text2}>To Explore The Uttarakhand</Text>
          </LinearGradient>
        </Animated.View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    overflow: 'hidden',
  },
  linearGradient: {
    position: 'relative',
    borderBottomRightRadius: 150,
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  yovaimage: {
    height: 140,
    width: 140,
    objectFit: 'cover',
    borderRadius: 100,
  },
  text1: {
    fontFamily: 'Poppins-Bold',
    fontSize: 23,
    textAlign: 'center',
    color: '#eff1ee',
  },
  text2: {
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'PlusJakartaSans-Regular',
    color: '#eff1ee',
  },
});

export default Getstarted;
