import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Home from '../Screens/Home';
import Order from '../Screens/order';
import Saved from '../Screens/saved';
import Notification from '../Screens/Notification';
import Me from '../Screens/Me';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Product from '../Screens/Product';
import Detail from '../Screens/Detail';
import NearMe from '../components/nearMe';
import ProductDescribe from '../Screens/ProductDescribe';

const Bottom = createBottomTabNavigator();
const Stack = createStackNavigator();

const BottomTab = () => {
  return (
    <Bottom.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let iconName;
          let color;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
            color = focused ? 'red' : '#6E6E6E';
            return <Ionicons name={iconName} size={30} color={color} />;
          } else if (route.name === 'Order') {
            iconName = focused ? 'reader' : 'reader-outline';
            color = focused ? 'red' : '#6E6E6E';
            return <Ionicons name={iconName} size={30} color={color} />;
          } else if (route.name === 'Saved') {
            iconName = focused ? 'heart' : 'hearto';
            color = focused ? 'red' : '#6E6E6E';
            return <AntDesign name={iconName} size={30} color={color} />;
          } else if (route.name === 'Notification') {
            iconName = focused ? 'notifications' : 'notifications-outline';
            color = focused ? 'red' : '#6E6E6E';
            return <Ionicons name={iconName} size={30} color={color} />;
          } else if (route.name === 'Me') {
            iconName = focused ? 'person' : 'person-outline';
            color = focused ? 'red' : '#6E6E6E';
            return <Ionicons name={iconName} size={30} color={color} />;
          }
        },

        tabBarLabel: ({focused}) => {
          let lable;
          switch (route.name) {
            case 'Home':
              return (lable = <Text style={styles.textactive}>Home</Text>);
            case 'Order':
              return (lable = <Text style={styles.textactive}>Đơn hàng</Text>);
            case 'Saved':
              return (lable = <Text style={styles.textactive}>Đã lưu</Text>);
            case 'Notification':
              return (lable = <Text style={styles.textactive}>Thông báo</Text>);
            case 'Me':
              return (lable = <Text style={styles.textactive}>Tôi</Text>);
          }
        },
      })}
      tabBarOptions={{
        style: {height: 60},
      }}>
      <Bottom.Screen name="Home" component={Home} />
      <Bottom.Screen name="Order" component={Order} />
      <Bottom.Screen name="Saved" component={Saved} />
      <Bottom.Screen name="Notification" component={Notification} />
      <Bottom.Screen name="Me" component={Me} />
    </Bottom.Navigator>
  );
};

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="BottomTab" component={BottomTab} />
        <Stack.Screen name="Product" component={Product} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="ProductDescribe" component={ProductDescribe} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;

const styles = StyleSheet.create({
  textactive: {
    color: '#585858',
    fontSize: 13,
    textAlign: 'center',
    marginTop: 0,
    marginBottom: 2,
  },
});
