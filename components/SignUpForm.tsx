import React, { useState, useEffect } from 'react'
import { Text, StyleSheet, View, TextInput, Button } from 'react-native'
import { useForm, Controller } from 'react-hook-form'
import ApiService from '../ApiService'
import { signUpStyles as styles } from '../styles'

interface SignUpFormProps {
  setUser: React.Dispatch<React.SetStateAction<string>>
}

export default function SignUpForm ({ setUser } : SignUpFormProps) {
  const { control, formState: { errors } } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }
  })

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = function () {
    const newUser = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    }
    ApiService.createUser(newUser)
    setUser(email)
  }

  function onChangeFirst (arg : string) {
    setFirstName(arg)
  };
  function onChangeLast (arg : string) {
    setLastName(arg)
  };
  function onChangeEmail (arg : string) {
    setEmail(arg)
  };
  function onChangePassword (arg : string) {
    setPassword(arg)
  };

  return (
    <View style={styles.container}>
      <Text style={styles.signup}>Sign Up</Text>
      <Text style={styles.label}>First name</Text>
      <Controller
        control={control}
        render={({ field: { value } }) => (
          <TextInput
            style={styles.input}
            onChangeText={value => onChangeFirst(value)}
            value={firstName}
          />
        )}
        name="firstName"
        rules={{ required: true }}
      />
      <Text style={styles.label}>Last name</Text>
      <Controller
        control={control}
        render={({ field: { value } }) => (
          <TextInput
            style={styles.input}
            onChangeText={value => onChangeLast(value)}
            value={lastName}
          />
        )}
        name="lastName"
        rules={{ required: true }}
      />
      <Text style={styles.label}>Email</Text>
      <Controller
        control={control}
        render={({ field: { value } }) => (
          <TextInput
            style={styles.input}
            onChangeText={value => onChangeEmail(value)}
            value={email}
          />
        )}
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
