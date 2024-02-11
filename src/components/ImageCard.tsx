import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  FlatList,
  TouchableHighlight,
  Text,
  View,
  ImageBackground,
  Image,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native';
import DropShadow from 'react-native-drop-shadow';

import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

import mapImg from '../images/Others/maps-flags_447031.png';

import {PLACES, PLACES_Datatype} from '../Assets/Place';

const TOP_DESTINATION: String[] = [
  'Kedarnath Temple',
  'Badrinath Temple',
  'Auli',
  'Gangotri',
  'Rishikesh',

];

const ImageCard = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [DATA, setDATA] = useState<PLACES_Datatype[] | null>(null);
  useEffect(() => {
    const filteredData = PLACES.filter(place =>
      TOP_DESTINATION.includes(place.name),
    );
    setDATA(filteredData);
  }, []);

  if (!DATA) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.imageCardContainer}>
      <View style={styles.seeallContainer}>
        <Text style={styles.topdestination}>Top Destinations</Text>
        <TouchableOpacity onPress={() => navigation.push('Explore')}>
          <Text style={styles.seeall}>see all</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        style={styles.flatlist}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={DATA}
        renderItem={({item, index}) => (
          <DropShadow
            style={{
              shadowColor: '#000123',
              shadowOffset: {
                width: 0,
                height: 0,
              },
              shadowOpacity: 1,
              shadowRadius: 3,
            }}>
            <TouchableOpacity 
              onPress={() =>
                navigation.navigate('Details', {Place: `${item.name}`})
              }
              key={index}
              style={styles.listItemContainer}>
              <ImageBackground
                source={item.image}
                resizeMode="cover"
                style={styles.backgroundImage}>
                <View style={styles.textContainer}>
                  <Text style={styles.placeName}>{item.name}</Text>
                  <View style={styles.locationContainer}>
                    <Image source={mapImg} style={styles.mapIcon} />
                    <Text style={styles.locationText}>{item.location}</Text>
                  </View>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </DropShadow>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageCardContainer: {
    marginTop: 15,
  },
  seeallContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
    paddingHorizontal: 15,
  },
  topdestination: {
    fontSize: 23,
    fontFamily: 'Raleway-Bold',
    color: 'rgba(101, 64, 58, 1)',
  },
  seeall: {
    color: '#1c80a5',
    fontSize: 18,
    fontFamily: 'PlusJakartaSans-Medium',
  },
  flatlist: {},
  listItemContainer: {
    margin: 15,
    borderRadius: 20,
    overflow: 'hidden',
  },
  backgroundImage: {
    width: 180,
    height: 260,
  },
  textContainer: {
    position: 'absolute',
    bottom: 30,
    left: 20,
    width: 160,
  },
  placeName: {
    color: '#dad5da',
    fontSize: 20,
    fontFamily: 'Nunito-Bold',
    marginBottom: 1,
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowOffset: {width: 1, height: 2},
    textShadowRadius: 2,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  mapIcon: {
    width: 20,
    height: 20,
    tintColor: '#162e49',
    marginRight: 5,
  },
  locationText: {
    color: '#dad5da',
    fontFamily: 'Nunito-Regular',
    fontSize: 15,
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowOffset: {width: 1, height: 2},
    textShadowRadius: 2,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ImageCard;
