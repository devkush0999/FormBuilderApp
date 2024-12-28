import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FormEditorScreen from '../screens/FormEditorScreen';
import FormPreviewScreen from '../screens/FormPreviewScreen';
import FormResponseScreen from '../screens/FormResponseScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="FormEditor" component={FormEditorScreen} options={{ title: 'Form Editor' }} />
        <Stack.Screen name="FormPreview" component={FormPreviewScreen} options={{ title: 'Form Preview' }} />
        <Stack.Screen name="FormResponse" component={FormResponseScreen} options={{ title: 'Form Responses' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
