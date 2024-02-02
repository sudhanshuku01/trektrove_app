import {
  Image,
  ImageProps,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import nituk_IMG1 from '../images/NitUk/nituk1.png';
import nituk_IMG2 from '../images/NitUk/nituk3.jpg';
import nituk_IMG3 from '../images/NitUk/nituk4.jpeg';
import nituk_IMG4 from '../images/NitUk/nituk4.jpeg';
import NearNitUkPlaces from './NearNitUkPlaces';
import Description from './Description';

const ImagesObj: ImageProps[] = [
  nituk_IMG2,
  nituk_IMG1,
  nituk_IMG3,
  nituk_IMG4,
];

const NitukDetailsPage = () => {
  const [activeindex, setActiveIndex] = useState<number>(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//         setActiveIndex((prevIndex) => (prevIndex + 1) % 4);
//       }, 5000);
  
//     return () => clearInterval(intervalId);
//   }, []); 


  return (
    <ScrollView style={styles.nitukdetail}>
      <View style={styles.imagecontainer}>
        <Image style={styles.imageshown} source={ImagesObj[activeindex]} />
        <ScrollView horizontal contentContainerStyle={styles.imagelist}>
          {ImagesObj.map((item, index) => (
            <TouchableHighlight
              key={index}
              onPress={() => setActiveIndex(index)}>
              <Image
                style={[
                  activeindex === index
                    ? {width: 85, height: 85}
                    : {width: 75, height: 75},
                  styles.imagelistimage,
                ]}
                source={item}
              />
            </TouchableHighlight>
          ))}
        </ScrollView>
      </View>
      <Description/>
      <NearNitUkPlaces/>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  nitukdetail: {
    backgroundColor: '#ffffff',
  },
  imagecontainer: {
   
  },
  imageshown: {
    width: '100%',
    height: 350,
    objectFit: 'cover',
  },
  imagelist: {
    padding: 15,
    alignItems:'center'
  },
  imagelistimage: {
    marginRight: 15,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#355c7d',
  },
});

export default NitukDetailsPage;
