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
import Collections from '../Screens/Collections';
import Login from '../Screens/Login';
import HeaderTab from '../components/HeaderTab';
import {useDispatch, useSelector} from 'react-redux';
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
            return <Ionicons name={iconName} size={25} color={color} />;
          } else if (route.name === 'Order') {
            iconName = focused ? 'reader' : 'reader-outline';
            color = focused ? 'red' : '#6E6E6E';
            return <Ionicons name={iconName} size={25} color={color} />;
          } else if (route.name === 'Saved') {
            iconName = focused ? 'heart' : 'hearto';
            color = focused ? 'red' : '#6E6E6E';
            return <AntDesign name={iconName} size={25} color={color} />;
          } else if (route.name === 'Notification') {
            iconName = focused ? 'notifications' : 'notifications-outline';
            color = focused ? 'red' : '#6E6E6E';
            return <Ionicons name={iconName} size={25} color={color} />;
          } else if (route.name === 'Me') {
            iconName = focused ? 'person' : 'person-outline';
            color = focused ? 'red' : '#6E6E6E';
            return <Ionicons name={iconName} size={25} color={color} />;
          }
        },

        tabBarLabel: ({focused}) => {
          let lable;
          switch (route.name) {
            case 'Home':
              return (lable = <Text style={styles.textactive}>Home</Text>);
            case 'Order':
              return (lable = <Text style={styles.textactive}>????n h??ng</Text>);
            case 'Saved':
              return (lable = <Text style={styles.textactive}>???? l??u</Text>);
            case 'Notification':
              return (lable = <Text style={styles.textactive}>Th??ng b??o</Text>);
            case 'Me':
              return (lable = <Text style={styles.textactive}>T??i</Text>);
          }
        },
      })}
      tabBarOptions={{
        style: {height: 50},
      }}>
      <Bottom.Screen name="Home" component={Home} />
      <Bottom.Screen name="Order" component={Order} />
      <Bottom.Screen name="Saved" component={Saved} />
      <Bottom.Screen name="Notification" component={Notification} />
      <Bottom.Screen name="Me" component={Me} />
    </Bottom.Navigator>
  );
};
const HomeTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BottomTab"
        component={BottomTab}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Product"
        component={Product}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProductDescribe"
        component={ProductDescribe}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Collections"
        component={Collections}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerTitle: '????ng nh???p v?? ????ng k??',
          headerStyle: {height: 50, backgroundColor: '#FAFAFA'},
        }}
      />
    </Stack.Navigator>
  );
};
const AppStack = () => {
  const token = useSelector(store => store.userInfo.token);
  return (
    <NavigationContainer>{token ? HomeTab() : AuthStack()}</NavigationContainer>
  );
};

export default AppStack;

const styles = StyleSheet.create({
  textactive: {
    color: '#585858',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 0,
    marginBottom: 2,
  },
});
