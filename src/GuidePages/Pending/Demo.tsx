
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import commingsoon_IMG from '../../images/Others/commingsoon.jpg'

const Demo = () => {
  return (
    <View style={styles.container}>
      <Image
        source={commingsoon_IMG} // Replace with the path to your image
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.overlay}>
        <Text style={styles.title}>Coming Soon</Text>
        <Text style={styles.subtitle}>Stay tuned for exciting updates!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position:'relative',
    marginTop:100,
    marginBottom:10,
    justifyContent: 'center',
    alignItems: 'center',
    height:200,
  },
  image: {
    width: '100%',
    height:'100%',
    position: 'absolute',
    top:0,
    left:0,
    objectFit:'cover',
    borderRadius:20,
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 28,
    fontFamily:'Raleway-Bold',
    marginBottom: 10,
  },
  subtitle: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    fontFamily:'PlusJakartaSans-Medium'
  },
});

export default Demo;
