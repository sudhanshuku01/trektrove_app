import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const IncExc = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Best Time to Visit</Text>

      <Text style={styles.heading}>
        Best Time to Visit Badrinath Dham Temple | Best time to explore Badrinath Dham Temple
      </Text>

      <Text style={styles.paragraph}>
        Badrinath Dham remains open for only six months in a year from April end to mid-November and remains closed in winters due to extreme weather conditions and heavy snowfall in Badrinath Valley. The best time to visit Badrinath is in May, June, September, October, and November months. If you are planning to visit in the Monsoon season, be updated with weather and road conditions.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 23,
    marginTop: 15,
    fontFamily: 'Poppins-Black',
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
});

export default IncExc;
