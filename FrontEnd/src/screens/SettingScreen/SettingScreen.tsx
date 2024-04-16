import {StyleSheet, Text, View} from 'react-native';
import * as React from 'react';
import BloomColorPalette from 'components/bloom-palette/BloomColorPalette';


const SettingScreen = () => {
  return (
    <View style={styles.containerBox}>
      <BloomColorPalette />
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  containerBox: {
    flex: 1,
  },
});
