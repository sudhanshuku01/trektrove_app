import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Introduction = () => {
  return (
    <View style={styles.ExplorePageIntroduction}>
      <Text style={styles.head}>Explore Uttarakhand</Text>
      <Text style={styles.title}>Explore Destinations</Text>
      <Text style={styles.description}>Welcome to our Explore page, your gateway to a world of excitement and adventure! Immerse yourself in a curated collection of diverse categories, each offering a unique flavor of travel. From scenic landscapes to cultural marvels, we've handpicked destinations to cater to every wanderlust. Scroll through and discover the beauty of each category with stunning images that will transport you to different corners of the globe. Let the exploration begin!</Text>
    </View>
  );
};

export default Introduction;

const styles = StyleSheet.create({
  ExplorePageIntroduction:{
    padding:15,
  },
  head:{
    color:'#3F503A',
    marginVertical:10,
    fontSize:26,
    fontFamily:'Poppins-ExtraBold',
  },
  title:{
    color:'rgba(101, 64, 58, 1)',
    fontSize:24,
    fontFamily:'Raleway-Bold',
    textAlign:'left',
    marginVertical:10,
  },
  description:{
    fontSize: 16,
    lineHeight: 22,
    color:'rgba(24, 70, 90, 1)',
    fontFamily:'PlusJakartaSans-Regular',
    borderRadius:20,
  }
});
