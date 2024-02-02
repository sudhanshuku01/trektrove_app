import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HowToReach = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>How to Reach</Text>

      <Text style={styles.heading}>Location and How to Reach Haridwar</Text>

      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Location:</Text> Haridwar District, Garhwal Region Uttarakhand.
      </Text>

      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Nearest Railway Station:</Text> Haridwar Railway Station, Uttarakhand
      </Text>

      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Nearest Airport to Haridwar:</Text> 36 km Jolly Grant Airport, Dehradun, Uttarakhand.
      </Text>

      <Text style={styles.paragraph}>
        Haridwar city is well connected by motorable roads and several other major cities. In Haridwar, you can find a wide range of facilities to cater to the needs of visitors. These include comfortable accommodation options, such as hotels, guesthouses, and ashrams. The city also offers various restaurants, markets, and transportation services to ensure a convenient and enjoyable stay for tourists.
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
