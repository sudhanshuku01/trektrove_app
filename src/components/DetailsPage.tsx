import React, {useContext, useEffect, useState} from 'react';
import {DETAILS_dataType} from '../Assets/Place';
import {DETAILS_DATA} from '../Assets/Place';
import map_IMG from '../images/Others/maps-flags_447031.png';
import heart_IMG from '../images/Others/heartde.png';
import Comment from './Comment';
import {useAuth} from '../Context/Authcontext';
import MoreImage from './MoreImage';
import Guide from '../GuidePages/MainPage/Guide';
import {NetworkContext} from '../Context/NetworkProvider';

import {
  ScrollView,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ToastAndroid,
} from 'react-native';

import NearbyPlace from './NearbyPlace';
import axios from 'axios';
import Apploader from './Apploader';

interface DetailsPageProps {
  Place: string;
  fetching: boolean;
  setFetching: React.Dispatch<React.SetStateAction<boolean>>;
}

const DetailsPage: React.FC<DetailsPageProps> = ({
  fetching,
  setFetching,
  Place,
}) => {
  const [auth, setAuth] = useAuth();
  const {isConnected} = useContext(NetworkContext);

  const [likedPlaces, setLikedPlaces] = useState<string[]>([]);

  const [DATA, setDATA] = useState<DETAILS_dataType | null>(null);

  const [imgindex, setImgindex] = useState<number>(0);

  useEffect(() => {
    const temple = DETAILS_DATA.find(temple => temple.name === Place);
    if (temple) {
      setDATA(temple);
    }
  }, [Place]);

  useEffect(() => {
    if (auth.user !== null && isConnected) {
      getAllLikedPlaces();
    }
  }, [auth, setAuth, isConnected]);

  const getAllLikedPlaces = async () => {
    try {
      setFetching(true);
      const response = await axios.get(
        'https://backend-t-u090.onrender.com/destination/get-liked-places',
      );
      if (response && response.data && response.data.success) {
        setLikedPlaces(response.data.LikedPlaces);
      } else {
        showToast(response.data.message);
      }
    } catch (error) {
      console.error('Error fetching liked places:', error);
    } finally {
      setFetching(false);
    }
  };

  const handleLike = async (name: string) => {
    if (!isConnected) {
      showToast('Oops! 🙋‍♂️ No Internet Connection');
      return;
    }
    if (auth.user === null) {
      showToast('Login To Like Destinations');
      return;
    }
    try {
      setFetching(true);
      const response = await axios.post(
        'https://backend-t-u090.onrender.com/destination/like-place',
        {
          destination: name,
        },
      );
      if (response && response.data && response.data.success) {
        showToast(response.data.message);
        getAllLikedPlaces();
      } else {
        showToast(response.data.message);
      }
    } catch (error) {
      console.log(error);
      showToast('something went wrong try after some times');
    } finally {
      setFetching(false);
    }
  };

  const handleUnlike = async (name: string) => {
    if (!isConnected) {
      showToast('Oops! 🙋‍♂️ No Internet Connection');
      return;
    }
    if (auth.user === null) {
      showToast('Login To Like Destinations');
      return;
    }
    try {
      setFetching(true);
      const response = await axios.post(
        'https://backend-t-u090.onrender.com/destination/unlike-place',
        {
          destination: name,
        },
      );
      if (response && response.data && response.data.success) {
        showToast(response.data.message);
        getAllLikedPlaces();
      } else {
        showToast(response.data.message);
      }
    } catch (error) {
      console.log(error);
      showToast('something went wrong try after some times');
    } finally {
      setFetching(false);
    }
  };

  const showToast = (msg: string) => {
    ToastAndroid.showWithGravityAndOffset(
      msg,
      ToastAndroid.SHORT,
      ToastAndroid.TOP,
      0,
      30,
    );
  };

  if (!DATA) {
    return <Apploader />;
  }

  return (
    <ScrollView
      scrollEnabled={!fetching}
      showsVerticalScrollIndicator={false}
      style={styles.detailspage}>
       <ImageBackground
        resizeMode="cover"
        source={DATA.Images[imgindex]}
        style={styles.backgroundImage}>
        <TouchableHighlight
          onPress={() =>
            likedPlaces.includes(DATA.name)
              ? handleUnlike(DATA.name)
              : handleLike(DATA.name)
          }
          style={styles.likecontainer}>
          <Image
            style={[
              likedPlaces.includes(DATA.name)
                ? {tintColor: 'red'}
                : {tintColor: 'white'},
              styles.likebutton,
            ]}
            source={heart_IMG}
          />
        </TouchableHighlight>
        <View style={styles.textContainer}>
          <Text style={styles.placeName}>{DATA.name}</Text>
          <View style={styles.locationContainer}>
            <Image source={map_IMG} style={styles.mapIcon} />
            <Text style={styles.locationText}>{DATA.location}</Text>
          </View>
        </View>
        <MoreImage
          imgindex={imgindex}
          setImgindex={setImgindex}
          Images={DATA.Images}
        />
      </ImageBackground>

      <Guide Place={Place} />

      <NearbyPlace NearbyPlaces={DATA.Nearbyplace} />

      <Comment Place={Place} setFetching={setFetching} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  detailspage: {
    backgroundColor: '#ffffff',
  },
  detailspage_image: {},
  backgroundImage: {
    position: 'relative',
    width: '100%',
    height: 400,
  },
  textContainer: {
    position: 'absolute',
    bottom: 40,
    left: 40,
  },
  placeName: {
    color: '#ffffff',
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
  },
  mapIcon: {
    width: 15,
    height: 15,
    tintColor: '#ffffff',
    marginRight: 5,
  },
  locationText: {
    color: '#ffffff',
    fontFamily: 'Nunito-Regular',
    fontSize: 16,
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowOffset: {width: 1, height: 2},
    textShadowRadius: 2,
    marginTop: 8,
  },
  detailspage_desc: {
    paddingHorizontal: 20,
  },
  description: {
    fontWeight: '900',
    fontSize: 20,
    color: '#000000',
  },
  description_text: {
    fontWeight: '100',
    fontSize: 16,
    color: '#000000',
    marginTop: 8,
  },
  likecontainer: {
    position: 'absolute',
    top: 50,
    left: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    paddingHorizontal: 8,
    paddingTop: 10,
    paddingBottom: 8,
    borderRadius: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  likebutton: {
    height: 37,
    width: 37,
  },
});

export default DetailsPage;
