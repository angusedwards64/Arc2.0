import React, { useState } from 'react'
import { Text, StyleSheet, View, TextInput, Button } from 'react-native'
import { useForm, Controller } from 'react-hook-form'
import { loginFormStyles as styles } from '../styles'

interface LoginInProps {
  setUser: React.Dispatch<React.SetStateAction<string>>
}

export default function LoginInForm ({ setUser }: LoginInProps) {
  const { control } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }
  })

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function onSubmit () {
    setUser(email)
  }

  function onChangeEmail (arg: string) {
    setEmail(arg)
  };

  function onChangePassword (arg: string) {
    setPassword(arg)
  };

  return (
    <View style={styles.container}>
      <Text style={styles.signup}>Sign In</Text>
      <Text style={styles.label}>Email</Text>
      <Controller
        control={control}
        render={({ field: { value } }) => (
          <TextInput
            style={styles.input}
            onChangeText={value => onChangeEmail(value)}
            value={email}
          />)}
        name="email"
        rules={{ required: true }}
      />
      <Text style={styles.label}>Password</Text>
      <Controller
        control={control}
        render={({ field: { value } }) => (
          <TextInput
            secureTextEntry={true}
            style={styles.input}
            onChangeText={value => onChangePassword(value)}
            value={password}
          />
        )}
        name="password"
        rules={{ required: true }}
      />
      <View style={styles.button}>
        <Button color="black"
          title="S U B M I T"
          onPress={() => { onSubmit() }}
        />
      </View>
    </View>
  )
}
