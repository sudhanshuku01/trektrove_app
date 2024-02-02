import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BestTime = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Best Time to Visit</Text>

      <Text style={styles.paragraph}>
        Nainital is an all-year destination, but the best weather is experienced between March and June. During this period, the temperature is pleasant, and the hill station is at its vibrant best. It's an ideal time for outdoor activities, sightseeing, and exploring the beauty of Nainital.
      </Text>

      <Text style={styles.paragraph}>
        Nainital receives heavy snowfall in winter, transforming the town into a white wonderland. This makes it a popular destination for Christmas and New Year celebrations. If you enjoy snow-covered landscapes and winter sports, visiting during the winter months can be a magical experience.
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
  paragraph: {
    fontSize: 16,
    marginVertical: 5,
    lineHeight: 22,
    fontFamily: 'PlusJakartaSans-Regular',
  },
});

export default BestTime;
