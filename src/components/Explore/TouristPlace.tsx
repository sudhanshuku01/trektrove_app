import {
  ImageBackground,
  TouchableHighlight,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import {PLACES, PLACES_Datatype} from '../../Assets/Place';
import {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import DropShadow from 'react-native-drop-shadow';

interface TouristPlaceProps {
  name: string;
  description: string;
}

const TouristPlace: React.FC<TouristPlaceProps> = ({name, description}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [DATA, setDATA] = useState<PLACES_Datatype | null>(null);
  useEffect(() => {
    const filteredPlaces = PLACES.filter(place => place.name === name);
    setDATA(filteredPlaces[0]);
  });

  if (!DATA) {
    return (
      <View style={styles.loadingcontainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    ); 
  }

  return (
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

      <TouchableHighlight
        style={styles.Container}
        onPress={() => navigation.push('Details', {Place: name})}>
        <ImageBackground style={styles.BackgroundImage} source={DATA.image}>
          <View style={styles.placeContainer}>
            <Text style={styles.placeName}>{name}</Text>
            <Text style={styles.placeDescription}>{description}</Text>
          </View>
        </ImageBackground>
      </TouchableHighlight>
      
    </DropShadow>
  );
};
const styles = StyleSheet.create({
  loadingcontainer: {
    display: 'flex',
    justifyContent: 'center',
    width: 190,
    height: 270,
  },
  Container: {
    margin: 15,
    overflow: 'hidden',
    borderRadius: 20,
  },
  BackgroundImage: {
    width: 190,
    height: 270,
    justifyContent: 'flex-end',
    padding: 15,
  },
  placeContainer: {

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
  placeDescription: {
    color: '#dad5da',
    fontFamily: 'Nunito-Regular',
    fontSize: 15,
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowOffset: {width: 1, height: 2},
    textShadowRadius: 2,
    marginTop: 8,
  },
});
export default TouristPlace;
