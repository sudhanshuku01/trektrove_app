import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Overview = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        A revered temple, it is dedicated to Dhari Devi (a form of Goddess Kali), who is considered to be the guardian deity of Uttarakhand and is worshipped as the protector of the Char Dhams. According to mythology, a severe flood once washed away a temple and the idol of Dhari Devi was trapped against a rock near the Dharo village. The local residents claim to have heard wails and a divine voice directed them to install the idol there.
      </Text>

      <Text style={styles.paragraph}>
        Local lore also has it that the idol of the deity changes appearance throughout the day – a girl child in the morning, a young woman in the afternoon, and an old woman in the evening.
      </Text>

      <Text style={styles.paragraph}>
        It is said that Goddess Dhari Devi has two parts. Her body’s upper half appeared at Dhari Devi temple while her lower half appeared at Kalimath temple, where she is worshipped as Maa Kali. According to the legend, Dhari Devi’s idol can’t be kept under any roof. So, that portion is always kept open towards the sky.
      </Text>

      <Text style={styles.paragraph}>
        The temple is located between Srinagar and Rudraprayag on the banks of River Alaknanda and can be reached by a one-km cement pathway.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  paragraph: {
    fontSize: 16,
    marginVertical: 5,
    lineHeight: 22,
    fontFamily: 'PlusJakartaSans-Regular',
  },
});

export default Overview;
