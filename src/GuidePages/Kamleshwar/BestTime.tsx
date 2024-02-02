// Create a new BestTime.tsx file and add the following content

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BestTime = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Main Highlights of Kamleshwar Mahadev Mandir, Srinagar, Uttarakhand</Text>

      <Text style={styles.subHeading}>Best Time to Visit:</Text>
      <Text style={styles.paragraph}>
        The main highlights of Kamleshwar Mahadev Mandir include the following notable events:
      </Text>
      <Text style={styles.paragraph}>- Shivratri</Text>
      <Text style={styles.paragraph}>- Kartik Chaturdashi</Text>
      <Text style={styles.paragraph}>- Achra Saptami</Text>

      <Text style={styles.subHeading}>Region:</Text>
      <Text style={styles.paragraph}>Srinagar, Pauri Garhwal, Uttarakhand</Text>

      <Text style={styles.subHeading}>Maximum Altitude:</Text>
      <Text style={styles.paragraph}>560m</Text>

      <Text style={styles.subHeading}>Entry Fee:</Text>
      <Text style={styles.paragraph}>None</Text>

      <Text style={styles.subHeading}>Timing:</Text>
      <Text style={styles.paragraph}>6:00 AM to 7:00 PM</Text>

      <Text style={styles.paragraph}>
        Shiva Linga is present in the main sanctum of the temple, and apart from that, this temple also houses idols of Lord Ganesha, Adi Shankaracharya, Goddess Saraswathi, Goddess Ganga, Annapurna, and Nandi.
      </Text>

      <Text style={styles.note}>Note: At Achar Saptami, which is the second day of Vasant Panchami, Lord Shiva is offered 52 types of dishes (Bhog).</Text>
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
  note: {
    fontSize: 16,
    marginVertical: 10,
    fontStyle: 'italic',
    fontFamily: 'PlusJakartaSans-Regular',
  },
});

export default BestTime;
