import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import map_IMG from '../images/Others/maps-flags_447031.png';
import {PLACES, PLACES_Datatype} from '../Assets/Place';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
interface NearbyPlaceProps {
  NearbyPlaces: string[];
}
const NearbyPlace: React.FC<NearbyPlaceProps> = ({NearbyPlaces}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [DATA, setDATA] = useState<PLACES_Datatype[] | null>(null);
  useEffect(() => {
    const filteredPlaces = PLACES.filter(place =>
      NearbyPlaces.includes(place.name),
    );
    setDATA(filteredPlaces);
  }, []);

  if (!DATA) {
    return null;
  }

  return (
    <View style={styles.Nearby}>
      <View style={styles.titlecontainer}>
        <Text style={styles.title}>Nearby Places</Text>
      </View>
      <ScrollView 
       horizontal={true}
       showsHorizontalScrollIndicator={false}
       style={styles.NearbyPlaces}>
        {DATA.map((data, index) => (
          <TouchableHighlight
            onPress={() =>navigation.push("Details",{Place:`${data.name}`})}
            key={index}
            style={styles.cardContainer}>
            <ImageBackground source={data.image} style={styles.cardImage}>
              <View style={styles.cardContent}>
                <Text style={styles.placeName}>{data.name}</Text>
                <View style={styles.locationContainer}>
                  <Image source={map_IMG} style={styles.mapIcon} />
                  <Text style={styles.locationText}>{data.location}</Text>
                </View>
              </View>
            </ImageBackground>
          </TouchableHighlight>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  Nearby: {
    padding: 15,
  },
  titlecontainer: {
  },
  title: {
    fontSize:23,
    fontFamily:'Raleway-Bold', 
    color:'#4d6160'
  },
  NearbyPlaces: {
   marginVertical:10
  },
  cardContainer: {
    borderRadius: 20,
    overflow: 'hidden',
    marginHorizontal:10
  },
  cardImage: {
    width: 120,
    height: 150,
    justifyContent: 'flex-end',
  },
  cardContent: {
    padding: 10,
  },
  placeName: {
    color: '#ffffff',
    fontSize: 15,
    fontFamily:'Nunito-Bold',
    marginBottom:1,
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 2,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mapIcon: {
    width: 12,
    height: 12,
    tintColor: '#ffffff',
    marginRight: 5,
  },
  locationText: {
    color: '#ffffff',
    fontFamily:'Nunito-Regular',
    fontSize: 14,
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 2,
  },
});

export default NearbyPlace;
