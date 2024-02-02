

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HowToReach = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>How to Reach Khirsu</Text>

      <Text style={styles.subHeading}>By Flight</Text>
      <Text style={styles.paragraph}>
        The nearest airport is Jolly Grant Airport, about 174 km away.
      </Text>

      <Text style={styles.subHeading}>By Train</Text>
      <Text style={styles.paragraph}>
        The nearest railhead is Kotdwar, about 127 km away.
      </Text>

      <Text style={styles.subHeading}>By Road</Text>
      <Text style={styles.paragraph}>
        Khirsu is connected by motorable roads to all the major towns and cities.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // Add any styling for the container if needed
  },
  heading: {
    fontSize: 22,
    marginTop: 15,
    marginBottom: 5,
    fontFamily: 'Raleway-Bold',
  },
  subHeading: {
    fontSize: 18,
    marginTop: 10,
    fontFamily: 'Raleway-SemiBold',
  },
  paragraph: {
    fontSize: 16,
    marginVertical: 10,
    lineHeight: 22,
    fontFamily: 'PlusJakartaSans-Regular',
  },
});

export default HowToReach;
