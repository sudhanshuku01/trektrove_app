// Add the following import at the beginning of your file
import React, {useEffect, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';
import Header from '../components/Header';
import Hero from '../components/Hero';
import {
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import Search from '../components/Search';

const Home = () => {
  return (
    <SafeAreaView style={styles.home}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <View style={styles.quotes}>
          <Text style={styles.quotes_text}>Discover</Text>
          <Text style={styles.quotes_text}>world with TrekTripper </Text>
        </View>
        <Search />
        <Hero />
        {/* <Getstarted /> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  home: {
    backgroundColor: '#ffffff',
  },
  quotes: {
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  quotes_text: {
    fontSize: 25,
    fontFamily: 'Poppins-BlackItalic',
  },
});
