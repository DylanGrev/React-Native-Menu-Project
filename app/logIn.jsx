import { Link } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Pressable, asyncStorage } from 'react-native';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');
  var loginBool = false;

  // Fetch and log the first 3 login attempts (simulate, since only /login exists)
  // This will just log the current login attempt
  const logFirstThreeLoginInputs = () => {
    console.log('Login attempt with:', { username, password });
  };

  const handleLogin = async () => {
    logFirstThreeLoginInputs();

    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const text = await response.text();

      if (response.ok && text.includes('Login gelukt')) {
        loginBool = true;
        setLoginMessage('Login successful!');
        console.log('Logged in with username:', username, 'and password:', password, loginBool);
      } else {
        loginBool = false;
        setLoginMessage('Login failed');
        console.log('Login failed', loginBool);
      }
    } catch (error) { 
      loginBool = false;  
      setLoginMessage('Error connecting to server');
      console.log('connection failed');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />


      <Link style={styles.exploreLink} href="/" asChild>
        <Pressable style={styles.exploreButton}>
          <Text style={styles.exploreText}>TERUG</Text>
        </Pressable>
      </Link>


      <View style={{ marginTop: 24 }}>
        {loginMessage !== '' && (
          <Text style={{ fontSize: 16 }}>{loginMessage}</Text>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 22,
    paddingHorizontal: 10,
  },

    exploreText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    padding: 4,
    marginHorizontal: 'auto'
  },

  exploreLink: {
    marginTop: 20,
    marginHorizontal: 'auto'
  },

  exploreButton: {
    height: 60,
    borderRadius: 20,
    backgroundColor: 'rgba(11, 201, 113, 1)',  
  },
});

export default LoginPage;