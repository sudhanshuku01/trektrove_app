import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Overview = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gangotri Overview</Text>

      <Text style={styles.paragraph}>
        Gangotri National Park established in 1989, is situated in Uttarkashi district in the upper catchment of Bhagirathi River covering 1,553 square kilometres area. Variation in altitude starting from 1800 to 7083 meters is majestically decorated by nature with Coniferous Forest, Meadows and Glaciers. Gangotri glacier, the origin of river Ganga, is located inside Gangotri National Park. The enchanting beauty of the area is highlighted by the snow clad mountains, eye catching springs and tall-dense-green forests which fill you with peace and tranquility. Gangotri National Park has a typical high altitude ecosystem, physically and biologically influenced by the trans-Himalayan elements to a greater extent.
      </Text>

      <Text style={styles.paragraph}>
        In the lower elevation of the park, we can see Western Himalayan Subalpine Conifer Forest and on the higher elevation, we find Western Himalayan Alpine Shrub and Meadows. Chirpine, deodar, fir, spruce, oak and rhododendron are the common vegetation in Gangotri National Park.
      </Text>

      <Text style={styles.paragraph}>
        Various rare and endangered species like bharal or blue sheep, black bear, brown bear, Himalayan Monal, Himalayan Snowcock, Himalayan Thar, musk deer, and Snow leopard are found in the park. The birds and animals usually found in Gangotri National Park are Bulbul, Doves, Himalayan Barbet, Ibex, Parakeet, Partridges, Pheasants, Pigeons, Serow, Snow Leopard, Thar, and Tiger. As per the study of Paramanand ET. Al. in 2000, there are 15 species of mammals and 150 bird species in Gangotri National Park.
      </Text>

      <Text style={styles.paragraph}>
        Gangotri National Park is the source of several significant rivers in India. The park's glaciers, such as Gangotri Glacier (one of the largest in the Himalayas) and Kedartal Glacier, feed the Bhagirathi River, which later joins the Alaknanda River to form the Ganges. These rivers and their tributaries flow through the park, providing water to vast areas downstream.
      </Text>

      <Text style={styles.paragraph}>
        Gangotri National Park offers exciting opportunities for trekking and adventure enthusiasts. Popular trekking routes within the park include the Gangotri-Gaumukh-Tapovan trek, which takes you to the snout of the Gangotri Glacier, and the Auden's Col trek, a challenging high-altitude trek connecting Gangotri with Kedarnath. These treks allow you to witness the awe-inspiring beauty of the Himalayan peaks, glaciers, and alpine meadows.
      </Text>

      <Text style={styles.paragraph}>
        Tourists who want to make their adventure more special generally do one of these, some of these, or all of these - Hang gliding, Hiking, Jeep Safari, Mountaineering, Paragliding, River Rafting, and Skiing.
      </Text>

      <Text style={styles.paragraph}>
        Forest Department of Uttarakhand government governs Gangotri National Park. Consequential landslides have distinctly broken up the steeper mountain sides that exist through the entire route from Gangotri to Gaumukh. The irreversible isolation caused by the landslides between forest patches including the alpine vegetation and its impact on the forest and dependent organisms must be documented. The northeastern boundary of Gangotri National Park is along the international boundary with China.
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
  paragraph: {
    fontSize: 16,
    marginVertical: 5,
  },
});

export default Overview;
