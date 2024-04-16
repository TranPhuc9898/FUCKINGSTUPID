// import {
//   useSharedValue,
//   useAnimatedScrollHandler,
//   runOnJS,
// } from 'react-native-reanimated';
// import {useDispatch} from 'react-redux';
// import {setTabBarTranslateY} from '../redux/reducers/tabBarSlice'; // Cập nhật đường dẫn đến slice của bạn

// const useTabBarAnimation = () => {
//   const dispatch = useDispatch();

//   //   const handleSetTabBarVisible = (isVisible: any) => {
//   //     dispatch(setTabBarVisible(isVisible));
//   //   };

//   //   const scrollY = useSharedValue(0);

//   const scrollHandler = useAnimatedScrollHandler({
//     onScroll: event => {
//       const translateY = event.contentOffset.y > 100 ? 100 : 0; // Điều chỉnh giá trị này theo nhu cầu
//       runOnJS(dispatch)(setTabBarTranslateY(translateY));
//     },
//   });

//   return {scrollHandler};
// };

// export default useTabBarAnimation;

import {useAnimatedScrollHandler, runOnJS} from 'react-native-reanimated';
import {useDispatch} from 'react-redux';
import {setTabBarTranslateY} from '../../redux/reducers/tabBarSlice'; // Đảm bảo đường dẫn đến slice của bạn chính xác

const useTabBarAnimation = () => {
  const dispatch = useDispatch();

  // Định nghĩa hàm thực thi trên UI thread để tránh lỗi.
  const dispatchSetTabBarTranslateY = (translateY: any) => {
    dispatch(setTabBarTranslateY(translateY));
  };

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      const translateY = event.contentOffset.y > 1 ? 100 : 0; // Điều chỉnh giá trị này theo nhu cầu của bạn
      // Sử dụng runOnJS để gọi hàm dispatchSetTabBarTranslateY một cách an toàn từ bên trong worklet.
      runOnJS(dispatchSetTabBarTranslateY)(translateY);
    },
  });

  return {scrollHandler};
};

export default useTabBarAnimation;
