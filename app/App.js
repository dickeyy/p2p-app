import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './pages/home';
import ProfilePage from './pages/profile'
import CardsPage from './pages/cards'
import OnboardingScreen from './pages/onboarding';
import BankPage from './pages/bank';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{ headerShown: false, animation: 'fade' }}
        />

        <Stack.Screen
          name="Cards"
          component={CardsPage}
          options={{ headerShown: false, animation: 'fade' }}
        />

        <Stack.Screen
          name="Bank"
          component={BankPage}
          options={{ headerShown: false, animation: 'fade' }}
        />

        <Stack.Screen
          name="Profile"
          component={ProfilePage}
          options={{ headerShown: false, animation: 'fade' }}
        />

        <Stack.Screen
          name="History"
          component={ProfilePage}
          options={{ headerShown: false, animation: 'fade' }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;