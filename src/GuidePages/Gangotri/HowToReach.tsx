import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HowToReach = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>How to Reach Gangotri National Park</Text>

      <Text style={styles.paragraph}>
        <Text style={styles.subTitle}>Location:</Text> Uttarkashi District – Garhwal Region, Uttarakhand
      </Text>

      <Text style={styles.paragraph}>
        <Text style={styles.subTitle}>Nearest Railway Station:</Text> 289 kilometres approx., Dehradun Railway Station
      </Text>

      <Text style={styles.paragraph}>
        <Text style={styles.subTitle}>Nearest Airport:</Text> 266 kilometres approx., Jolly Grant Airport, Dehradun
      </Text>

      <Text style={styles.title}>Gangotri National Park Route</Text>

      <Text style={styles.paragraph}>
        Dehradun – Mussoorie – Bhediyana – Munogi – Barnigad Khatal – Naugaun – Chakragaun – Dadalgaun – Wan – Dunda – Uttarkashi – Maneri – Dwari – Taknaur Range – Gangotri National Park
      </Text>

      <Text style={styles.paragraph}>
        Dehradun – Rishikesh – Narendranagar – New Tehri – Dunda – Uttarkashi – Maneri – Dwari – Taknaur Range – Gangotri National Park
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
  subTitle: {
    fontWeight: 'bold',
  },
  paragraph: {
    fontSize: 16,
    marginVertical: 5,
  },
});

export default HowToReach;
