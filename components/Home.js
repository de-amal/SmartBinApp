import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import { getDatabase, ref, onValue } from "firebase/database";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your Firebase configuration
const firebaseConfig = {
    //init firebase config
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const dbRef = getDatabase(app);

export default function Home() {
  const [binsData, setBinsData] = useState(null); // State to hold bin data

  useEffect(() => {
    // Fetch data from Firebase Realtime Database
    const fetchBinsData = () => {
      const binsRef = ref(dbRef, "Bins");
      onValue(binsRef, (snapshot) => {
        const data = snapshot.val();
        setBinsData(data);
      });
    };

    fetchBinsData();
  }, []);

  return (
    <View style={styles.container}>

      <ScrollView contentContainerStyle={styles.scrollView}>

        {binsData && Object.entries(binsData).map(([binKey, bin]) => (
          <View key={binKey} style={styles.binContainer}>
            <Text style={styles.binTextMain}> {binKey}</Text>
            <Text style={styles.binText}>Latitude: {bin.lat}  Longitude: {bin.longi}</Text>
            <Text style={styles.binText}>Percent: {bin.percent}</Text>
          </View>
        ))}

      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    width:'100%',
    backgroundColor: '#ffffff',
  },
  scrollView: {
    flexGrow: 1,
    width:'100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  binContainer: {
    borderWidth: 1,
    height:131,
    width:'100%',
    borderColor: 'gray',
    padding: 10,
    margin: 10,
  },
  binText: {
    fontSize: 16,
    marginBottom: 5,
  },
  binTextMain:{
    fontWeight:'bold',
    fontSize:20
  }
});
