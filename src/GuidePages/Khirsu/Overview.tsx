// Create a new Overview.tsx file and add the following content

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Overview = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>What to Know</Text>

      <Text style={styles.paragraph}>
        If you are looking for an idyllic and offbeat Himalayan holiday, Khirsu is where you should be. Undiscovered and surrounded by lush forests and orchards, the hamlet offers a tranquil experience. The picturesque hill station located in the Pauri Garhwal district offers spectacular views of the Himalayas, including a panorama of peaks like the Panchachuli, Nanda Devi, Nanda Kot, and Trishul.
      </Text>

      <Text style={styles.paragraph}>
        Perched at a height of 1,700 m, Khirsu is dotted with dense pine and deodar forests, which make for excellent venues for nature walks and hikes. The hamlet is endowed with lush orchards of apples and wildflowers of every kind. The village is also an agricultural hub, and surrounding it are picturesque terrace farms.
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
    marginVertical: 10,
    lineHeight: 22,
    fontFamily: 'PlusJakartaSans-Regular',
  },
});

export default Overview;
