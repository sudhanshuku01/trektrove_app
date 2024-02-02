import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React, {Suspense, lazy} from 'react';

import Introduction from './Introduction';

import TouristPlaces from './TouristPlaces';
import Festival from '../../Festivals/Festival';
import Food from '../../Food/Food';

const ExplorePage = () => {
  return (
    <>
      <Introduction />
      <Suspense fallback={<ActivityIndicator />}>
        <TouristPlaces />
        <Festival />
        <Food />
      </Suspense>
    </>
  );
};

export default ExplorePage;

const styles = StyleSheet.create({});
