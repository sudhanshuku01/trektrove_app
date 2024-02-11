import React from 'react';
import { StyleSheet, Text, View, Linking, TouchableOpacity } from 'react-native';
import NitUk from '../NitUttarakhand/NitUk';

const About = () => {
  const openInstagram = () => {
    Linking.openURL('https://www.instagram.com/nit_uttarakhand/');
  };

  const openOfficialWebsite = () => {
    Linking.openURL('https://www.nituk.ac.in/');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to TrekTrove</Text>
      <Text style={styles.paragraph}>
        🏔️ TrekTripper is an immersive travel companion designed with love and passion by students
        from the National Institute of Technology (NIT) Uttarakhand. Our mission is to ignite your
        wanderlust and guide you through the enchanting landscapes of Uttarakhand, known as the "Land
        of the Gods."
      </Text>

      <Text style={styles.paragraph}>
        🌍 Explore the vibrant culture, serene lakes, ancient temples, and picturesque landscapes that
        define Uttarakhand's beauty. Developed as a project under NIT Uttarakhand, TrekTripper combines
        cutting-edge technology with a deep appreciation for the region's rich heritage.
      </Text>

      <NitUk/>

      <Text style={styles.signature}>
        ✨ Developed by  Sudhanshu & Saurabh ✨
      </Text>

      <Text style={styles.contactText}>
        Connect with us:
      </Text>

      <View style={styles.linksContainer}>
        <TouchableOpacity onPress={openInstagram}>
          <Text style={styles.link}>Instagram</Text>
        </TouchableOpacity>
        <Text style={styles.separator}> | </Text>
        <TouchableOpacity onPress={openOfficialWebsite}>
          <Text style={styles.link}>Official Website</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.signature}>Happy Exploring!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginTop:15
  },
  title: {
    fontSize: 23,
    marginBottom:10,
    color:'rgba(101, 64, 58, 1)',
    fontFamily:'Raleway-Bold',
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 20,
    lineHeight: 22,
    color:'rgba(24, 70, 90, 1)',
    fontFamily:'PlusJakartaSans-Regular',
    borderRadius:20
  },
  signature: {
    marginTop: 16, 
    fontSize:16,
    fontFamily:'PlusJakartaSans-Italic',
    color: 'rgba(24, 70, 90, 1)',
    textAlign: 'center',
  },
  contactText: {
    marginTop: 16,
    fontSize: 18,
    fontFamily:'Raleway-Bold',
    textAlign: 'center',
    color:'rgba(101, 64, 58, 1)'
  },

  linksContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 8,
  },
  link: {
    color: '#1c80a5',
    textDecorationLine: 'underline',
    fontFamily:'PlusJakartaSans-Medium'
  },
  separator: {
    marginHorizontal: 5,
  },
});

export default About;
