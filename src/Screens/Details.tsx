import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'

type DetailsProps=NativeStackScreenProps<RootStackParamList,"Details">
  
import DetailsPage from '../components/DetailsPage'
import Apploader from '../components/Apploader'

const Details = ({route}:DetailsProps) => {
  const [fetching,setFetching]=useState(false);
  const {Place}=route.params;
  return (   
    <View>
      <DetailsPage fetching={fetching} setFetching={setFetching} Place={Place} />
      {fetching && <Apploader/>}
    </View> 
  )
}

export default Details

const styles = StyleSheet.create({})