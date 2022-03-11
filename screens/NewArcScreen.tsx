/* eslint-disable no-use-before-define */
import React from 'react'
import { View, StyleSheet, Image, ScrollView } from 'react-native'
import NewArcForm from '../components/NewArcForm'
import { newArcScreenStyles as styles } from '../styles'

export default function NewArcScreen (props: any) {
  return (

    <ScrollView>
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../assets/logohq.png')} />
        <NewArcForm user={props.route.params.user} />
      </View>
    </ScrollView>
  )
}
