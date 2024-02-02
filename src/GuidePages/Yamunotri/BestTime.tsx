import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
 
const BestTime = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Best Time to Visit</Text>
      <Text style={styles.subtitle}>Best time to visit Yamunotri Dham Temple | Best time to explore Yamunotri Trek</Text>

      <Text style={styles.paragraph}>
        The best time to visit Yamunotri Dham is during the summer months, which are from mid-April to June and then again from September to November during the autumn season. During these months, the weather is pleasant, and the temperature ranges from 10°C to 20°C, making it comfortable for visitors to explore the temple and the surrounding areas.
      </Text>

      <Text style={styles.paragraph}>
        The monsoon season, which lasts from July to August, should be avoided as the region receives heavy rainfall, and the trekking routes can become dangerous and difficult to navigate. If you are still planning to visit during monsoon be update with roads and weather condition.
      </Text>

      <Text style={styles.paragraph}>
        The winter season, which lasts from December to March, is also not suitable for visiting Yamunotri Dham as the region experiences heavy snowfall, and the temple remains closed during this time.
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
});

export default BestTime;
