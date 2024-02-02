import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HowToReach = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>How to Reach</Text>
      <Text style={styles.subTitle}>Location and How to Reach Ranikhet Hill Station</Text>

      <Text style={styles.paragraph}>
        Location: Almora District, Uttarakhand
      </Text>

      <Text style={styles.paragraph}>
        Nearest Railway Station to Ranikhet Hill Station: 96 km, Kathgodam Railway Station
      </Text>

      <Text style={styles.paragraph}>
        Nearest Airport to Ranikhet Hill Station: 115 km, Pantnagar Airport Udham Singh Nagar
      </Text>

      <Text style={styles.paragraph}>
        Ranikhet is one of the most popular hill stations in Uttarakhand since the British era and is well connected with motorable roads and major cities.
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
  subTitle: {
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

export default HowToReach;
