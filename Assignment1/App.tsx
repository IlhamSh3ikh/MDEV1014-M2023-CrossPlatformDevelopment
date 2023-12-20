import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Icon, { Icons } from '../Assignment1/components/Icon';
import SearchResult from './views/results/SearchResult';
import Login from './views/login/Login';
import Navigation from './views/Navigation';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Flex from './views/home/Home';
import CartScreen from './views/Cart';
import ProfileScreen from './views/Profile';
import OrderHistoryScreen from './views/OrderHistory';
import Signup from './views/signup/Signup';

const Stack = createNativeStackNavigator();
import { StyleSheet, Text, View, TextInput } from 'react-native';
import GymWearResult from './views/results/GymWearResult';
import ShoesResult from './views/results/ShoesResult';
import TrousersResult from './views/results/TrousersResult';
import ShirtsResult from './views/results/ShirtsResult';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AuthProvider } from './controllers/AuthContext';
const Tab = createBottomTabNavigator();

// TabItem and TabArr definitions here...

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'green',
          headerTitleStyle: {
            fontSize: 24,
          },
        }} initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Flex} />
          <Stack.Screen name="Cart" component={CartScreen} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="SearchResult" component={SearchResult} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="OrderHistory" component={OrderHistoryScreen} />
          <Stack.Screen name="OneStopShop" component={Navigation} />
          <Stack.Screen name="GymWearResult" component={GymWearResult} />
          <Stack.Screen name="ShirtsResult" component={ShirtsResult} />
          <Stack.Screen name="ShoesResult" component={ShoesResult} />
          <Stack.Screen name="TrousersResult" component={TrousersResult} />
          {/* Other screen components */}
        </Stack.Navigator>
      </NavigationContainer>
      </AuthProvider>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#66BB6A',
    flex: 1,
  },
});
