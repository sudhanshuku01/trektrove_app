// Create a new Overview.tsx file and add the following content

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Overview = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>History of Kamleshwar Mahadev Mandir, Srinagar, Uttarakhand</Text>

      <Text style={styles.paragraph}>
        Kamleshwar Mahadev Mandir is situated in Srinagar town in the Pauri Garhwal region of Uttarakhand. It holds the distinction of being one of the oldest temples in Uttarakhand, dedicated to Lord Shiva. According to Kedarkhand, it is recognized as one of the five Maheshwar Peethas of the Himalayas.
      </Text>

      <Text style={styles.paragraph}>
        Legend has it that Lord Rama, after killing Ravana, came to this place to atone for his sins. He worshipped Lord Shiva by chanting his name and offering 1000 flowers one by one. In a test, Lord Shiva accepted one flower, and when Lord Rama couldn't find the remaining one, he decided to replace it with his own eye. Impressed by Lord Rama's devotion, Lord Shiva appeared before him, earning Lord Rama the title of Kamleshwar (Kamal-Nayan).
      </Text>

      <Text style={styles.paragraph}>
        The temple is also known for a special ritual performed on Kartik Chaturdashi. Couples unable to bear children spend the entire night at the temple with a lamp, praying to Lord Shiva for the joy of having a child. Locals believe that many couples have had their prayers answered through this tradition.
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
    marginVertical: 5,
    lineHeight: 22,
    fontFamily: 'PlusJakartaSans-Regular',
  },
});

export default Overview;
