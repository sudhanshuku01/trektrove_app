import React, { useState } from 'react';

import Overview from './Overview';

import {
  ScrollView,
  StyleSheet,
} from 'react-native';
import Itinerary from './Itinerary';
import HowToReach from './HowToReach';
import IncExc from './IncExc';
import BestTime from './BestTime';
import GuideHeadList from '../MainPage/GuideHeadList';

const Auli = () => {
  const [active,setActive]=useState('Overview');
  return (
    <ScrollView showsVerticalScrollIndicator={false}
    style={styles.Kedarnath}
    >
      <GuideHeadList active={active} setActive={setActive}/>
      {active === 'Overview' && <Overview />}
      { active === 'Itinerary' && <Itinerary/>}
      {active ==='How To Reach' && <HowToReach/>}
      {active === 'Inclusions & Exclusions' && <IncExc />}
      {active === 'Best Time To Visit' && <BestTime />}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  Kedarnath: {
    marginTop:60
},
});

export default Auli;
