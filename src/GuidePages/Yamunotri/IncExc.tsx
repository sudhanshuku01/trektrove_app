import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const IncExc = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inclusions & Exclusions</Text>

      <Text style={styles.subtitle}>Inclusion</Text>
      <Text style={styles.paragraph}>
        During the trek, there will be places to stay in Camps or Tents (Camping)
      </Text>
      <Text style={styles.paragraph}>
        At Trek, all meals will be provided (Healthy Food)
      </Text>
      <Text style={styles.paragraph}>
        At Camps, Bonfire will be provided according to weather conditions.
      </Text>
      <Text style={styles.paragraph}>
        For the Trek, there is fees for trekking permits and forest campsites.
      </Text>
      <Text style={styles.paragraph}>
        Trekking Supplies (Tents, Sleeping Bags, Ice Axes, Ropes, etc.)
      </Text>
      <Text style={styles.paragraph}>
        Expert Trek Leaders will be there to Guide (Certified in basic/advanced mountaineering courses)
      </Text>
      <Text style={styles.paragraph}>
        A skilled trek crew (Guides, Chefs, Assistants, porters/mules) is available.
      </Text>
      <Text style={styles.paragraph}>
        Protective Gear (First Aid Kit, Medical Kit, Oxygen cylinders (if necessary), stretcher, etc.)
      </Text>
      <Text style={styles.paragraph}>
        Trek Certificate for Completion.
      </Text>
      <Text style={styles.paragraph}>
        Basic Survival Techniques in the forest by using natural resources etc.
      </Text>

      <Text style={styles.subtitle}>Exclusion</Text>
      <Text style={styles.paragraph}>
        GST (Service Tax)
      </Text>
      <Text style={styles.paragraph}>
        Offloading Fees for Backpacks (Rs.250 Per day/Per bag)
      </Text>
      <Text style={styles.paragraph}>
        Food on the way to Base and from Pick and Drop
      </Text>
      <Text style={styles.paragraph}>
        Offloading fees for backpacks (Rs. 250/day/bag)
      </Text>
      <Text style={styles.paragraph}>
        Anything not mentioned in Inclusion
      </Text>
      <Text style={styles.paragraph}>
        Any personal Expense
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  paragraph: {
    fontSize: 16,
    marginVertical: 5,
  },
});

export default IncExc;
