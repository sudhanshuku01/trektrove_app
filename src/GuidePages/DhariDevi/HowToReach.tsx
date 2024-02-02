
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HowToReach = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>How to Reach Dhari Devi Temple</Text>

      <Text style={styles.paragraph}>
        <Text style={styles.bold}>By Flight:</Text> The nearest airport is Jolly Grant Airport in Dehradun, approximately 133 km away.
      </Text>

      <Text style={styles.paragraph}>
        <Text style={styles.bold}>By Train:</Text> Rishikesh is the closest railway station, located about 117 km away.
      </Text>

      <Text style={styles.paragraph}>
        <Text style={styles.bold}>By Road:</Text> Dhari Devi Temple is situated approximately 14 km from Srinagar and 20 km from Rudraprayag. It is easily accessible by car or taxi.
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
