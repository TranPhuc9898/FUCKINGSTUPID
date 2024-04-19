import * as React from 'react';
import {
  Button,
  StatusBar,
  StyleSheet,
  View,
  FlatList,
  Text,
  SafeAreaView,
  Image,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import AnimatedGradient from '../../components/bloom-palette/Tweener';
import _ from 'lodash';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import useTabBarAnimation from '../../navigation/tabBarNavigation/useTabBarAnimation';
import WriteText from '../../components/write-text';
import FindBar from '../../components/find-bar';

import { useEffect, useState } from 'react';
import { fetchWeatherForecast } from 'api/weather';
const windowDimensions = Dimensions.get('screen');
const screenWidth = windowDimensions.width;
const screenHeight = windowDimensions.height;

const HomeScreen = () => {
  const navigation = useNavigation();
  const backgroundColor = useSelector((state: any) => state.color.color);

  const isActive = _.isEmpty(backgroundColor) ? '253,200,220' : backgroundColor;

  const {scrollHandler} = useTabBarAnimation();


  return (
    <AnimatedGradient
      style={styles.flex}
      colors={[`rgba(${isActive}, 0.3)`, `rgb(${isActive})`]}>
        
      {/* View: Header Avart + Notification */}
      <Animated.ScrollView
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        style={styles.flex}>
        {/* Header */}
        <View style={styles.viewFlex}>
          {/* View: Hello + Image + Name */}
          <View style={{flexDirection: 'row'}}>
            <View style={styles.container}>
              <Image
                style={styles.image}
                source={{
                  uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
              />
            </View>
            <View style={{paddingLeft: 15}}>
              <WriteText>Welcome</WriteText>
              <Text style={{fontWeight: 'bold', fontSize: 15, paddingTop: 10}}>
                Hi, Phúc
              </Text>
            </View>
          </View>
        </View>
        {/*
        <Button
          onPress={() => {
            navigation.navigate('SettingScreen');
          }}
          title="Press Me"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        /> */}

        {/* FindBar Temperature */}
        <View>
          <FindBar />
        </View>
      </Animated.ScrollView>
    </AnimatedGradient>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  viewFlex: {
    marginTop: screenHeight / 15,
    marginLeft: 20,
  },
  flex: {
    flex: 1,
  },
  Home: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.3,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  container: {
    width: screenWidth / 8,
    height: screenWidth / 8,
    borderRadius: 10, // Sử dụng giá trị này để điều chỉnh góc bo tròn
    overflow: 'hidden', // Đảm bảo hình ảnh không vượt qua góc bo tròn của View
  },
  image: {
    width: '100%',
    height: '100%',
  },
  textWelcome: {
    paddingTop: 10,
    fontWeight: 'bold',
  },
});
