import * as React from 'react';
import {Text, TextProps, StyleSheet} from 'react-native';

/**
 * Tạo type props cho WriteText bằng cách kế thừa TextProps từ React Native
 * Chỉ thêm fontFamily SpaceMono-Regular
 * @component
 */

type WriteTextProps = TextProps & {
  children: React.ReactNode;
};

const WriteText: React.FC<WriteTextProps> = props => {
  // Kết hợp các props được truyền vào với style mặc định
  return (
    <Text {...props} style={[styles.text, props.style]}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'SpaceMono-Regular', // Đặt font mặc định là SpaceMono-Regular
  },
});

export default WriteText;
