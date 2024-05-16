import * as React from 'react'
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
  TouchableOpacity
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import AnimatedGradient from '../../components/bloom-palette/Tweener'
import _ from 'lodash'
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue
} from 'react-native-reanimated'
import useTabBarAnimation from '../../navigation/tabBarNavigation/useTabBarAnimation'
import WriteText from '../../components/write-text'
import FindBar from '../../components/find-bar'

import { useEffect, useState } from 'react'
import { fetchWeatherForecast } from 'api/weather'
import Box from 'components/box-view'
const windowDimensions = Dimensions.get('screen')
const screenWidth = windowDimensions.width
const screenHeight = windowDimensions.height

const HomeScreen = () => {
  const navigation = useNavigation()
  const backgroundColor = useSelector((state: any) => state.color.color)

  const isActive = _.isEmpty(backgroundColor) ? '253,200,220' : backgroundColor

  const { scrollHandler } = useTabBarAnimation()
  const data = [
    { id: '1', title: 'Item 1', description: 'Description of Item 1' }
  ]

  const Item = ({ title, description }: { title: any; description: any }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Text>{description}</Text>
    </View>
  )


  useEffect(()=>{
    console.log("hello world")
  },[])

  return (
    <AnimatedGradient
      style={styles.flex}
      colors={[`rgba(${isActive}, 0.3)`, `rgb(${isActive})`]}
    >
      {/* View: Header Avart + Notification */}
      <Animated.ScrollView
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        style={styles.flex}
      >
        {/* Header */}
        <View style={styles.viewFlex}>
          {/* View: Hello + Image + Name */}
          <View style={styles.viewText}>
            <View style={styles.container}>
              {/* <Image
                style={styles.image}
                source={{
                  uri: 'https://reactnative.dev/img/tiny_logo.png'
                }}
              /> */}
            </View>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                paddingLeft: 10
              }}
            >
              <View>
                <WriteText>Welcome</WriteText>
              </View>
              <View>
                <Text
                  style={{ fontWeight: 'bold', fontSize: 15, paddingTop: 10 }}
                >
                  Hi, Phúc
                </Text>
              </View>
            </View>
          </View>
        </View>
        {/* FindBar Temperature */}
        <View>
          <FindBar />
        </View>
        <Box>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('LoginScreen')
            }}
          >
            <Box center>
              <Text>{'cc'}</Text>
            </Box>
          </TouchableOpacity>
        </Box>
      </Animated.ScrollView>
    </AnimatedGradient>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  viewFlex: {
    marginTop: screenHeight / 15,
    marginLeft: 20
  },
  flex: {
    flex: 1
  },
  Home: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.3
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16
  },
  title: {
    fontSize: 32
  },
  container: {
    width: screenWidth / 8,
    height: screenWidth / 8,
    borderRadius: 10, // Sử dụng giá trị này để điều chỉnh góc bo tròn
    overflow: 'hidden' // Đảm bảo hình ảnh không vượt qua góc bo tròn của View
  },
  image: {
    width: '100%',
    height: '100%'
  },
  textWelcome: {
    paddingTop: 10,
    fontWeight: 'bold'
  },
  viewText: {
    flexDirection: 'row'
  }
})
