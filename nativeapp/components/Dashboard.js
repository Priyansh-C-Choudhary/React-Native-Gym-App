import React from 'react';
import { Text, StyleSheet, SafeAreaView, ImageBackground } from 'react-native';

export default function Dashboard() {
  return (
    <ImageBackground
      source={require('../assets/img/img12.jpg')}
      style={styles.backgroundImage}
    >
      <SafeAreaView style={styles.safeAreaView}>
        <Text style={styles.welcomeText}>
          Welcome to your Dashboard!
        </Text>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  safeAreaView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '26%',
    backgroundColor: 'transparent',
  },
  welcomeText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
  },
});
