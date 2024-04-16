import * as React from 'react';
import {View, Text} from 'react-native';
// import {Icon} from 'react-native-eva-icons';
// import {bTaskee} from '../themes/color';

interface Props {
  name: any;
  isCurrent?: boolean;
}

export const BottomMenuItem: React.FC<Props> = ({name, isCurrent}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <View style={{}}>
        <Text
          style={{
            color: isCurrent ? '#673ab7' : '#50555C',
            textAlign: 'center',
          }}>
          {name.toString()}
        </Text>
      </View>
    </View>
  );
};
