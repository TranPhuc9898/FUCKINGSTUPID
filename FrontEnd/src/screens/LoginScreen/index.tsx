import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Box from 'components/box-view'
import TextInputLogin from 'components/text-input'
import { useSelector } from 'react-redux'
import AnimatedGradient from 'components/bloom-palette/Tweener'

import _ from 'lodash'

const LoginScreen = () => {
  const backgroundColor = useSelector((state: any) => state.color.color)

  const isActive = _.isEmpty(backgroundColor) ? '253,200,220' : backgroundColor
  //useState
  const [phoneNumber, setPhoneNumber] = useState<any>('')
  const [phoneNumber2, setPhoneNumber2] = useState<any>('')
  //useRef
  const phoneNumberRef = useRef(null)
  const phoneNumberRef2 = useRef(null)

  useEffect(() => {
    phoneNumberRef?.current?.focus()
    phoneNumberRef2?.current?.focus()
  }, [])
  return (
    <AnimatedGradient
      style={{ flex: 1 }}
      colors={[`rgba(${isActive}, 0.3)`, `rgb(${isActive})`]}
    >
      <Box flex center>
        <Text>{'hello'}</Text>
        <Box style={{ paddingHorizontal: 100, paddingTop: 20 }}>
          <TextInputLogin
            forwardedRef={phoneNumberRef}
            label={'CC'}
            placeholder={'ĐCMM'}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            color="black"
            validType="required"
            testID="TextInputPhone"
          />

          <TextInputLogin
            forwardedRef={phoneNumberRef2}
            label={'CCccc'}
            placeholder={'ĐCMMcccc'}
            value={phoneNumber2}
            onChangeText={setPhoneNumber2}
            color="black"
            validType="required"
            testID="TextInputPhone"
          />
        </Box>
      </Box>
    </AnimatedGradient>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})
