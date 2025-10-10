import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { ImageBackground } from 'expo-image'

const index = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('@/assets/images/Beer-Background.png')}
        contentFit='cover'
        style={styles.backgroundImage}
      >

        <Text style={styles.titleHome}>Bier site</Text>

        <Link style={styles.exploreLink} href="/beerList" asChild>
          <Pressable style={styles.exploreButton}>
            <Text style={styles.exploreText}>Bier Lijst</Text>
          </Pressable>
        </Link>
        <Link style={styles.exploreLink} href="/beerListEigenAPI" asChild>
          <Pressable style={styles.exploreButton}>
            <Text style={styles.exploreText}>Bier Lijst(eigen API)</Text>
          </Pressable>
        </Link>
      

       <Link style={styles.exploreLink} href="/readEigenAPI" asChild>
          <Pressable style={styles.exploreButton}>
            <Text style={styles.exploreText}>Read ID(eigen API)</Text>
          </Pressable>

        </Link>

        <Link style={styles.exploreLink} href="/createEigenAPI" asChild>
          <Pressable style={styles.exploreButton}>
            <Text style={styles.exploreText}>Create Data(eigen API)</Text>
          </Pressable>

        </Link>

       <Link style={styles.exploreLink} href="/updateEigenAPI" asChild>
          <Pressable style={styles.exploreButton}>
            <Text style={styles.exploreText}>Update(eigen API)</Text>
          </Pressable>

        </Link>

      <Link style={styles.exploreLink} href="/deleteEigenAPI" asChild>
          <Pressable style={styles.exploreButtonDelete}>
            <Text style={styles.exploreText}>Delete(eigen API)</Text>
          </Pressable>
      
      </Link>

       <Link style={styles.exploreLink} href="/Test" asChild>
          <Pressable style={styles.exploreButton}>
            <Text style={styles.exploreText}>Test</Text>
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
    marginHorizontal: 'auto'
  },

  exploreButton: {
    height: 60,
    borderRadius: 20,
    backgroundColor: 'rgba(47, 47, 47, 0.75)',  
  },
    exploreButtonDelete: {
    height: 60,
    borderRadius: 20,
    backgroundColor: 'rgba(82, 34, 34, 0.76)',  
  },

  exploreText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    padding: 4,
    marginHorizontal: 'auto'
  },
});