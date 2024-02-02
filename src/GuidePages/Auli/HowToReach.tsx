import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HowToReach = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>How to Reach</Text>

      <Text style={styles.heading}>Location and How to Reach Auli Hill Station</Text>

      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Location:</Text> Auli, Chamoli Garhwal, Uttarakhand
      </Text>

      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Nearest Railway Station to Auli Hill Station:</Text> 281 km, Rishikesh Railway Station
      </Text>

      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Nearest Airport to Auli Hill Station:</Text> 310 km, Jolly Grant Airport, Dehradun
      </Text>

      <Text style={styles.paragraph}>
        Around 15 km from Joshimath Town, Auli is well connected with motorable roads and major nearby towns. Another way to reach Auli is the Auli Ropeway. This cable car provides breathtaking views of the snow-capped Himalayan peaks and the surrounding valley, making it a must-visit for adventure and nature lovers. The ropeway operates from Joshimath to Auli, covering a distance of approximately 4 km in about 20 minutes, offering a unique and convenient mode of transportation to the hill station.
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

export default HowToReach;
