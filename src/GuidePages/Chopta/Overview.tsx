// Create a new Overview.tsx file and add the following content

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Overview = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Chopta - The Mini Switzerland</Text>

      <Text style={styles.paragraph}>
        Chopta is a beautiful hill station and a superb trekking destination in
        Uttarakhand. Surrounded by meadows and evergreen forest with the
        spectacular views of mighty Himalayan ranges, Chopta not only attracts
        Indian but International tourists and trekkers all round the year.
      </Text>

      <Text style={styles.paragraph}>
        Chopta is also known as “Mini Switzerland”, and is getting popular year
        after year. Chopta Hill Station is located at an altitude of 2700 mts,
        in the Rudraprayag District of Uttarakhand State. Chopta is surrounded
        by dense forest, and offers majestic view of Snow Clad Himalayan Ranges
        and lush green meadows. It is also the starting point of the trek to
        famous Tungnath Mandir (Panch Kedar Temple) and Chandrashila Summit. The
        Chopta region is rich in varied flora and fauna, with plenty of
        Rhododendron and Deodar trees all around.
      </Text>

      <Text style={styles.heading}>Chopta Highlights</Text>
      <Text style={styles.paragraph}>
        - Amazing natural beauty with Himalayan Views {'\n'}
        - Untouched and Protected Biodiversity {'\n'}
        - Lush Green Meadows all around {'\n'}
        - Famous Chandrashila Summit Trek (4000 mts) {'\n'}
        - Highest Shiva Temple in the World - Tungnath {'\n'}
        - Haven for Bird Watching, Trekking {'\n'}
        - Best Suited for Yoga and Meditation {'\n'}
        - One of the Popular Snow Trek in India {'\n'}
        - Many Sunrise and Sunset view points
      </Text>

      <Text style={styles.heading}>Chopta - Center of Panch Kedars</Text>
      <Text style={styles.paragraph}>
        Chopta is the epicenter of all Panch Kedars (famous Shiva Temples), two
        on left sides (Kedarnath and Madmaheshwar) and 2 on the right side
        (Rudranath and Kalpeshwar) and one at the top of Chopta (Tungnath),
        which is the highest Shiva temple in the world. Thus the positive
        energy at this place is unmatched.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // Add any styling for the container if needed
    margin: 15,
  },
  heading: {
    fontSize: 22,
    marginTop: 15,
    marginBottom: 10,
    fontFamily: 'Raleway-Bold',
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 15,
    lineHeight: 22,
    fontFamily: 'PlusJakartaSans-Regular',
  },
});

export default Overview;
