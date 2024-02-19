import {ScrollView, StyleSheet} from 'react-native';
import React, {Suspense, lazy} from 'react';
import Header from '../components/Header';
import Apploader from '../components/Apploader';

const LazyExplorePage = lazy(() => import('../components/Explore/ExplorePage'));
const Explore = () => {
  return (
    <Suspense fallback={<Apploader />}>
      <ScrollView style={styles.Explore} showsVerticalScrollIndicator={false}>
        <Header />
        <LazyExplorePage />
      </ScrollView>
    </Suspense>
  );
};

const styles = StyleSheet.create({
  Explore: {
    backgroundColor: '#eff1ee ',
  },
});

export default Explore;
