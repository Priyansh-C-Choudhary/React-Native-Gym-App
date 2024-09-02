import React from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

export default function WorkoutPlans() {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('../assets/img/bg5.png')}
      style={styles.backgroundImage}
    >
      <SafeAreaView style={styles.safeAreaView}>
            <Text style={styles.welcomeText}>
            Dumbell Uthao Body banao
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
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  backButton: {
    backgroundColor: '#FF6969',
    padding: 8,
    borderRadius: 20,
    marginLeft: 16,
  },
  welcomeText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 50,
  },
});
