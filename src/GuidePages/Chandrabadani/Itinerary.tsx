import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

const Itinerary = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Tour Itinerary</Text>

      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Location and how to reach Chandrabadni Temple</Text>
      </Text>

      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Location:</Text> Tehri Garhwal District, Uttarakhand
      </Text>

      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Nearest Railway Station to Chandrabadni Temple:</Text> 106 km, Rishikesh Railway Station
      </Text>

      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Nearest Airport to Chandrabadni Temple:</Text> 120 km, Jolly Grant Airport, Dehradun
      </Text>

      <Text style={styles.paragraph}>
        Jhanau Village is where the Chandrabadni Temple Trek starts, with a total distance of a 2km uphill trek. The village is connected with motorable roads and major nearby towns and cities.
      </Text>

      <Text style={styles.bold}>Total Trek Distance to Chandrabadni Temple:</Text>
      <Text style={styles.paragraph}>2km Both Side</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 20,
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
    fontSize: 16,
    marginVertical: 5,
    lineHeight: 22,
    fontFamily: 'PlusJakartaSans-Bold',
  },
});

export default Itinerary;
