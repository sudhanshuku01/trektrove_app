import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BestTime = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Best Time to Visit</Text>

      <Text style={styles.heading}>Best time to visit Mussoorie Hill Station | Best time to explore Mussoorie Hill Station</Text>

      <Text style={styles.paragraph}>
        The best time to visit Mussoorie Hill Station is between April to June and September to November. During the summer months of April to June, the weather is pleasant with temperatures ranging from 20°C to 25°C, making it an ideal time to enjoy outdoor activities like trekking, camping, and sightseeing.
      </Text>

      <Text style={styles.paragraph}>
        It is recommended to avoid visiting the temple during the monsoon season, which lasts from July to August, as the region receives heavy rainfall and the roads may become difficult to navigate. If you are still planning to visit, be updated with road and weather conditions.
      </Text>

      <Text style={styles.paragraph}>
        Additionally, during the winter months of December to February, the region experiences snowfall. If you love to experience snowfall, you can visit during the winter months.
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
  bold: {
    fontFamily: 'PlusJakartaSans-Bold',
  },
});

export default BestTime;
