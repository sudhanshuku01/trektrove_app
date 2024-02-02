// Create a new BestTime.tsx file and add the following content

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BestTime = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Best Time to Visit</Text>

      <Text style={styles.paragraph}>
        The weather in Pauri remains pleasant throughout the year, offering a delightful experience to visitors. During January and February, the region experiences extreme cold due to snowfall, creating a winter wonderland.
      </Text>

      <Text style={styles.paragraph}>
        As summer approaches, the forests come alive with blooming flowers, and tourists flock to witness the vibrant greenery and enjoy the cool weather. Summer months are particularly favored for exploring the natural beauty of Pauri.
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

export default BestTime;
