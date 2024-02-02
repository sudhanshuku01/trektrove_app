import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import ImageCard from './ImageCard'
import About from './About'


const Hero = () => { 
  return (
    <View>
     <ImageCard />
     <About /> 
    </View>
  )
}

const styles = StyleSheet.create({

})

export default Hero
