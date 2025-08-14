import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { ImageBackground } from 'expo-image'

const index = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('@/assets/images/Moon-Background.png')}
        contentFit='cover'
        style={styles.backgroundImage}
      >

        <Text style={styles.titleHome}>This is a test with testing</Text>

        <Link style={styles.exploreLink} href="/explore" asChild>
          <Pressable style={styles.exploreButton}>
            <Text style={styles.exploreText}>Explore</Text>
          </Pressable>
        </Link>
      
      </ImageBackground>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',

  },

  backgroundImage: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center'
  },

  titleHome: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 50,
    backgroundColor: 'rgba(52, 51, 51, 0.5)',
    marginBottom: 120,
  },
  exploreLink: {
    // color: 'white',
    // fontSize: 20,
    // textAlign: 'center',
    // textDecorationLine: 'underline',
    // backgroundColor: 'rgba(44, 43, 43, 0.5)',
    // padding: 4,
    marginHorizontal: 'auto'
  },

  exploreButton: {
    height: 60,
    borderRadius: 20,
    backgroundColor: 'rgba(47, 47, 47, 0.75)',  
  },

  exploreText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    padding: 4,
    marginHorizontal: 'auto'
  },
});