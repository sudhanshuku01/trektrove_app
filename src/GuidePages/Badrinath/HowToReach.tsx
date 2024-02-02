import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HowToReach = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>How to Reach</Text>

      <Text style={styles.heading}>Location and How to Reach Badrinath Dham</Text>

      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Location:</Text> Chamli District, Garhwal Region – Uttarakhand
      </Text>

      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Nearest Railway Station to Badrinath Temple:</Text> 291 km, Rishikesh Railway Station
      </Text>

      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Nearest Airport to Badrinath Temple:</Text> 305 km, Jolly Grant Airport, Dehradun
      </Text>

      <Text style={styles.paragraph}>
        Badrinath Town, where the temple is situated, is well connected with motorable roads and major towns and cities. Joshimath town is around 45 km from Badrinath, popularly known as the gateway of Badridham. Badrinath Dham faces a huge crowd during the Season time, especially during closing and opening weeks. So it's better to plan your trip, including taxi services, route guide, hotels or homestays to stay, best restaurants, places to explore, and most importantly, to be updated with Uttarakhand’s Char Dham Travel Guidance provided by the Govt. of Uttarakhand.
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
