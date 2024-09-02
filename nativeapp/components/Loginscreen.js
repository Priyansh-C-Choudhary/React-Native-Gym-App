import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import API_SERVER_URL from '../config/apiconfig';
import KeyboardAvoidingWrapper from './KeyboardAvoidingWrapper';

const Loginscreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    if (!username || !password) {
      setError('Username and password are required.');
      return;
    }

    try {
      const response = await axios.post(`${API_SERVER_URL}/api/login`, {
        username,
        password,
      });

      const token = response.data.token;
      await AsyncStorage.setItem('token', token);
      console.log("Login successful. Token:", token);
      navigation.navigate('DashboardDrawer');
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setError('Invalid username or password. Please try again.');
      } else {
        console.error('Error logging in:', error);
        setError('An unexpected error occurred. Please try again later.');
      }
    }
  };

  return (
    <KeyboardAvoidingWrapper>
      <View className="flex-1 bg-white" style={{ backgroundColor: "black" }}>
        <SafeAreaView className="flex">
          <View className='flex-row justify-start'>
            <TouchableOpacity onPress={() => navigation.goBack()} className='bg-custom-red p-2 rounded-tr-2xl rounded-bl-2xl ml-4'>
              <ArrowLeftIcon size="20" color="black" />
            </TouchableOpacity>
          </View>
          <View className="flex-row justify-center">
            <Image
              source={require('../assets/img/img10.png')}
              style={{ width: 250, height: 250 }}
            />
          </View>
        </SafeAreaView>
        <View className="flex-1 bg-white px-8 pt-8" style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}>
            <View style={{ flex: 1 }}>
              <View className="form space-y-2">
                <Text className="text-black-700 ml-4">Username</Text>
                <TextInput
                  className="p-4 bg-gray-100 text-black-700 rounded-2xl mb-3"
                  value={username}
                  placeholder="Enter your username"
                  onChangeText={setUsername}
                />
                <Text className="text-black-700 ml-4">Password</Text>
                <TextInput
                  className="p-4 bg-gray-100 text-black-700 rounded-2xl"
                  secureTextEntry
                  value={password}
                  placeholder="Enter password"
                  onChangeText={setPassword}
                />
                <TouchableOpacity style={{ alignItems: 'flex-end', marginBottom: 10 }}>
                  <Text style={{ color: 'gray', fontWeight: '600' }}>
                    Forgot Password?
                  </Text>
                </TouchableOpacity>
                {error ? <Text style={{ color: 'red', marginBottom: 10 }}>{error}</Text> : null}
                <TouchableOpacity
                  style={{ paddingVertical: 12, backgroundColor: '#FF6969', borderRadius: 16 }}
                  onPress={handleSubmit}
                  // onPress={() => navigation.navigate('DashboardDrawer')}
                >
                  <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', color: '#000' }}>
                    Login
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
        </View>
      </View>
    </KeyboardAvoidingWrapper>
  );
}

export default Loginscreen;
