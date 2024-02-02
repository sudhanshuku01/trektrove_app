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
      <Text style={styles.title}>Welcome to TrekTripper</Text>
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
    color:'#4d6160',
    fontFamily:'Raleway-Bold',
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 12,
    lineHeight: 22,
    color:'#493736',
    fontFamily:'PlusJakartaSans-Regular',
    backgroundColor:'rgba(126,127,161,0.2)',
    padding:15,
    borderRadius:20
  },
  signature: {
    marginTop: 16, 
    fontSize:16,
    fontFamily:'PlusJakartaSans-Italic',
    color: '#888',
    textAlign: 'center',
  },
  contactText: {
    marginTop: 16,
    fontSize: 18,
    fontFamily:'Raleway-Bold',
    textAlign: 'center',
  },

  linksContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 8,
  },
  link: {
    color: '#3498db',
    textDecorationLine: 'underline',
    fontFamily:'PlusJakartaSans-Medium'
  },
  separator: {
    marginHorizontal: 5,
  },
});

export default About;
