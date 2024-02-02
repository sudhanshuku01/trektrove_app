import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Itinerary = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Day wise Itinerary to Kartik Swami Temple Trek | Kartik Swami Temple Trek Full Guide</Text>

      <Text style={styles.paragraph}>
        The Kartik Swami trek from Rishikesh can be done in 2 days. Here is the day-wise trek route:
      </Text>

      <Text style={styles.heading}>Day 1: Rishikesh to Kanakchauri</Text>

      <Text style={styles.paragraph}>
        Start early in the morning from Rishikesh and drive to Kanakchauri, which is the starting point of the trek. It takes around 6-7 hours to reach Kanakchauri from Rishikesh.
      </Text>

      <Text style={styles.paragraph}>
        From Kanakchauri, start the trek to Kartik Swami Temple. The trek is around 3 km long and takes around 2-3 hours to complete. The trail passes through dense forests and beautiful meadows, offering stunning views of the surrounding mountains.
      </Text>

      <Text style={styles.paragraph}>
        After reaching the temple, spend some time exploring the temple and enjoy the scenic beauty of the region.
      </Text>

      <Text style={styles.bold}>Overnight stay in a campsite near the temple.</Text>

      <Text style={styles.heading}>Day 2: Kanakchauri to Rishikesh</Text>

      <Text style={styles.paragraph}>
        Wake up early in the morning and enjoy the beautiful sunrise over the Himalayas.
      </Text>

      <Text style={styles.paragraph}>
        After breakfast, start the descent to Kanakchauri.
      </Text>

      <Text style={styles.paragraph}>
        From Kanakchauri, drive back to Rishikesh, which takes around 6-7 hours.
      </Text>

      <Text style={styles.bold}>Note: The trek to Kartik Swami is relatively easy, but it involves walking on steep and rocky terrain. It's recommended to wear comfortable trekking shoes and carry sufficient water and snacks. It's also advisable to carry warm clothes and rain gear, as the weather in the mountains can be unpredictable. Additionally, it's recommended to hire a guide for the trek, especially if you are a first-time trekker.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  title: {
    fontSize: 23,
    marginTop: 15,
    fontFamily: 'Poppins-Black',
  },
  paragraph: {
    fontSize: 16,
    marginVertical: 5,
    lineHeight: 22,
    fontFamily: 'PlusJakartaSans-Regular',
  },
  bold: {
    fontSize: 16,
    marginVertical: 5,
    lineHeight: 22,
    fontFamily: 'PlusJakartaSans-Bold',
  },
  heading: {
    fontSize: 22,
    marginTop: 15,
    marginBottom: 5,
    fontFamily: 'Raleway-Bold',
  },
});

export default Itinerary;
