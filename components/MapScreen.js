import React ,{useState,useEffect} from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View,Text } from 'react-native';
import * as Location from 'expo-location';
//import Geolocation from '@react-native-community/geolocation';


export default function MapScreen() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  return (
    <View style={styles.container}>
      {location ? (
        <MapView
          initialRegion={{
            latitude: parseFloat(location.coords.latitude),
            longitude: parseFloat(location.coords.longitude),
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}
          style={styles.map}
        />
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
