import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { MarkedLocation, MarkedLocationType } from '../Assets/Marker';

import link_IMG from '../images/Others/icons8-external-link-50.png'
import { Image } from 'react-native-animatable';

interface coordinate {
    latitude: number;
    longitude: number;
}
interface ShownMapProps {
    Place: string
}

const ShownMap: React.FC<ShownMapProps> = ({ Place }) => {
    const [data, setdata] = useState<MarkedLocationType | null>(null);

    const findLocationByName = (name: string): MarkedLocationType => {
        const foundLocation = MarkedLocation.find((location) => location.name === name);
        if (!foundLocation) {
            throw new Error(`Location with name '${name}' not found.`);
        }
        return foundLocation;
    }

    const initialRegion = {
        latitude: 28.6139,
        longitude: 77.209,
        latitudeDelta: 10, // Adjust the zoom level as needed
        longitudeDelta: 10,
    };
    const openInBrowser = () => {
        if (data === null) {
            return;
        }
        const origin = '28.6139,77.209'; // Delhi coordinates
        const destination = `${data.latitude},${data.longitude}`; // Destination coordinates

        const url = `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}`;
        Linking.openURL(url);
    }
    useEffect(() => {
        setdata(findLocationByName(Place))
    }, [])

    if (data === null) {
        return <ActivityIndicator size="large" color="#0000ff" />
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Live Location</Text>
            <MapView style={styles.map} initialRegion={initialRegion}>
                <Marker
                    coordinate={{ latitude: 28.6139, longitude: 77.209 }}
                    title="Delhi"
                    pinColor='#5ba8ff'
                />
                <Marker
                    coordinate={{ latitude: data.latitude, longitude: data.longitude }}
                    title={data.name}
                />
            </MapView>
            <TouchableOpacity onPress={openInBrowser} style={styles.linkcontainer}>
                <Text style={styles.linktext}>open in google map</Text>
                <Image
                    style={styles.linkimage}
                    source={link_IMG}
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginVertical: 10
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
});

export default ShownMap;
