import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HowToReach = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>How to Reach Surkanda Devi Temple</Text>

      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Location:</Text> Tehri Garhwal District, Uttarakhand
      </Text>

      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Nearest Railway Station to Surkanda Devi Temple:</Text> 62 km, Dehradun Railway Station
      </Text>

      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Nearest Airport to Surkanda Devi Temple:</Text> 88 km, Jolly Grant Airport, Dehradun
      </Text>

      <Text style={styles.paragraph}>
        Kaddukhal Village is where the Surkanda Devi Trek starts with a total distance of 2 km uphill trek. Kaddukhal Village is connected with motorable roads and major nearby towns and cities.
      </Text>

      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Total Trek Distance to Surkanda Devi Temple:</Text> 4 km Both Side
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  title: {
    fontSize: 23,
    marginTop: 15,
    fontFamily: 'Poppins-Black',
  },
  paragraph: {
    fontSize: 16,
    marginVertical: 5,
    lineHeight: 22,
    fontFamily: 'PlusJakartaSans-Regular',
  },
  bold: {
    fontSize: 16,
    marginVertical: 5,
    lineHeight: 22,
    fontFamily: 'PlusJakartaSans-Bold',
  },
  heading: {
    fontSize: 22,
    marginTop: 15,
    marginBottom: 5,
    fontFamily: 'Raleway-Bold',
  },
  subHeading: {
    fontSize: 18,
    marginTop: 15,
    fontFamily: 'Raleway-Bold',
  },
});

export default HowToReach;
