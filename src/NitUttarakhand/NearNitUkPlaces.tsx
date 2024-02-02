import React from 'react';

import {
  ScrollView,
  ImageBackground,
  ImageProps,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import { NitNearbyLocation } from '../Assets/Place';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

const NearNitUkPlaces = () => {
  const navigation=useNavigation<NativeStackNavigationProp<RootStackParamList>>(); 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Near By Places To Nit Uttarakhand</Text>
      <ScrollView horizontal contentContainerStyle={styles.imagecontainer}>
        {NitNearbyLocation.map((item, index) => ( 
          <TouchableHighlight
            onPress={()=>navigation.push('Details',{Place:item.name})}
            style={styles.imagecontainertouchable}
            key={index}>
            <ImageBackground style={styles.backgroundimage} source={item.image}>
              <View style={styles.textcontainer}>
                <Text style={styles.text}>{item.name}</Text>
              </View>
            </ImageBackground>
          </TouchableHighlight>
        ))}
      </ScrollView> 
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  title: {
    fontFamily: 'Raleway-Bold',
    fontSize: 22,
    marginVertical: 10,
  },
  imagecontainertouchable: {
    overflow: 'hidden',
    borderRadius: 20,
    marginRight: 15,
  },
  imagecontainer: {
    alignItems: 'center',
  },
  backgroundimage: {
    height: 180,
    width: 150,
    justifyContent: 'flex-end',
    padding: 20,
    objectFit: 'cover',
  },
  textcontainer: {},
  text: {
    color: '#ffffff',
    fontSize: 20,
    fontFamily: 'Nunito-Bold',
    marginBottom: 1,
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowOffset: {width: 1, height: 2},
    textShadowRadius: 2,
  },
});

export default NearNitUkPlaces;
