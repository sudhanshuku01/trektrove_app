// Create a new Overview.tsx file and add the following content

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Overview = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Pauri</Text>

      <Text style={styles.paragraph}>
        Pauri is a picturesque town situated in Pauri Garhwal at an altitude of 1,814 meters above sea level. From this serene location, visitors can enjoy breathtaking views of the Himalayan peaks, including Nanda Devi and Trisul. Pauri has become a favored destination for various individuals, including tourists, researchers, and students.
      </Text>

      <Text style={styles.paragraph}>
        Surrounded by districts such as Dehradun, Chamoli, Nainital, and Bijnor, Pauri offers a perfect blend of natural beauty and cultural richness. The town is particularly popular among trekkers, paragliding enthusiasts, and those who seek solace in the lap of nature.
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
