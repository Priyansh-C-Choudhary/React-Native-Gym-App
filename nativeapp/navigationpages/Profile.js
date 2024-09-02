import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { PencilIcon } from 'react-native-heroicons/solid';
import API_SERVER_URL from '../config/apiconfig';

export default function Profile() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = await AsyncStorage.getItem('token');

        if (token) {
          const response = await axios.post(`${API_SERVER_URL}/api/userDetails`, {}, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
          setProfile(response.data);
        } else {
          console.log('Token is missing');
        }
      } catch (error) {
        console.error('Error fetching profile data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#ffffff" />
      </SafeAreaView>
    );
  }

  if (!profile) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <Text style={styles.errorMessage}>No profile information available.</Text>
      </SafeAreaView>
    );
  }

  const renderProfileItem = (label, value) => {
    if (value) {
      return (
        <Text style={styles.profileText}>
          <Text style={styles.boldText}>{label}:</Text> {value}
        </Text>
      );
    }
    return null;
  };

  return (
    <ImageBackground
      source={require('../assets/img/bg5.png')}
      style={styles.backgroundImage}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.box}>
          <View style={{ alignSelf: 'center' }}>
            <View style={styles.profilePictureContainer}>
              <Image
                source={require('../assets/img/img9.png')}
                style={styles.profilePicture}
              />
            </View>
          </View>
          <TouchableOpacity
            style={styles.editButton}
            onPress={() => navigation.navigate('EditProfile')}
          >
            <PencilIcon size={20} color="white" />
          </TouchableOpacity>
          {renderProfileItem('Name', `${profile.firstName} ${profile.lastName}`)}
          {renderProfileItem('Email', profile.email)}
          {renderProfileItem('Phone', profile.phone)}
          {renderProfileItem('Username', profile.username)}
          {renderProfileItem('Date of Birth', profile.dateOfBirth)}
          {renderProfileItem('Gender', profile.gender)}
          {renderProfileItem('Address', `${profile.address ? profile.address : ''} ${profile.city ? ', ' + profile.city : ''} ${profile.state ? ', ' + profile.state : ''} ${profile.pincode ? ', ' + profile.pincode : ''} ${profile.country ? ', ' + profile.country : ''}`.trim())}
          {renderProfileItem('Emergency Contact', `${profile.emergencyContactName ? profile.emergencyContactName : ''} ${profile.emergencyContactRelation ? ', ' + profile.emergencyContactRelation : ''} ${profile.emergencyContactPhone ? '(' + profile.emergencyContactPhone + ')' : ''}`.trim())}
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  errorMessage: {
    color: 'white',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  box: {
    width: '80%',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    borderRadius: 10,
    alignItems: 'flex-start',
    marginBottom: 30,
    position: 'relative',
  },
  profileText: {
    color: 'black',
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: '400'
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 19,
  },
  profilePictureContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
    margin: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    alignSelf: 'center',
  },
  profilePicture: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  editButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#FF6969',
    borderRadius: 50,
    padding: 10,
  },
});
