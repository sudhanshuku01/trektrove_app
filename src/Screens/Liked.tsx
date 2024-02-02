import React, { useContext, useEffect, useState } from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, ToastAndroid, TouchableHighlight, View } from 'react-native';
import axios from 'axios'; 
import { useAuth } from '../Context/Authcontext';
import heart_IMG from '../images/Others/heart_833472.png';
import map_IMG from '../images/Others/maps-flags_447031.png';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { PLACES } from '../Assets/Place';
import { NetworkContext } from '../Context/NetworkProvider';
import Header from '../components/Header';
import Apploader from '../components/Apploader';
const Liked = () => {
  const [fetching,setFetching]=useState(false);
  const [auth,setAuth] = useAuth();
  const {isConnected}=useContext(NetworkContext)

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [likedPlaces, setLikedPlaces] = useState<string[]>([]);

  useEffect(() => {
   if(auth.user !== null && isConnected){
    fetchData();
   }
  }, [auth,setAuth,isConnected]);

  const fetchData = async () => {
    if (auth.user !== null) {
      try {
        setFetching(true);
        const response = await axios.get('https://backend-t-u090.onrender.com/destination/get-liked-places');

        if (response.data.success) {
          setLikedPlaces(response.data.LikedPlaces);
        }

      } catch (error) {
        console.error('Error fetching liked places:', error);
      }finally{
        setFetching(false);
      }
    }
    else{
      showToast('Login to see your favourite place')
    }
  };

  const handleUnlike = async (name: string) => {
    try { 
      setFetching(true);
      const response = await axios.post('https://backend-t-u090.onrender.com/destination/unlike-place', { destination: name });
      if (response && response.data.success) { 
        showToast(response.data.message);
        fetchData(); 
      }
    } catch (error) {
      console.error(error);
      showToast('Something went wrong. Please try again later.');
    }finally{
      setFetching(false);
    }
  };

  const showToast = (msg: string) => {
    ToastAndroid.showWithGravityAndOffset(
      msg,
      ToastAndroid.SHORT,
      ToastAndroid.TOP,
      0,
      30
    );
  };
 
  return (
    <>
     <Header />
     {
      !isConnected ? (
        <View style={styles.nointcontainer}>
           <Text style={styles.nointtext}>
            Oops! 🙋‍♂️ No Internet Connection
           </Text>
        </View>
      ):(
        auth.user === null ? (
          <View style={styles.Nologincontainer}>
            <Text style={styles.Nologinmessage}>Login to get the liked Places</Text>
          </View>
        ) : (
          <ScrollView scrollEnabled={!fetching}  showsVerticalScrollIndicator={false} style={styles.likedContainer}>
            <Text style={styles.headText}>Your Favourite Destinations</Text>
            <View style={styles.mainContainer}>
              {PLACES.map((item, index) => (
              likedPlaces.includes(item.name)  &&  <TouchableHighlight
                  onPress={() => navigation.navigate('Details', { Place: item.name })}
                  key={index}
                  style={styles.listItemContainer}>
                  <ImageBackground
                    source={item.image}
                    resizeMode="cover"
                    style={styles.backgroundImage}>
                    <View style={styles.contentContainer}>
                      <TouchableHighlight
                        onPress={() => handleUnlike(item.name)}>
                        <Image source={heart_IMG} style={styles.likedButton} />
                      </TouchableHighlight>
                      <View style={styles.textContainer}>
                        <Text style={styles.placeName}>{item.name}</Text>
                        <View style={styles.locationContainer}>
                          <Image source={map_IMG} style={styles.mapIcon} />
                          <Text style={styles.locationText}>{item.location}</Text>
                        </View>
                      </View>
                    </View>
                  </ImageBackground>
                </TouchableHighlight>
              ))}
            </View>
          </ScrollView>
        )
      )
     }
      {fetching && <Apploader/>}
    </>
  );
};

export default Liked;

const styles = StyleSheet.create({
  nointcontainer:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      padding:15,
  },
  nointtext:{
    fontSize:20,
    fontFamily:'PlusJakartaSans-Bold'
  },
  Nologincontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Nologinmessage: {
    fontSize:20,
    fontFamily:'PlusJakartaSans-Bold'
  },
  likedContainer: {
    padding: 20,
  },
  headText: {
    color:'#4d6160',
    marginTop:20,
    marginBottom:10,
    fontSize:23,
    fontFamily:'Poppins-ExtraBold',
    textAlign:'left'
  },
  mainContainer: {
    marginBottom: 80,
  },
  listItemContainer: {
    marginVertical: 10,
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 3,
  },
  backgroundImage: {
    padding: 15,
    height: 200,
    borderRadius: 20,
    overflow: 'hidden',
  },
  contentContainer: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: '100%',
    padding: 10,
  },
  likedButton: {
    width: 35,
    height: 35,
  },
  textContainer: {
    borderRadius: 10,
    marginTop: 10,
  },
  placeName: {
    color: '#ffffff',
    fontSize: 20,
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
    width: 15,
    height: 15,
    marginRight: 5,
    tintColor: '#ffffff',
  },
  locationText: {
    color: '#ffffff',
    fontFamily:'Nunito-Regular',
    fontSize: 17,
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 2,
  },
});
