import {Dimensions, StyleSheet, Text, View, ViewStyle} from 'react-native';
import * as React from 'react';

// Width Height Demensions
const witdh = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

// Định nghĩa Interface cho props của FindBar, bao gồm style
interface IFindBarProps {
  style?: ViewStyle;
  data?: any // Sử dụng ViewStyle từ React Native
}

const FindBar: React.FC<IFindBarProps> = ({style,data}) => {
  return (
    <View style={[styles.containerFindBar]}>
      <View style={styles.viewText}>
        <View style={styles.textContainer}>
          <Text>{data?.location?.name}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text>{data?.current?.temp_c}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text>{data?.current?.condition.text}</Text>
        </View>
      </View>
    </View>
  );
};

export default FindBar;

const styles = StyleSheet.create({
  containerFindBar: {
    backgroundColor: 'red',
    // width: witdh / 1,
    height: height / 8,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    borderRadius: 15,
    justifyContent: 'center',
  },
  viewText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
  },
});
