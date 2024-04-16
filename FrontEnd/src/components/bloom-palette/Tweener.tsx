import React, {useState, useEffect, useRef} from 'react';
import {StyleSheet, Animated, StyleProp, ViewStyle} from 'react-native';
import GradientHelper from './GradientHelper';

const AnimatedGradientHelper = Animated.createAnimatedComponent(GradientHelper);

interface Props {
  style: StyleProp<ViewStyle>;
  colors: string[];
  children: React.ReactNode;
}

const AnimatedGradient = ({style, colors, children}: Props) => {
  const [prevColors, setPrevColors] = useState(colors);
  const tweener = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    setPrevColors(colors);
    tweener.setValue(0); // Reset the animation value
    Animated.timing(tweener, {
      toValue: 1,
      useNativeDriver: false,
    }).start();
  }, [colors, tweener]);

  const color1Interp = tweener.interpolate({
    inputRange: [0, 1],
    outputRange: [prevColors[0], colors[0]],
  });

  const color2Interp = tweener.interpolate({
    inputRange: [0, 1],
    outputRange: [prevColors[1], colors[1]],
  });

  return (
    <AnimatedGradientHelper
      style={style || styles.component}
      color1={color1Interp}
      color2={color2Interp}>
      {children}
    </AnimatedGradientHelper>
  );
};

const styles = StyleSheet.create({
  component: {
    flex: 1,
  },
});

export default AnimatedGradient;
