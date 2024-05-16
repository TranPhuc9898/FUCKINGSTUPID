import Box from 'components/box-view'
import { StyleSheet, TextInput } from 'react-native'

interface ITextInputWithPhoneNumber {}

const TextInputLogin: React.FunctionComponent<
  ITextInputWithPhoneNumber
> = props => {
  return (
    <Box row>
      <TextInput maxLength={12} {...props} />
    </Box>
  )
}

const styles = StyleSheet.create({
  boxPhoneCode: {
    // borderRadius: borderRadius.s,    
    // borderWidth: 1,
    // borderColor: colors.black,
    // paddingHorizontal: spacing.m,
    paddingLeft: 10,
    alignContent: 'center',
    height: 40
    // backgroundColor: 'blue'
  },
  txtPhoneCode: {
    color: '#000',
    alignSelf: 'center',
    marginLeft: 5,
    fontWeight: '400',
    fontSize: 15
  }
})

export default TextInputLogin
