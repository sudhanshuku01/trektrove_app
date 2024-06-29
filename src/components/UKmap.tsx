import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps'
import link_IMG from '../images/Others/icons8-external-link-50.png'

const UKmap = () => {
    const initialRegion = {
        latitude: 30.25, // Approximate center latitude of Uttarakhand
        longitude: 79.0, // Approximate center longitude of Uttarakhand
        latitudeDelta: 2.5, // Adjust according to your preference
        longitudeDelta: 2.5, // Adjust according to your preference
    };
    const openInBrowser = () => {
        const latitude = initialRegion.latitude;
        const longitude = initialRegion.longitude;
        const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
        Linking.openURL(url);
    }
    return (
        <View style={styles.ukmap}>
            <Text style={styles.title}>Visit Uttarakhand On Map</Text>
            <MapView style={styles.map} initialRegion={initialRegion}>
            </MapView>
            <TouchableOpacity onPress={openInBrowser} style={styles.linkcontainer}>
                <Text style={styles.linktext}>open in google map</Text>
                <Image
                    style={styles.linkimage}
                    source={link_IMG}
                />
            </TouchableOpacity>
        </View>
    )
}

export default UKmap

const styles = StyleSheet.create({
    ukmap: {
        width: '100%',
        marginVertical: 15
    },
    map: {
        width: '100%',
        height: 300,
    },
    title: {
        fontSize: 20,
        fontFamily: 'Raleway-Bold',
        color: 'rgba(101, 64, 58, 1)',
        margin: 15,
    },
    linkcontainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingHorizontal: 10
    },
    linktext: {
        fontSize: 17,
        color: '#1c80a5',
        textDecorationLine: 'underline',
        fontFamily: 'PlusJakartaSans-Medium'
    },
    linkimage: {
        width: 17,
        height: 17,
        tintColor: '#1c80a5'
    }
})