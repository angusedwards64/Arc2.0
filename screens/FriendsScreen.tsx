/* eslint-disable no-use-before-define */
import React, { useState } from 'react'
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { friendStyles as styles } from '../styles'

export default function FriendsScreen (props: any) {
  const navigation = useNavigation()

  const [selectedUsers, setSelectedUsers]: any[] = useState([])

  const userList = props.route.params.userList.map((user: any) => {
    return <View key={user.email} style={selectedUsers.includes(user) ? styles.buttonClick : styles.buttonUnclick}>
      <Button
        color={selectedUsers.includes(user) ? 'rgb(35,35,35)' : 'rgb(150,150,150)'}
        title={user.firstName + ' ' + user.lastName}
        onPress={() => {
          registerAttendee(user)
        } } />
    </View>
  })

  function registerAttendee (email: any) {
    setSelectedUsers((oldUsers: any) => [...oldUsers, email])
  }

  return (
    <ScrollView>

      <View style={styles.container}>
        <Text style={styles.header}>Add Friends to Arc</Text>
        {userList}
        <View style={styles.buttonContainer}>

          <Button color="white"
            title="ADD FRIENDS"
            onPress={() => {
              props.route.params.updateEventUsers(selectedUsers)
              navigation.navigate('NewArcScreen')
            }
            }
          />
        </View>
      </View>
    </ScrollView>
  )
}
