import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons from Expo icons

export default function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} style={styles.drawerContent}>
      <View style={styles.drawerInnerContent}>
        <Text style={styles.drawerTitle}>Menu</Text>
        <DrawerItem
          label="Dashboard"
          labelStyle={styles.drawerItemLabel}
          icon={() => <Ionicons name="home" size={24} color="white" />}
          onPress={() => props.navigation.navigate('Dashboard')} 
        />
        <DrawerItem
          label="Profile"
          labelStyle={styles.drawerItemLabel}
          icon={() => <Ionicons name="person-circle-outline" size={24} color="white" />}
          onPress={() => props.navigation.navigate('Profile')} 
        />
        <DrawerItem
          label="Memberships"
          labelStyle={styles.drawerItemLabel}
          icon={() => <Ionicons name="document-text-outline" size={24} color="white" />}
          onPress={() => props.navigation.navigate('Memberships')}
        />
        <DrawerItem
          label="Workout Plan"
          labelStyle={styles.drawerItemLabel}
          icon={() => <Ionicons name="fitness-outline" size={24} color="white" />}
          onPress={() => props.navigation.navigate('WorkoutPlans')}
        />
        <DrawerItem
          label="Payments"
          labelStyle={styles.drawerItemLabel}
          icon={() => <Ionicons name="wallet-outline" size={24} color="white" />}
          onPress={() => props.navigation.navigate('Payments')}
        />
        <DrawerItem
          label="Settings"
          labelStyle={styles.drawerItemLabel}
          icon={() => <Ionicons name="settings-outline" size={24} color="white" />}
          onPress={() => props.navigation.navigate('Settings')}
        />
        <DrawerItem
          label="UI"
          labelStyle={styles.drawerItemLabel}
          icon={() => <Ionicons name="eye-outline" size={24} color="white" />}
          onPress={() => props.navigation.navigate('UIScreen')} // Assuming an external link
        />
        <DrawerItem
          label="Logout"
          labelStyle={styles.drawerItemLabel}
          icon={() => <Ionicons name="log-out-outline" size={24} color="white" />}
          onPress={() => props.navigation.navigate('Login')}
        />  
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    backgroundColor: 'black',
  },
  drawerInnerContent: {
    paddingTop: 20,
  },
  drawerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginLeft: 16,
    color: 'white',
  },
  drawerItemLabel: {
    color: 'white',
  },
});
