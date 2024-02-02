import React, {Dispatch, SetStateAction, useState} from 'react';

import {
  Image,
  TouchableHighlight,
  ImageProps,
  StyleSheet,
  Text,
  View,
} from 'react-native';
type MoreImagesProps={
  Images: ImageProps[];
  imgindex:number;
  setImgindex:Dispatch<SetStateAction<number>>;
};
const MoreImage: React.FC<MoreImagesProps> = ({Images,imgindex,setImgindex}) => {
  return (
    <View style={styles.MoreImage}>
      {Images.map((img, index) => (
        <TouchableHighlight
         onPress={()=>setImgindex(index)}
         key={index}>
          <Image
            style={[
              index === imgindex
                ? {width: 70, height: 70}
                : {width: 60, height: 60},
              styles.image,
            ]}
            source={img}
          />
        </TouchableHighlight>
      ))}
    </View>
  );
};

export default MoreImage;

const styles = StyleSheet.create({
  MoreImage: {
    display:'flex',
    alignItems:'center',
    position: 'absolute',
    padding: 5,
    right: 20,
    bottom: -80,
    zIndex: 1,
  },
  image: {
    objectFit: 'cover',
    marginVertical: 10,
    borderColor: '#ffffff',
    borderWidth: 2,
    borderRadius: 18,
  },
});
