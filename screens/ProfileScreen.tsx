/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react'
import { Button, View, Text, Image, StyleSheet } from 'react-native'
import ApiService from '../ApiService'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { profileStyles as styles } from '../styles'

type LoginScreentypes = {
  NewArcScreen: undefined;
};

interface ProfileScreenProps {
  user: string
  setUser: React.Dispatch<React.SetStateAction<string>>
}

interface ProfileType {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
}

export default function ProfileScreen ({ user, setUser }: ProfileScreenProps) {
  const navigation = useNavigation<StackNavigationProp<LoginScreentypes>>()

  const [profile, setProfile] = useState<ProfileType | undefined>(undefined)

  useEffect(() => {
    ApiService.getUser(user)
      .then(user => setProfile(user))
  }, []
  )

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', backgroundColor: 'rgb(20,20,30)' }}>
      <Image style={styles.logo} source={require('../assets/logohq.png')}
      />
      <Text style={styles.header}>Hi {(profile) ? profile.firstName : 'User 1'}!</Text>
      <View style={styles.buttonCreate}>
        <Button
          color="black"
          title="NEW ARC"
          onPress={() => navigation.navigate('NewArcScreen')}
        />
      </View>
      <View style={styles.details}>
        <Text style={styles.text}>Name: {(profile) ? profile.firstName + ' ' + profile.lastName : 'User 1'}</Text>
        <Text style={styles.text}>Email: {(profile) ? profile.email : 'User 1'}</Text>
      </View>
      <View style={styles.buttonEdit}>
        <Button color="white"
          title="EDIT DETAILS"
          onPress={() => { }}
        />
      </View>
      <View style={styles.buttonLogout}>
        <Button color="white"
          title="LOGOUT"
          onPress={() => setUser('')}
        />
      </View>
    </View>

  )
}
