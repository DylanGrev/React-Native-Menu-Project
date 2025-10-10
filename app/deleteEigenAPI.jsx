import { View, Text, StyleSheet, ActivityIndicator, TextInput, Pressable } from 'react-native';
import React, { useState } from 'react';
import { Link } from 'expo-router';
import { Button } from '@react-navigation/elements';

const Viewcomponent = (props) => {
  const [id, setId] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const logValue = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:3001/bieren/delete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ dId: id }), // send ID in body
      });
      const result = await response.text();
      setData({ result });
    } catch (error) {
      setData({ error: 'Fout bij verwijderen!' });
    }
    setLoading(false);
  };

  return (
    <View style={styles.text}>
      <Text>Delete</Text>
      <TextInput
        style={styles.input}
        onChangeText={setId}
        placeholder="Enter ID"
        value={id}
      />
      <Pressable style={styles.deleteButton} onPress={logValue}>
        <Text style={styles.deleteButtonText}>Delete (KIJK UIT dit is permanent)</Text>
      </Pressable>

          <Link style={styles.exploreLink} href="/" asChild>
            <Pressable style={styles.exploreButton}>
              <Text style={styles.exploreText}>TERUG</Text>
            </Pressable>
          </Link>

      {data?.result && (
        <View style={{ marginTop: 20, backgroundColor: '#54ee78ff', textAlign: 'center'}}>
          <Text>Het verwijderen is gelukt!</Text>
        </View>
      )}


      {data?.error && (
        <View style={{ marginTop: 20 }}>
          <Text>{data.error}</Text>
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
  deleteButton: {
    backgroundColor: '#aa2828',
    padding: 10,
    borderRadius: 5,
    marginVertical: 8,
    alignItems: 'center',
  },
  deleteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
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
