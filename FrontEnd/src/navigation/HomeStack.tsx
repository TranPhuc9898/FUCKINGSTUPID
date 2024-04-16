// HomeStack.tsx
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import SettingScreen from '../screens/SettingScreen/SettingScreen';
// import {useSelector} from 'react-redux';
import CustomTabBar from './tabBarNavigation/CustomTabBar';

const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
  // const isTabBarVisible = useSelector((state: any) => state.tabBar.isVisible); // Giả sử tabBar.isVisible là trạng thái quản lý hiển thị của bottomTabBar

  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      // screenOptions={{
      //   tabBarStyle: {display: isTabBarVisible ? 'flex' : 'none'}, // Sử dụng trạng thái để ẩn hoặc hiện tabBar
      // }}>
      tabBar={(props: BottomTabBarProps) => <CustomTabBar {...props} />}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={{headerShown: false, tabBarLabel: 'Settings'}}
      />
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;
