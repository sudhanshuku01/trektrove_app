import {
    ImageBackground,
    Image,
    TouchableHighlight,
    StyleSheet,
    Text,
    View,
  } from 'react-native';
  import React from 'react';
  
  import { PLACES, PLACES_Datatype } from '../../Assets/Place';
  import map_IMG from '../../images/maps-flags_447031.png'; // Replace with your actual location icon
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
  
  const Destinations = () => { 
    const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    
    return (
      <View style={styles.Destinations}>
        <Text style={styles.DestinationsTitle}>Destinations</Text>
        <View style={styles.ImageCardContainer}>
          {PLACES.map((item, index) => (
            <TouchableHighlight
              key={index}
              style={styles.cardContainer}
              onPress={() =>navigation.push('Details',{Places:`${item.name}`})}>
              <ImageBackground
               source={item.image} 
               style={styles.cardImage}
               resizeMode={'cover'}
               >
                <View style={styles.cardContent}>
                  <Text style={styles.placeName}>{item.name}</Text>
                  <View style={styles.locationContainer}>
                    <Image source={map_IMG} style={styles.mapIcon} />
                    <Text style={styles.locationText}>{item.location}</Text>
                  </View>
                </View>
              </ImageBackground>
            </TouchableHighlight>
          ))}
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    Destinations: {
      padding:15
    },
    DestinationsTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 15,
      color:'#000000',
    },
    ImageCardContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent:'space-evenly',
      flexWrap: 'wrap',
      gap: 10,
    },
    cardContainer: {
      width:'100%',
      borderRadius: 20,
      overflow: 'hidden',
      marginBottom: 20,
    },
    cardImage: {
      width: '100%',
      height: 180,
      justifyContent: 'flex-end',
      borderRadius: 20,
      overflow: 'hidden',
    },
    cardContent: {
      padding: 15,
    },
    placeName: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#ffffff',
      marginBottom: 8,
    },
    locationContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    mapIcon: {
      width: 15,
      height: 15,
      tintColor: '#ffffff',
      marginRight: 5,
    },
    locationText: {
      fontSize: 14,
      color: '#ffffff',
    },
  });
  
  export default Destinations;
  