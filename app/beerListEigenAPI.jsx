import { View, Text, StyleSheet, ActivityIndicator, FlatList, Image, Button } from 'react-native';
import React, { useEffect, useState } from 'react';

const BeerList = () => {
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  const getAPIData = async () => {
    try {
      const url = 'http://localhost:3001/bieren/all';

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

    // maakt van de php API een Json
      const result = await response.json();

      
      setData(result);

    } catch (err) {
      setError(err.message);
    } finally {
      // zet het laden stop als het gelukt is
      setLoading(false);
    }
  };


  // Haalt data van de API 1x op daarna niet meer
  useEffect(() => {
    getAPIData();
  }, []);

  
  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />{/* het laad icoontje */}
        <Text>info wordt geladen</Text>
      </View>
    );
  }


  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>Error: {error}</Text>
      </View>
    );
  }

  // het scherm met de info over de bieren
  return (
    <View style={styles.container}>
      
      <Text style={styles.textHeader}>Bier Lijst</Text>

      <Button title="Haal bieren op uit eigen API" onPress={getAPIData} />
      
      <FlatList
        data={data} // zet de data in een array
        beerKey={(item) => item.id} // zet de key voor elke id die er is
        renderItem={({ item }) => (
          <View style={styles.beerItem}>

            <Text style={styles.beerName}>{item.naam}</Text>

            <Text style={styles.beerBrewery}>Brouwer: {item.brouwer}</Text>

            <Text style={styles.beerType}>Type: {item.type}</Text>

            <Text style={styles.beerFermentation}>Gisting: {item.gisting}</Text>

            {/* het alcohol% word gegeven als 0,011(als voorbeeld) dus doe ik x 100 om het goed te zien */}
            <Text style={styles.beerPerc}>Alcohol%: {(item.perc * 100).toFixed(1)}%</Text>

            <Text style={styles.beerPrice}>Prijs: €{item.inkoop_prijs}</Text>

            {/* <Image
              style={styles.beerImage}
              source={require('@/assets/images/Biertje.png')}
            /> */}

          </View>
        )}
      />
    </View>
  );
};

export default BeerList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  textHeader: {
    fontSize: 20,
    color: '#000',
    backgroundColor: 'rgba(74, 72, 72, 0.5)',
    textAlign: 'center',
    paddingVertical: 5,
  },
  beerItem: {
    // padding: 10,
    // borderBottomWidth: 1,
    // borderBottomColor: '#ccc',
    display: "flex",
    alignItems: "flex-start",
    gap: "1rem",
    border: "1px solid #ccc",
    padding: "10px",
  },
  beerName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  beerBrewery: {
    fontSize: 14,
    color: '#555',
  },
  beerType: {
    fontSize: 14,
    color: '#555',
  },
  beerFermentation: {
    fontSize: 14,
    color: '#555',
  },
  beerPerc: {
    fontSize: 14,
    color: '#333',
  },
  beerPrice: {
    fontSize: 14,
    color: '#333',
    marginTop: 5,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
  },
  error: {
    color: 'red',
    fontSize: 16,
  },

  beerImage: {
    // width: 50,
    // height: 50,
    // marginTop: 10,
    width: "64px",
    height: "64px",
    objectFit: "contain",
    background: "lightgray"
  },
});
