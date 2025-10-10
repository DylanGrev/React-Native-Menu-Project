import { View, Text, StyleSheet, ActivityIndicator, Button, TextInput, Pressable } from 'react-native';
import React, { useState } from 'react';
import { Link } from 'expo-router';

const Viewcomponent = (props) => {
  const [id, setId] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  // Form state voor update
  const [naam, setNaam] = useState("");
  const [brouwer, setBrouwer] = useState("");
  const [type, setType] = useState("");
  const [gisting, setGisting] = useState("");
  const [perc, setPerc] = useState("");
  const [inkoopPrijs, setInkoopPrijs] = useState("");
  const [updateResult, setUpdateResult] = useState("");

  const logValue = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:3001/bieren/getByID?sid=' + id);
      const json = await response.json();
      setData(json);

      // Vul form state met opgehaalde data
      setNaam(json.naam || "");
      setBrouwer(json.brouwer || "");
      setType(json.type || "");
      setGisting(json.gisting || "");
      setPerc(json.perc ? String(json.perc) : "");
      setInkoopPrijs(json.inkoop_prijs ? String(json.inkoop_prijs) : "");
    } catch (error) {
      setData({ error: 'Fout bij ophalen data' });
    }
    setLoading(false);
  };

  // Update functie
  const handleUpdate = async () => {
    setUpdateResult("");
    try {
      const response = await fetch('http://localhost:3001/bieren/update/update', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          uid: id,
          naam,
          brouwer,
          type,
          gisting,
          perc,
          inkoop_prijs: inkoopPrijs,
        }),
      });
      const result = await response.text();
      setUpdateResult("De bier is geupdate");
    } catch (error) {
      setUpdateResult("Fout bij updaten!");
    }
  };

  return (
    <View style={styles.text}>
      <Text>readEigenAPI</Text>
      <TextInput
        style={styles.input}
        onChangeText={setId}
        placeholder="Enter ID"
        value={id}
      />
      <Button title="Fetch Data" onPress={logValue} />

      {loading && <ActivityIndicator />}

      {data && !data.error && (
        <View style={{ marginTop: 20 }}>
          <Text>Update Bier:</Text>
          <TextInput style={styles.input} value={naam}  onChangeText={setNaam} placeholder="Naam" />
          <TextInput style={styles.input} value={brouwer} onChangeText={setBrouwer} placeholder="Brouwer" />
          <TextInput style={styles.input} value={type} onChangeText={setType} placeholder="Type" />
          <TextInput style={styles.input} value={gisting} onChangeText={setGisting} placeholder="Gisting" />
          <TextInput style={styles.input} value={perc} onChangeText={(text) => setPerc (text.replace(/[^0-9.]/g, ''))} placeholder="Percentage" keyboardType="numeric" />
          <TextInput style={styles.input} value={inkoopPrijs} onChangeText={(text) => setInkoopPrijs (text.replace(/[^0-9.]/g, ''))} placeholder="Inkoop prijs" keyboardType="numeric" />
          <Button
            title="Update Bier"
            onPress={handleUpdate}
            disabled={
              !naam ||
              !brouwer ||
              !type ||
              !gisting ||
              !perc ||
              !inkoopPrijs
            }
          />
          {updateResult ? <Text style={{ textAlign: 'center', marginTop: 10, backgroundColor: '#1e6d03ff', color: '#b8b8b8ff', padding: 10, borderRadius: 5
           }}>{updateResult}</Text> : null}
        </View>
      )}

      {data && data.error && (
        <View style={{ marginTop: 20 }}>
          <Text>{data.error}</Text>
        </View>
      )}

      <Link style={styles.exploreLink} href="/" asChild>
        <Pressable style={styles.exploreButton}>
          <Text style={styles.exploreText}>TERUG</Text>
        </Pressable>
      </Link>
    </View>
  );
};

export default Viewcomponent;

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
  exploreLink: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#007AFF',
  },
  exploreButton: {
    alignItems: 'center',
  },
  exploreText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
