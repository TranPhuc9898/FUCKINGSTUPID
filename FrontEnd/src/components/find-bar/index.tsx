import { Dimensions, StyleSheet, Text, View, ViewStyle } from 'react-native'
import * as React from 'react'
import LottieView from 'lottie-react-native'
import { getIcons } from 'constants/Helper'
import { BlurView, VibrancyView } from '@react-native-community/blur'
import { useEffect, useState } from 'react'
import { fetchWeatherForecast } from 'api/weather'
import { useSelector } from 'react-redux'

// Width Height Demensions
const witdh = Dimensions.get('window').width
const height = Dimensions.get('window').height

// Định nghĩa Interface cho props của FindBar, bao gồm style
interface IFindBarProps {
  style?: ViewStyle
  data?: any // Sử dụng ViewStyle từ React Native
}

const FindBar: React.FC<IFindBarProps> = ({ style }) => {
  const [data, setData] = useState<any>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)

  const DAY_OF_WEEK = 7
  // Call API
  const fetchApiWeather = async () => {
    setIsLoading(true)
    await fetchWeatherForecast({
      cityName: 'SaiGon',
      days: DAY_OF_WEEK
    }).then(data => {
      setData(data)
    })
    await setIsLoading(false)
  }

  useEffect(() => {
    fetchApiWeather()
  }, [])
  // Trong component của bạn




  //  REDUX

  const backgroundColor = useSelector((state: any) => state.color.color);

  const getIconsEnviroment = (temp: any) => {
    if (temp >= 30 && temp <= 60) {
      return require(`../../assets/image/hot.json`)
    }
    if (temp >= 20 && temp <= 25) {
      return require(`../../assets/image/rain.json`)
    }
    if (temp >= 26 && temp <= 32) {
      return require(`../../assets/image/sun.json`)
    }
  }

  // Render View Image
  const renderImage = (abc: any) => {
    const renderImageStable = getIconsEnviroment(abc)
    return (
      <View>
        <LottieView
          source={renderImageStable}
          style={{ width: 200, height: 150 }}
          autoPlay
          loop={true}
        />
      </View>
    )
  }

  return (
    // <View style={[styles.containerFindBar]}>

    // </View>
    <>
      <BlurView
        style={styles.containerFindBar}
        blurType="light" // Loại blur: light, dark, xlight,...
        blurAmount={10} // Độ mờ từ 1 đến 100
      >
        <View style={styles.viewText}>
          <View style={{ paddingTop: 15 }}>
            {renderImage(data?.current?.temp_c)}
          </View>
          <View style={{ justifyContent: 'center', flexDirection: 'column' }}>
            <View style={styles.textContainer}>
              <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#fff' }}>
                {data?.current?.temp_c ? `${data.current.temp_c}°C` : 'N/A'}
              </Text>
              <View style={{ alignItems: 'center' }}>
                <Text style={{ fontWeight: 'bold', color: '' }}>
                  {data?.location?.country}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </BlurView>
    </>
  )
}

export default FindBar

const styles = StyleSheet.create({
  containerFindBar: {
    borderWidth: 0.5, // Border width
    borderColor: '#ffffff', // Border color
    height: height / 6,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    borderRadius: 15,
    flex: 1
  },
  viewText: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textContainer: {
    paddingBottom: 60,
    paddingRight: 70
  }
})
