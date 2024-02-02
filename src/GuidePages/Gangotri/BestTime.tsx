import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BestTime = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Best Time to Visit Gangotri National Park</Text>

      <Text style={styles.paragraph}>
        The best time to visit Gangotri National Park is during the summer and autumn seasons, from the month of May to November. This period offers the most favourable weather conditions for exploring the park and its surroundings.
      </Text>

      <Text style={styles.subTitle}>Summer Season (May to June):</Text>
      <Text style={styles.paragraph}>
        This is the peak tourist season when temperatures range between 10°C and 25°C (50°F to 77°F). The weather is pleasant during the day, making it ideal for trekking and wildlife spotting. However, keep in mind that evenings and nights can be chilly, so it's advisable to carry warm cloths.
      </Text>

      <Text style={styles.subTitle}>Monsoon Season (July to September):</Text>
      <Text style={styles.paragraph}>
        Gangotri National Park experiences heavy rainfall during the monsoon season. Trekking and outdoor activities may be challenging due to slippery trails and increased risk of landslides. It is generally not recommended to visit during this time. If you are still planning to visit during Monsoon season, be update with weather and proper road conditions.
      </Text>

      <Text style={styles.subTitle}>Autumn Season (October to November):</Text>
      <Text style={styles.paragraph}>
        This is another popular season to visit the park, with mild temperatures ranging from 5°C to 20°C (41°F to 68°F). Autumn Season is a great time for trekking, wildlife viewing, and photography like activities.
      </Text>

      <Text style={styles.paragraph}>
        It's important to note that Gangotri National Park is situated at high altitude, so temperatures can drop significantly, especially at night. It's advisable to carry appropriate clothing, including warm layers, regardless of the season. Additionally, do check for any weather-related updates or advisories before planning your trip, as conditions can vary from year to year.
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
  subTitle: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  paragraph: {
    fontSize: 16,
    marginVertical: 5,
  },
});

export default BestTime;
