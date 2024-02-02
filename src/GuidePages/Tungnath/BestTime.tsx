import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BestTime = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Best Time to Visit</Text>

      <Text style={styles.heading}>
        Best time to visit Tungnath Mahadev Temple | Best time to explore Tungnath Mahadev Temple
      </Text>

      <Text style={styles.paragraph}>
        The best time to visit Tungnath Mahadev Temple is during the summer months of May to June and the autumn months of September to November. During these months, the weather is pleasant, and the temperature ranges between 10°C to 30°C.
      </Text>

      <Text style={styles.paragraph}>
        During the winter months of December to February, the region experiences heavy snowfall, and the temple remains closed due to the extreme weather conditions. However, if you are looking for a snow-filled adventure, you can plan your visit during the winter months. If you are planning to visit during Monsoon season, be update with roads and weather condition.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 23,
    marginTop: 15,
    fontFamily: 'Poppins-Black',
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

export default BestTime;
