/* eslint-disable no-use-before-define */
import React from 'react'
import { View, StyleSheet, Image, ScrollView } from 'react-native'
import SignUpForm from '../components/SignUpForm'

interface SignUpScreenProps {
  setUser: React.Dispatch<React.SetStateAction<string>>
}

export default function SignUpScreen ({ setUser } : SignUpScreenProps) {
  const styles = StyleSheet.create({
    logo: {
      width: 300,
      height: 300,
      top: 20
    }
  })

  return (
    <ScrollView>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', backgroundColor: 'rgb(20,20,30)' }}>
        <Image style={styles.logo} source={require('../assets/logohq.png')}
        />
        <SignUpForm setUser={setUser}/>
      </View>
    </ScrollView>
  )
}
