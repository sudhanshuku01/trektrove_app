// Create a new HowToReach.tsx file and add the following content

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HowToReach = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>How to Reach Kamleshwar Mahadev Mandir, Srinagar</Text>

      <Text style={styles.paragraph}>
        The following map location shows the exact location of Kamleshwar Mandir.
      </Text>

      <Text style={styles.subHeading}>BY AIR:</Text>
      <Text style={styles.paragraph}>
        The nearest airport is Jolly Grant Airport, which is approximately 151 km away from Kamleshwar Mandir. From the airport, you can take a taxi or bus to reach your destination.
      </Text>

      <Text style={styles.subHeading}>BY TRAIN:</Text>
      <Text style={styles.paragraph}>
        The nearest railway station is Rishikesh Railway Station, located about 104 km away from Kamleshwar Mandir. You can hire a taxi or use other available transportation options to cover the remaining distance.
      </Text>

      <Text style={styles.subHeading}>BY ROAD:</Text>
      <Text style={styles.paragraph}>
        Srinagar Garhwal is well connected by road to other districts of Uttarakhand. You can easily book a taxi or bus from places like Dehradun, Haridwar, and Rishikesh to reach Kamleshwar Mandir.
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
  subHeading: {
    fontSize: 18,
    marginTop: 15,
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
