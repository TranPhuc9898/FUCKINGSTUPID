import { Dimensions, StyleSheet, Text, View, ViewStyle } from 'react-native'
import * as React from 'react'
import LottieView from 'lottie-react-native'
import { BlurView } from '@react-native-community/blur'
import { useEffect, useState } from 'react'
import { fetchWeatherForecast } from 'api/weather'
import { useSelector } from 'react-redux'

const witdh = Dimensions.get('window').width
const height = Dimensions.get('window').height

interface IFindBarProps {
  style?: ViewStyle
  data?: any
}

const FindBar: React.FC<IFindBarProps> = ({ style }) => {
  const [data, setData] = useState<any>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | any>(null)

  const DAY_OF_WEEK = 7

  const fetchApiWeather = async () => {
    setIsLoading(true)
    try {
      const weatherData = await fetchWeatherForecast({
        cityName: 'SaiGon',
        days: DAY_OF_WEEK
      });
      if (weatherData) {
        setData(weatherData);
      } else {
        console.error('Data không tồn tại hoặc không có thuộc tính uri');
      }
    } catch (error) {
      console.error('Lỗi khi gọi API:', error);
      setError(error);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    fetchApiWeather()
  },[])

  const backgroundColor = useSelector((state: any) => state.color.color);

  const getIconsEnviroment = (temp: any) => {
    console.log("🚀 ~ getIconsEnviroment ~ temp:", temp)
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

  const renderImage = (temp: any) => {
    const renderImageStable = getIconsEnviroment(temp)
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
    <>
      <BlurView
        style={styles.containerFindBar}
        blurType="light"
        blurAmount={10}
      >
        <View style={styles.viewText}>
          <View style={{ paddingTop: 15 }}>
            {data && data.current && data.current.temp_c &&
              renderImage(data.current.temp_c)
            }
          </View>
          <View style={{ justifyContent: 'center', flexDirection: 'column' }}>
            <View style={styles.textContainer}>
              <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#fff' }}>
                {data && data.current && data.current.temp_c ? `${data.current.temp_c}°C` : 'N/A'}
              </Text>
              <View style={{ alignItems: 'center' }}>
                <Text style={{ fontWeight: 'bold' }}>
                  {data && data.location && data.location.country}
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
    borderWidth: 0.5,
    borderColor: '#ffffff',
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
