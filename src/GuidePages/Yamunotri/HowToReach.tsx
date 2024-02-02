import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HowToReach = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>How to Reach</Text>
      <Text style={styles.subtitle}>Location and How to reach Yamunotri Dham Temple</Text>

      <Text style={styles.paragraph}>
        Location: Uttarkashi, Garhwal Region, Uttarakhand.
      </Text>

      <Text style={styles.paragraph}>
        Nearest Railway Station to Yamunotri Dham: 176 km, Dehradun Railway Station.
      </Text>

      <Text style={styles.paragraph}>
        Nearest Airport to Yamunotri Dham: 197 km, Jolly Grant Airport, Dehradun.
      </Text>

      <Text style={styles.paragraph}>
        Janki Chatti Village is from where Yamunotri Trek starts is well connected with major roads and several major cities.
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

export default HowToReach;
