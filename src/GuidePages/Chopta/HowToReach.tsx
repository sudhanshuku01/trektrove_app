// Update the existing HowToReach.tsx file with the following content

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HowToReach = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>How to Reach Chopta</Text>

      <Text style={styles.paragraph}>
        Chopta, known as "Mini Switzerland," is easily accessible from Delhi
        and Haridwar. It's about 226 km from Haridwar, taking 8-10 hours by bus
        or taxi.
      </Text>

      <Text style={styles.paragraph}>
        <Text style={styles.bold}>By Road:</Text> Chopta is well connected by
        motorable roads. Take a bus to Rudraprayag or Ukhimath, then a taxi to
        Chopta. It's recommended to hire a taxi for a round trip.
      </Text>

      <Text style={styles.paragraph}>
        <Text style={styles.bold}>By Rail:</Text> The nearest railway station
        is Haridwar (226 km). Buses and Taxis to Chopta are available from
        Rishikesh.
      </Text>

      <Text style={styles.paragraph}>
        <Text style={styles.bold}>By Air:</Text> The nearest airport is Jolly
        Grant Airport (219 km) in Dehradun. Taxis are available from the
        airport.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 8,
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default HowToReach;
