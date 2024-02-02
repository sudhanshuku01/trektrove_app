import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HowToReach = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>How to Reach Koteshwar Mahadev Temple</Text>

      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Location:</Text> Rudraprayag, Garhwal Region, Uttarakhand.
      </Text>

      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Nearest Railway Station to Koteshwar Dham Temple:</Text> 139 km, Rishikesh Railway Station
      </Text>

      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Nearest Airport to Koteshwar Dham Temple:</Text> 153 km, Jolly Grant Airport, Dehradun.
      </Text>

      <Text style={styles.paragraph}>
        Koteshwar Mahadev Temple is approximately 3 km from the Main Market in Rudraprayag and is well-connected with a motorable road.
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
    fontFamily: 'PlusJakartaSans-Bold',
  },
});

export default HowToReach;
