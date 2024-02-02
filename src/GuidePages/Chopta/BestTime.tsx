// Create a new BestTime.tsx file and add the following content

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BestTime = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Best Time to Visit Chopta</Text>

      <Text style={styles.paragraph}>
        Chopta is an exceptional destination that can be visited year-round.
        The best time to visit depends on your preferences and activities.
      </Text>

      <Text style={styles.paragraph}>
        If you wish to visit the sacred Tungnath Temple, the ideal time is from
        April to November when the temple is open. The best overall time to
        travel to Chopta is during Summers (April – June) and Winters (Oct –
        Dec). For travelers interested in snowfall or snow trekking, January to
        March are the best months.
      </Text>

      <Text style={styles.subHeading}>Chopta Weather</Text>

      <Text style={styles.paragraph}>
        Chopta experiences a cool and hospitable climate throughout the year,
        except for a few winter months when the region is covered in snow.
      </Text>

      <Text style={styles.subHeading}>Chopta Today’s Weather</Text>
      {/* Include a weather widget or forecast here if available */}

      <Text style={styles.subHeading}>Chopta in Summers</Text>
      <Text style={styles.paragraph}>
        During summers, the weather in Chopta remains salubrious and pleasing.
        The Himalayas are distinctly visible, and the cool breeze adds charm to
        the vacation. Carry light woolens as the temperature ranges between
        10°C and 24°C.
      </Text>

      <Text style={styles.subHeading}>Chopta in Monsoons</Text>
      <Text style={styles.paragraph}>
        In monsoons, Chopta becomes lush green, welcoming tourists to get lost
        in the wilderness of nature. While roads might face temporary
        blockages due to landslides, the scenic beauty during monsoons is worth
        the risk. Monsoon months are July and August, with mild rainfall.
        Carry adequate rain gear during this time.
      </Text>

      <Text style={styles.subHeading}>Chopta in Winters</Text>
      <Text style={styles.paragraph}>
        Serenity and solitude are at their best during winters in Chopta. The
        region experiences snowfall, and accommodation options are limited.
        Chopta looks like a mini Switzerland during winters. Winters are
        freezing, with temperatures ranging from -15°C to 5°C. Heavy woolens
        are a must during this season.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 8,
  },
  subHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
});

export default BestTime;
