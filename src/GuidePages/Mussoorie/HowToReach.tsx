import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HowToReach = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>How to Reach</Text>

      <Text style={styles.heading}>Location and How to Reach Mussoorie Hill Station</Text>

      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Location:</Text> Mussoorie Town, Dehradun District, Uttarakhand
      </Text>

      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Nearest Railway Station to Mussoorie:</Text> 35 kilometers, Dehradun Railway Station
      </Text>

      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Nearest Airport to Mussoorie:</Text> Jolly Grant Airport, Dehradun, 60 km
      </Text>

      <Text style={styles.paragraph}>
        Mussoorie Town is well connected with motorable roads and nearby cities. Government and private transports are easily available from Dehradun to reach Mussoorie Hill Station.
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
  bold: {
    fontFamily: 'PlusJakartaSans-Bold',
  },
});

export default HowToReach;
