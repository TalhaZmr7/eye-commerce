import React,{Component} from 'react';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Home from './pages/Home';
import SettingScreen from './pages/SettingScreen';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

const MainTabs = createBottomTabNavigator(
  {
    Home: Home,
    Settings: SettingScreen,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = 'home';
        } else if (routeName === 'Signup') {
          iconName = 'home';}

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      showLabel: true,
      activeTintColor: '#8ca0b8',
      inactiveTintColor: '#8ca0b8',
      style: {
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.8,
        elevation: 20,
        shadowRadius: 15,
        borderTopWidth: 0,
        //marginTop: -50,
      },
    },
  },
);
const AuthStack = createStackNavigator(
  {
    Login: Signin,
    Register: Signup
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  },
  {
    mode: 'card',
    transitionConfig: () => StackViewTransitionConfigs.SlideFromRightIOS,
  },
);
const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Auth: AuthStack,
      Tabs: MainTabs,      
    },
    {
      initialRouteName: 'Auth',
    },
  ),
);
export default Routes;
