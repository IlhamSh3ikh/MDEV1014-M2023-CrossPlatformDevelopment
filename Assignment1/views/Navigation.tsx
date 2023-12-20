import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, TextInput, Image, Platform, ScrollView } from 'react-native';
import Icon, { Icons } from '../components/Icon';
import ColorScreen from '../screens/ColorScreen';
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import OrderHistoryScreen from './OrderHistory';
import CartScreen from './Cart';
import ProfileScreen from './Profile';
import Flex from './home/Home';

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
    activeIcon: 'home',
    inActiveIcon: 'home-outline',
    component: Flex,
  },
  {
    route: 'History',
    label: 'History',
    type: 'Ionicons',
    activeIcon: 'book',
    inActiveIcon: 'book-outline',
    component: OrderHistoryScreen,
  },
  {
    route: 'Cart',
    label: 'Cart',
    type: 'MaterialCommunityIcons',
    activeIcon: 'cart',
    inActiveIcon: 'cart-outline',
    component: CartScreen,
  },
  {
    route: 'Profile',
    label: 'Profile',
    type: 'FontAwesome5',
    activeIcon: 'user-alt',
    inActiveIcon: 'user',
    component: ProfileScreen,
  },
];
const Navigation = () => {
  return (
<Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#66BB6A', // Set the active tab icon color
        tabBarInactiveTintColor: 'gray', // Set the inactive tab icon color
        tabBarStyle: { backgroundColor: 'black' }, //Navigation bar background colour
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
  );};

export default Navigation;