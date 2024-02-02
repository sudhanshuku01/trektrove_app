import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BestTime = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Best Time to Visit</Text>

      <Text style={styles.heading}>Best time to visit Haridwar | Best time to explore Haridwar</Text>

      <Text style={styles.paragraph}>
        The best time to visit Haridwar is during the months of October to March, which is considered the winter season. During this time, the weather is pleasant with cool temperatures, making it ideal for exploring the city and participating in various religious and cultural activities.
      </Text>

      <Text style={styles.paragraph}>
        The winter months also coincide with important festivals like Diwali and Makar Sankranti, adding to the vibrant atmosphere of Haridwar. However, it's important to note that Haridwar can get crowded during the peak tourist season, so it's advisable to plan your visit accordingly and make arrangements in advance for accommodation and transportation.
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
