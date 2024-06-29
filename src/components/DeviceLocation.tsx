import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

const LocationComponent: React.FC = () => {
  const [location, setLocation] = useState<any | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  //   Geolocation.getCurrentPosition(
  //     success: (
  //       position: {
  //         coords: {
  //           latitude: number;
  //           longitude: number;
  //           altitude: number | null;
  //           accuracy: number;
  //           altitudeAccuracy: number | null;
  //           heading: number | null;
  //           speed: number | null;
  //         };
  //         timestamp: number;
  //       }
  //     ) => void,
  //     error?: (
  //       error: {
  //         code: number;
  //         message: string;
  //         PERMISSION_DENIED: number;
  //         POSITION_UNAVAILABLE: number;
  //         TIMEOUT: number;
  //       }
  //     ) => void,
  //     options?: {
  //         timeout?: number;
  //         maximumAge?: number;
  //         enableHighAccuracy?: boolean;
  //     }
  //   )

  useEffect(() => {
    Geolocation.getCurrentPosition(
      (position: any) => {
        const {latitude, longitude} = position.coords;
        setLocation({latitude, longitude});
      },
      (error: any) => setErrorMsg(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
    return () => {
      Geolocation.stopObserving();
    };
  }, []);

  return (
    <View>
      {errorMsg ? (
        <Text>Error getting location: {errorMsg}</Text>
      ) : location ? (
        <Text>
          Latitude: {location.latitude}, Longitude: {location.longitude}
        </Text>
      ) : (
        <Text>Loading location...</Text>
      )}
    </View>
  );
};

export default LocationComponent;
