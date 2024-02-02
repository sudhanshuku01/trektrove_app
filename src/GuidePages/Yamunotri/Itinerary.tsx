import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Itinerary = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tour Itinerary</Text>
      <Text style={styles.subtitle}>Day wise Yamunotri Dham Route Full Detail | Day wise Itinerary for Yamunotri Dham</Text>

      <Text style={styles.paragraph}>
        Yamunotri Dham is one of the four sacred sites, collectively known as Chota Char Dham, which are located in the Indian state of Uttarakhand. Here's a day-wise itinerary for the Yamunotri trek from Dehradun:
      </Text>

      <Text style={styles.heading}>Day 1: Dehradun to Janki Chatti (170 km)</Text>
      <Text style={styles.paragraph}>
        You will start your journey early in the morning from Dehradun and drive towards Janki Chatti via Mussoorie and Barkot. The drive takes around 7-8 hours and is a scenic one, with beautiful views of the mountains and valleys.
      </Text>

      <Text style={styles.heading}>Day 2: Janki Chatti to Yamunotri and back (12 km)</Text>
      <Text style={styles.paragraph}>
        You will start your trek from Janki Chatti to Yamunotri early in the morning. The trek is approximately 6 km long and takes around 3-4 hours to complete. Once you reach Yamunotri, you can visit the temple and take a dip in the hot water spring. You will then trek back to Janki Chatti, which takes another 3-4 hours.
      </Text>

      <Text style={styles.heading}>Day 3: Janki Chatti to Dehradun (170 km)</Text>
      <Text style={styles.paragraph}>
        You will start your journey back to Dehradun early in the morning. The drive takes around 7-8 hours, and you will reach Dehradun by evening.
      </Text>

      <Text style={styles.paragraph}>
        Overall, the Yamunotri trek from Dehradun is a 3-day trip and is recommended for those who want to experience the beauty of the Garhwal Himalayas and the traditional route to Yamunotri Dham. It is advisable to check the weather forecast before embarking on the trek and to carry adequate warm clothing and essential supplies.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#555',
  },
  paragraph: {
    fontSize: 16,
    marginVertical: 5,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
});

export default Itinerary;
