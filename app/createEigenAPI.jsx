import { View, Text, StyleSheet, ActivityIndicator, FlatList, Image, Button, TextInput } from 'react-native';
import React, { useState } from 'react';



const createEigenAPI = (props) => 
{
    const [bierNaam, setName] = useState("");
    const [bierBrouwer, setBrouwer] = useState("");
    const [bierType, setType] = useState("");
    const [bierGisting, setGisting] = useState("");
    const [bierPercentage, setPercentage] = useState("");
    const [bierPrijs, setPrijs] = useState("");

  const logValue = async () => {
    if(!bierNaam == "" && !bierBrouwer == "" && !bierType == "" && !bierGisting == "" && !bierPercentage == "" && !bierPrijs == "")
    {
        console.log(bierNaam);
        console.log(bierBrouwer);
        console.log(bierType);
        console.log(bierGisting);
        console.log(bierPercentage);
        console.log(bierPrijs);
    }
    else
    {

        console.log("FOUT!");

    }
  };



  return (
    <View style={styles.view}>
      <Text>createEigenAPI</Text>

          <TextInput
            style={styles.input}
            onChangeText={setName}
            placeholder="Voeg naam toe"
            value={bierNaam}
          />
          <TextInput
            style={styles.input}
            onChangeText={setBrouwer}
            placeholder="voeg naam van Brouwer"
            value={bierBrouwer}
          />
          <TextInput
            style={styles.input}
            onChangeText={setType}
            placeholder="voeg type toe"
            value={bierType}
          />
          <TextInput
            style={styles.input}
            onChangeText={setGisting}
            placeholder="voeg gisting"
            value={bierGisting}
          />
          <TextInput
            style={styles.input}
            onChangeText={setPercentage}
            placeholder="voeg Percentage toe"
            value={bierPercentage}
          />
          <TextInput
            style={styles.input}
            onChangeText={setPrijs}
            placeholder="voeg Prijs"
            value={bierPrijs}
          />

          
          <Button title="Fetch Data" onPress={logValue} />

    </View>

    
  )
}

export default createEigenAPI


const styles = StyleSheet.create({
  text: {
    flex: 1,
    flexDirection: 'column',
    color: '#000000ff',
    backgroundColor: '#fff',
    fontSize: 20,
    textAlign: 'center',
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#000000ff',
    marginVertical: 8,
    padding: 8,
  },
    view: 
    {
        backgroundColor: '#fff',
    }
});
