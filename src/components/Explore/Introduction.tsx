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
    color:'#4d6160',
    marginTop:20,
    marginBottom:10,
    fontSize:26,
    fontFamily:'Poppins-ExtraBold',
    textAlign:'center'
  },
  title:{
    color:'#4d6160',
    marginBottom:10,
    fontSize:23,
    fontFamily:'Raleway-Bold',
    textAlign:'left',
  },
  description:{
    fontSize: 16,
    lineHeight: 22,
    color:'#493736',
    fontFamily:'PlusJakartaSans-Regular',
    borderRadius:20
  }
});
