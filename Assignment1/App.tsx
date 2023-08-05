import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Icon, { Icons } from '../Assignment1/components/Icon';
import SearchResult from './SearchResult';
import Login from './Login';
import Navigation from './Navigation';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Flex from './Home';
import CartScreen from './Cart';
import ProfileScreen from './Profile';
import OrderHistoryScreen from './OrderHistory';
import Signup from './Signup';


const Stack = createNativeStackNavigator();
import { StyleSheet, Text, View, TextInput} from 'react-native';
import GymWearResult from './GymWearResult';
import ShoesResult from './ShoesResult';
import TrousersResult from './TrousersResult';
import ShirtsResult from './ShirtsResult';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

type TabItem = {
  route: string;
  label: string;
  type: keyof typeof Icons;
  activeIcon: string;
  inActiveIcon: string;
  component: React.ComponentType<any>; 
};

const TabArr: TabItem[] = [
  {
    route: 'Home',
    label: 'Home',
    type: 'Ionicons',
    activeIcon: 'grid',
    inActiveIcon: 'grid-outline',
    component: Flex,
  },
  {
    route: 'History',
    label: 'History',
    type: 'Ionicons',
    activeIcon: 'grid',
    inActiveIcon: 'grid-outline',
    component: OrderHistoryScreen,
  },
  {
    route: 'Cart',
    label: 'Cart',
    type: 'MaterialCommunityIcons',
    activeIcon: 'heart-plus',
    inActiveIcon: 'heart-plus-outline',
    component: CartScreen,
  },
  {
    route: 'Profile',
    label: 'Profile',
    type: 'MaterialCommunityIcons',
    activeIcon: 'timeline-plus',
    inActiveIcon: 'timeline-plus-outline',
    component: ProfileScreen,
  },
];
const App = () => {
  return (
    <><NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: 'black', // Set your desired background color here
          },
          headerTintColor: 'green',
          headerTitleStyle: {
              fontSize: 24,
            },
        }} initialRouteName="OneStopShop">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Flex} />
          <Stack.Screen name="Cart" component={CartScreen} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="SearchResult" component={SearchResult} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="OrderHistory" component={OrderHistoryScreen} />
          <Stack.Screen name="OneStopShop" component={Navigation} />
          <Stack.Screen name="GymWearResult" component={GymWearResult}/>
          <Stack.Screen name="ShirtsResult" component={ShirtsResult}/>
          <Stack.Screen name="ShoesResult" component={ShoesResult}/>
          <Stack.Screen name="TrousersResult" component={TrousersResult}/>
          {/* Other screen components */}
        </Stack.Navigator>
    </NavigationContainer><View style={styles.container}>
    <NavigationContainer>
    <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}>
          {TabArr.map((item, index) => {
            return (
              <Tab.Screen key={index} name={item.route} component={item.component}
                options={{
                  tabBarLabel: item.label,
                  tabBarIcon:({color, focused}) => (<Icon type ={item.type} name={focused ? item.activeIcon : item.inActiveIcon} color={color}/>)
                }}
              />
            )
          })}
</Tab.Navigator>
      </NavigationContainer>
    </View></> 
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#66BB6A',
  },
});
