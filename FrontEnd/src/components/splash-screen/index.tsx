import LottieView from 'lottie-react-native';
import React, {useEffect} from 'react';

const SplashScreen: React.FC<{navigation: any}> = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('HomeScreen'); // Thay 'HomeScreen' bằng tên screen bạn muốn chuyển đến
    }, 5000); // Thời gian hiển thị splash screen là 3 giây
  }, [navigation]);

  return (
    <LottieView
      source={require('../../assets/image/hello123.json')}
      style={{width: '100%', height: '100%'}}
      autoPlay
      loop={false}
    />
  );
};

export default SplashScreen;

// const styles = StyleSheet.create({});
