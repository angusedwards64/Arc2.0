// eslint-disable-next-line no-use-before-define
import React from 'react'
import { View, Image } from 'react-native'

export default function Logo () {
  return (
    <View>
      <Image source={require('../assets/logohq.png')} />
    </View>
  )
}
