import * as React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
  style?: StyleProp<ViewStyle>;
  color1: string;
  color2: string;
  start?: {x: number; y: number};
  end?: {x: number; y: number};
  children?: React.ReactNode;
}

const GradientHelper = ({
  style,
  color1,
  color2,
  start = {x: 0, y: 0},
  end = {x: 0, y: 1},
  children,
}: Props) => {
  return (
    <LinearGradient
      colors={[color1, color2]}
      start={start}
      end={end}
      style={style}>
      {children}
    </LinearGradient>
  );
};

export default GradientHelper;
