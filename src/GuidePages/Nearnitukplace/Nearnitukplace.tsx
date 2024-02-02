import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NitNearbyLocation, NitNearbyLocationType} from '../../Assets/Place';
interface NearnitukplaceProps {
  Place: string;
}
const Nearnitukplace: React.FC<NearnitukplaceProps> = ({Place}) => {

  const [data, setData] = useState<NitNearbyLocationType | null>(null);

  useEffect(() => {
    const filteredData = NitNearbyLocation.find(item => item.name === Place);
    if (filteredData) {
      setData(filteredData);
    }
  }, []);

  if (data === null) {
    return null;
  }

  return (
    <View style={styles.container} >
      <View style={styles.textcontainer}>
       <Text style={styles.title}>Description</Text>
       <Text style={styles.description}>{data.description}</Text>
      </View>
      <View style={styles.textcontainer}>
       <Text style={styles.title}>How To Reach</Text>
       <Text style={styles.description}> {data.howToReach}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
    container:{

    },
    textcontainer:{
      marginTop:30
    },
    title:{
      fontSize:22,
      fontFamily:'Raleway-Bold',
    },
    description:{
        fontSize:16,
      fontFamily:'PlusJakartaSans-Regular',
      lineHeight:22,
    },

});

export default Nearnitukplace;

