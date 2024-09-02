import React from 'react';
import { Text, StyleSheet, SafeAreaView, ImageBackground, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';

export default function EditProfile() {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('../assets/img/bg5.png')}
      style={styles.backgroundImage}
    >
      <SafeAreaView className="flex">
        <View className="flex-row justify-start">
          <TouchableOpacity 
          onPress={() => navigation.goBack()}
          >
            <ArrowLeftIcon size="20" color="black"/>
          </TouchableOpacity>
        </View>
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
});
