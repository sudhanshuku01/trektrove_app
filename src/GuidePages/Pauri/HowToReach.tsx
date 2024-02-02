// Create a new HowToReach.tsx file and add the following content

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HowToReach = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>How to Reach Pauri</Text>

      <Text style={styles.subheading}>By Flight</Text>
      <Text style={styles.paragraph}>
        The nearest airport to Pauri is Jollygrant Airport in Dehradun. From Dehradun, you can take a bus to reach Pauri, covering a distance of approximately 71 kms. Alternatively, Chandigarh Airport is another option, located around 200 kms away.
      </Text>

      <Text style={styles.subheading}>By Train</Text>
      <Text style={styles.paragraph}>
        The most reliable railway station to reach Pauri is Kotdwar. From Kotdwar, you can find a bus or cab to reach Pauri. Kotdwar is well-connected to major cities across the country.
      </Text>

      <Text style={styles.subheading}>By Road</Text>
      <Text style={styles.paragraph}>
        Pauri is accessible through NH-119, providing a well-maintained road path for a reliable journey. You can take a bus via NH-119 to Kotdwar or directly to Pauri.
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
  subheading: {
    fontSize: 18,
    marginTop: 10,
    marginBottom: 5,
    fontFamily: 'Raleway-Medium',
  },
  paragraph: {
    fontSize: 16,
    marginVertical: 10,
    lineHeight: 22,
    fontFamily: 'PlusJakartaSans-Regular',
  },
});

export default HowToReach;
