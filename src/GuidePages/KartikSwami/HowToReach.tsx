import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HowToReach = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Location and How to Reach Kartik Swami Temple</Text>

      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Location:</Text> Kanakchauri Village, Rudraprayag, Garhwal Region, Uttarakhand.
      </Text>

      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Nearest Railway Station to Kartik Swami Temple:</Text> 181 km, Rishikesh Railway Station
      </Text>

      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Nearest Airport to Kartik Swami Temple:</Text> 222 km, Jolly Grant Airport, Dehradun.
      </Text>

      <Text style={styles.paragraph}>
        Kartik Swami Temple trek is an easy trek of around 3 km. You will love to explore beautiful views around the Himalayan snow-capped peaks and dense forest of pine, oak, deodar, and rhododendron trees.
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
    fontFamily: 'PlusJakartaSans-Bold',
  },
});

export default HowToReach;
