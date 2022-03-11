// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { drinkStyles as styles } from '../styles'

export default function DrinksScreen (props: any) {
  const navigation = useNavigation()

  const [drinksUsers, setDrinksUsers]: any[] = useState([])

  function updateDrinksUsers (email: any) {
    setDrinksUsers((oldUsers: any) => [...oldUsers, email])
  }

  const DrinksUserList = props.route.params.eventUsers.map((user: any) => {
    return <View key={user.email} style={drinksUsers.includes(user) ? styles.buttonClick : styles.buttonUnclick}>
      <Button
        color={drinksUsers.includes(user) ? 'rgb(35,35,35)' : 'rgb(150,150,150)'}
        title={user.firstName + ' ' + user.lastName}
        onPress={() => {
          updateDrinksUsers(user)
        }} />
    </View>
  }
  )

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Who Drank?
      </Text>
      {DrinksUserList}
      <View style={styles.buttonContainer}>
        <Button color="white"
          title="SELECT FRIENDS"
          onPress={() => {
            props.route.params.updateDrinksUsers(drinksUsers)
            navigation.navigate('NewArcScreen')
          }}/>
      </View>
    </View>
  )
}
