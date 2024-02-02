import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import locimg from '../images/map.png';

type data = {
  place: string;
  position: string;
};

const Data: data[] = [
  {
    place: 'Delhi',
    position: 'left',
  },
  {
    place: 'Haridwar',
    position: 'right',
  },
  {
    place: 'Srinagar',
    position: 'left',
  },
  {
    place: 'Rudraprayag',
    position: 'right',
  },
];

const Route = () => {
  return (
    <View style={styles.route}>
      <Text style={styles.route_overview}>Routes Overview</Text>
      <View style={styles.routeHead}>
            <Text>Put an image of route overview</Text>
      </View>
      {/* <View style={styles.routeDesc}>
        <View style={styles.travelGuide}>
          <Text style={styles.travelGuideHead}></Text>
          <Text style={styles.travelGuideBody}></Text>
        </View>
      </View> */}
    </View>
  );
};
const styles = StyleSheet.create({
  route: {},
  route_overview: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000000',
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  routeHead: {
    paddingHorizontal: 10,
  },
  routeDesc: {

  },
});

export default Route;
