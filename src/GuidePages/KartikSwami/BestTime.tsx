import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BestTime = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Best Time to Visit Kartik Swami Temple | Best Time to Explore Kartik Swami Temple</Text>

      <Text style={styles.paragraph}>
        The best time to visit Kartik Swami Temple is during the summer months from April to June and the post-monsoon season from September to November. During these months, the weather is pleasant, and the skies are clear, providing excellent views of the surrounding mountains.
      </Text>

      <Text style={styles.paragraph}>
        The monsoon season, which lasts from July to August, is best avoided as the region receives heavy rainfall, which can lead to landslides and roadblocks. If you are still planning to visit the temple, be updated with roads and weather conditions.
      </Text>

      <Text style={styles.paragraph}>
        If you love to explore snowfall and experience snow in the Himalayan region, you can visit Kartik Swami Temple during winters from December to February.
      </Text>
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
});

export default BestTime;
