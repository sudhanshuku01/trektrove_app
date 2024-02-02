import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BestTime = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Best Time to Visit</Text>

      <Text style={styles.heading}>Best Time to Visit Auli Hill Station</Text>

      <Text style={styles.paragraph}>
        The best time to visit Auli is from November to March, during the winter season. During this time, Auli is covered in a blanket of snow, making it an ideal destination for skiing and snowboarding. The temperatures during this time range from 0 to 10 degrees Celsius, and the weather is usually clear and sunny, offering stunning views of the surrounding mountain ranges.
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
