import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HowToReach= () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>How to Reach</Text>

      <Text style={styles.heading}>Location and How to Reach Tungnath Mahadev Temple</Text>

      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Location:</Text> Rudraprayagn district, Uttarakhand
      </Text>

      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Nearest Bus Stand to Tungnath Mahadev Temple:</Text> 70 km, Rudraprayag
      </Text>

      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Nearest Railway Station to Tungnath Mahadev Temple:</Text> 206 km, Rishikesh Railway Station
      </Text>

      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Nearest Airport to Tungnath Mahadev Temple:</Text> 220 km, Jolly Grant Airport, Dehradun
      </Text>

      <Text style={styles.paragraph}>
        Shared taxis are available from Rudraprayag or Ukimath or Agastmuni to Chopta.
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
