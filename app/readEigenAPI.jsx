import { View, Text, StyleSheet, ActivityIndicator, FlatList, Image, Button, TextInput } from 'react-native';
import React, { useState } from 'react';

const Viewcomponent = (props) => {
  const [id, setId] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const logValue = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:3001/bieren/getByID?sid=' + id); // vervang 192.168.x.x door jouw PC IP
      const json = await response.json();
      setData(json);
    } catch (error) {
      setData({ error: 'Fout bij ophalen data' });
    }
    setLoading(false);
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
      
      {data && (
        <View style={{ marginTop: 20 }}>
          <Text>{JSON.stringify(data, null, 2)}</Text>
        </View>
      )}
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
});
