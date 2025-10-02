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
    const [statusMessage, setStatusMessage] = useState("");

    


//Console logger die ik kan oproepen om de if kleiner en schoner te houden
    const consoleLog = (message) => 
    {
        console.log(bierNaam);
        console.log(bierBrouwer);
        console.log(bierType);
        console.log(bierGisting);
        console.log(bierPercentage);
        console.log(bierPrijs);
    }


  const sendValue = async () => {
    // checker voor lege forms
    if(!bierNaam == "" && !bierBrouwer == "" && !bierType == "" && !bierGisting == "" && !bierPercentage == "" && !bierPrijs == "")
    {
        consoleLog();

        try {
          const response = await fetch("http://localhost:3001/bieren/create", { 
// andere IP adressen om naar te fetchen
// On Android emulator → use http://10.0.2.2:3000/...
// On iOS simulator → http://localhost:3000/...
// On a physical device → your PC’s local IP, e.g. http://192.168.1.10:3000/...
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              naam: bierNaam,
              brouwer: bierBrouwer,
              type: bierType,
              gisting: bierGisting,
              perc: bierPercentage,
              inkoop_prijs: bierPrijs,
            }),
          });

          if (!response.ok) {
            throw new Error("Failed to add bier");
          }

          const data = await response.text();
          console.log("Success:", data);
          console.warn("Success: wilt u meer toevoegen kan dat nog");
          setStatusMessage("Biertje is toegevoegd wilt u nog 1 toevoegen kan dat");

          // reset forms na versturen van de fetch
          setName("");
          setBrouwer("");
          setType("");
          setGisting("");
          setPercentage("");
          setPrijs("");
        } catch (error) {
          console.error("Error:", error);
        }

    }
    else
    {

        console.log("FOUT!");

    }
  };



  return (
    <View style={styles.view}>
      <Text>createEigenAPI</Text>
      <Text style={styles.statusMessage}>{statusMessage}</Text>

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

            keyboardType="numeric" 
            style={styles.input}
            onChangeText={(text) => setPercentage
                        (text.replace(/[^0-9.]/g, ''))}
            placeholder="voeg Percentage toe"
            value={bierPercentage}
          />
          <TextInput
            keyboardType="numeric"
            style={styles.input}
            onChangeText={(text) => setPrijs
                        (text.replace(/[^0-9.]/g, ''))}
            placeholder="voeg Prijs"
            value={bierPrijs}
          />

          
          <Button title="Fetch Data" onPress={sendValue} />

    </View>

    
  )
}

export default createEigenAPI


const styles = StyleSheet.create({
  text: 
  {
    flex: 1,
    flexDirection: 'column',
    color: '#000000ff',
    backgroundColor: '#fff',
    fontSize: 20,
    textAlign: 'center',
    padding: 16,
  },
  input: 
  {
    borderWidth: 1,
    borderColor: '#000000ff',
    marginVertical: 8,
    padding: 8,
  },
    view: 
    {
        backgroundColor: '#fff',
    },
    statusMessage:
    {
        textAlign: 'center',
        fontSize: 16,
        color: '#097e30ff',
        backgroundColor: 'rgba(88, 85, 85, 0.57)',
    }
});

