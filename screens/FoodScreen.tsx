import React, { useState } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { foodStyles as styles } from '../styles'

export default function FoodScreen (props: any) {
  const navigation = useNavigation()

  const [foodUsers, setFoodUsers]: any[] = useState([])

  function updateFoodUsers (email: any) {
    setFoodUsers((oldUsers: any) => [...oldUsers, email])
  }

  const foodUserList = props.route.params.eventUsers.map((user: any) => {
    return <View key={user.email} style={foodUsers.includes(user) ? styles.buttonClick : styles.buttonUnclick}>
      <Button
        color={foodUsers.includes(user) ? 'rgb(35,35,35)' : 'rgb(150,150,150)'}
        title={user.firstName + ' ' + user.lastName}
        onPress={() => {
          updateFoodUsers(user)
        } } />
    </View>
  }
  )

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
      Who Ate?
      </Text>
      {foodUserList}
      <View style={styles.buttonContainer}>
        <Button color="white"
          title="SELECT FRIENDS"
          onPress={() => {
            props.route.params.updateFoodUsers(foodUsers)
            navigation.navigate('NewArcScreen')
          }}/>
      </View>
    </View>
  )
}

