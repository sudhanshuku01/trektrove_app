import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HowToReach = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>How to Reach</Text>

      <Text style={styles.heading}>Location and How to Reach Nainital</Text>

      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Location:</Text> Nainital District, Kumaon Region, Uttarakhand.
      </Text>

      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Nearest Railway Station to Nainital Hill Station:</Text> 41 km Kathgodam Railway Station
      </Text>

      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Nearest Airport to Nainital:</Text> 72 km, Pantnagar Airport, Udham Singh Nagar
      </Text>

      <Text style={styles.paragraph}>
        Nainital is one of the famous hill stations in North India in the Kumaon Region of Uttarakhand State. The place is well connected with motorable roads to several major cities and towns.
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
