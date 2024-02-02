import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BestTime = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Best Time to Visit Surkanda Devi Temple</Text>

      <Text style={styles.paragraph}>
        The best time to visit Surkanda Devi Temple is from April to June and from September to November. During this time, the weather is pleasant, and the skies are clear, making it ideal for exploring the temple and the surrounding areas.
      </Text>

      <Text style={styles.paragraph}>
        The monsoon season from July to August is best avoided as the area receives heavy rainfall, which can make the trek to the temple difficult and unsafe. If you are still planning to visit during the monsoon season, be updated with roads and weather conditions.
      </Text>

      <Text style={styles.paragraph}>
        The winter months of December to February are cold and often covered in snow, making it difficult to access the temple.
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
  subHeading: {
    fontSize: 18,
    marginTop: 15,
    fontFamily: 'Raleway-Bold',
  },
});

export default BestTime;
