import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HowToReach = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>How to Reach</Text>

      <Text style={styles.heading}>
        Location and How to Reach Kedarnath Dham
      </Text>

      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Location:</Text> Rudraprayag District, Garhwal Region, Uttarakhand.
      </Text>

      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Nearest Railway Station to Kedarnath:</Text> 216 km, Rishikesh Railway Station
      </Text>

      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Nearest Airport to Kedarnath:</Text> 254 km, Jolly Grant Airport, Dehradun
      </Text>

      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Last Motorable Road to Kedarnath:</Text> 16 km Gaurikund Town
      </Text>

      <Text style={styles.paragraph}>
        Kedarnath Trekking Distance is 16 km from Gaurikund Town. Alternative options other than trekking, either you can book a horse ride or book a helicopter ride. Gaurikund Town is well connected with motorable roads and major nearby towns.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

  },
  title: {
    fontSize: 23,
    marginTop: 15,
    fontFamily: 'Poppins-Black',
  },
  heading:{
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
