import React from 'react';
import { View, Text, Button, Linking } from 'react-native';

export default function UIScreen() {
  const handleOpenLink = () => {
    Linking.openURL('https://www.example.com'); // Replace with your actual link
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>This is the UI page.</Text>
      <Text>Click the button to open the external link.</Text>
      <Button title="Open Link" onPress={handleOpenLink} />
    </View>
  );
}
