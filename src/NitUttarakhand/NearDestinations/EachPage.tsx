import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
interface EachPageProps{
    Place:string;
}
import { NitNearbyLocation,NitNearbyLocationType } from '../../Assets/Place';
const EachPage:React.FC<EachPageProps> = (Place) => {
    const [data,setData]=useState<NitNearbyLocationType | null>(null);
    
  return (
    <View>
      <Text>EachPage</Text>
    </View>
  )
}

export default EachPage

const styles = StyleSheet.create({})