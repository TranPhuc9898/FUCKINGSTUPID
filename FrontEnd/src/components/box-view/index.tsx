import { View, ViewProps, StyleSheet, ViewStyle } from 'react-native'
import { spacing } from 'theme'


interface IBox extends ViewProps {

  /**
   * flexDirection: "row"
   */
  row?: boolean
  /**
   * justifyContent: "space-between"
   */
  between?: boolean
  /**
   * alignItems: "center",
   * justifyContent: "center"
   */
  center?: boolean
  /**
   * alignItems: "center",
   */
  alignCenter?: boolean
  flex?: boolean
  justifyContentCenter?: boolean
}

/**
 * Sử dụng để gom nhóm nhanh các component con
 * #### props:
 * - margin: "s": 5 | "m": 10 | "l": 15 | "xl": 20 | "xxl": 25 | "xxxl": 30
 * - padding: "s": 5 | "m": 10 | "l": 15 | "xl": 20 | "xxl": 25 | "xxxl": 30
 * - row: boolean
 * - between: boolean
 * - center: boolean
 * - justifyContentCenter: boolean;
 * - Các thuộc tính của View
 */
const Box: React.FunctionComponent<IBox> = ({

  row,
  style,
  between,
  center,
  alignCenter,
  flex,
  justifyContentCenter,
  ...other
}) => {
  let customStyle: ViewStyle = {} // Sử dụng ViewStyle ở đây
  if (row) {
    customStyle.flexDirection = 'row'
    customStyle.flexWrap = 'wrap'
  }

  if (between) {
    customStyle.justifyContent = 'space-between'
  }

  if (center) {
    customStyle.alignItems = 'center'
    customStyle.justifyContent = 'center'
  }

  if (alignCenter) {
    customStyle.alignItems = 'center'
  }

  if (justifyContentCenter) {
    customStyle.justifyContent = 'center'
  }

  if (flex) {
    customStyle.flex = 1
  }

  return (
    <View {...other} style={[customStyle, style]}>
      {other.children}
    </View>
  )
}

export default Box

const styles = StyleSheet.create({})
