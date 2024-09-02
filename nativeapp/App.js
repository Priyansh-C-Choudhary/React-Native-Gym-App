import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import LoginScreen from './components/Loginscreen';
import SignupScreen from './components/signupscreen';
import HomeScreen from './components/HomeScreen';
import Dashboard from './components/Dashboard';
import CustomDrawerContent from './components/CustomDrawerContent'; // Import the custom drawer component
import Profile from './navigationpages/Profile';
import Memberships from './navigationpages/Memberships';
import EditProfile from './navigationpages/editprofile';
import WorkoutPlans from './navigationpages/workoutplans';
import Payments from './navigationpages/payments';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DashboardDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="DashboardMain"
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerStyle: { backgroundColor: 'black' },
        headerTintColor: 'white',
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: 'white',
        drawerStyle: { backgroundColor: 'black' },
        drawerIcon: ({ color, size }) => (
          <Ionicons name="menu" size={size} color="white" />
        ),
      }}
    >
      <Drawer.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color="white" />
          ),
        }}
      />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Memberships" component={Memberships} />
      <Drawer.Screen name="WorkoutPlans" component={WorkoutPlans} />
      <Drawer.Screen name="Payments" component={Payments} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
        <Stack.Screen name="DashboardDrawer" component={DashboardDrawer} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Memberships" component={Memberships} />
        <Stack.Screen name="WorkoutPlans" component={WorkoutPlans} />
        <Stack.Screen name="EditProfile" component={EditProfile} options={{ headerShown: false }}/>
        <Stack.Screen name="Payments" component={Payments} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
