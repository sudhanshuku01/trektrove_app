import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

const BestTime = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Best Time to Visit</Text>

      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Best time to Visit Chandrabadni Temple | Best time to explore Chandrabadni Temple</Text>
      </Text>

      <Text style={styles.paragraph}>
        The best time to visit Chandrabadni Temple is during the months of April to June and September to November. During this time, the weather is pleasant, and the skies are clear, making it ideal for trekking and outdoor activities.
      </Text>

      <Text style={styles.paragraph}>
        It is recommended to avoid visiting the temple during the monsoon season, which lasts from July to August, as the region receives heavy rainfall, and the roads may become difficult to navigate. If you are still planning to visit, be updated with road and weather conditions.
      </Text>

      <Text style={styles.paragraph}>
        Additionally, during the winter months of December to February, the region experiences snowfall, which may make it difficult to access the temple.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 20,
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
  bold: {
    fontSize: 16,
    marginVertical: 5,
    lineHeight: 22,
    fontFamily: 'PlusJakartaSans-Bold',
  },
});

export default BestTime;
