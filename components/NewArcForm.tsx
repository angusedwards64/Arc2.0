/* eslint-disable no-array-constructor */
import React, { useState, useEffect } from 'react'
import { Text, StyleSheet, View, TextInput, Button } from 'react-native'
import { useForm, Controller } from 'react-hook-form'
import ApiService from '../ApiService'
import CurrencyInput from 'react-native-currency-input'
import { useNavigation } from '@react-navigation/native'
import { newArcStyles as styles } from '../styles'

export default function NewArcForm (props: any) {
  const navigation = useNavigation()

  const { control, formState: { errors } } = useForm({
    defaultValues: {
      eventName: '',
      date: '',
      venue: '',
      foodCost: '',
      drinksCost: ''
    }
  })

  const [eventName, setEventName] = useState('')
  const [date, setDate] = useState('')
  const [venue, setVenue] = useState('')
  const [drinksCost, setDrinksCost] = useState(0)
  const [userList, setUserList] = useState([])
  const [eventUsers, setEventUsers] = useState(new Array())
  const [foodCost, setFoodCost] = useState(0)
  const [foodUsers, setFoodUsers] = useState(new Array())
  const [drinksUsers, setDrinksUsers] = useState(new Array())
  const [eventCreated, setEventCreated] = useState(false)

  useEffect(() => {
    ApiService.getUsers()
      .then(users => {
        return setUserList(users)
      })
    setEventCreated(false)
  }, []
  )

  const calculateArc = function () {
    const arcs: any = {}
    const arcMembers: any = {}
    const arcsPaid: any = {}
    const arcFirstNames: any = {}
    const arcItems: any = {}

    eventUsers.map(user => arcsPaid[user.email] = false)
    eventUsers.map(user => arcFirstNames[user.email] = user.firstName)

    const foodCostPerUser = Math.round((foodCost / foodUsers.length) * 100) / 100
    const drinkCostPerUser = Math.round((drinksCost / drinksUsers.length) * 100) / 100

    foodUsers.map(user => {
      if (drinksUsers.indexOf(user) === -1) {
        arcs[user.email] = foodCostPerUser
        arcItems[user.email] = 'F'
      } else {
        arcs[user.email] = foodCostPerUser + drinkCostPerUser
        arcItems[user.email] = 'FD'
      }
    })

    drinksUsers.map(user => {
      if ((foodUsers.indexOf(user) === -1)) {
        arcs[user.email] = drinkCostPerUser
        arcItems[user.email] = 'D'
      } else return
    })

    const newArc = {
      eventName: eventName,
      date: date,
      venue: venue,
      foodCost: foodCost,
      drinksCost: drinksCost,
      totalCost: foodCost + drinksCost,
      creator: props.user,
      arcMembers: arcMembers,
      arcs: arcs,
      arcsPaid: arcsPaid,
      arcItems: arcItems,
      arcFirstNames: arcFirstNames,
      arcNameArray: eventUsers
    }

    const savedEvent = ApiService.createEvent(newArc)
  }

  function onChangeEvent (arg: string) {
    setEventName(arg)
  };
  function onChangeDate (arg: string) {
    setDate(arg)
  };
  function onChangeVenue (arg: string) {
    setVenue(arg)
  };
  function onChangeFoodCost (arg: number) {
    setFoodCost(arg)
  };
  function onChangeDrinksCost (arg: number) {
    setDrinksCost(arg)
  };
  function updateEventUsers (arg: any) {
    setEventUsers([...eventUsers, ...arg])
  }
  function updateFoodUsers (arg: any) {
    setFoodUsers([...foodUsers, ...arg])
  }
  function updateDrinksUsers (arg: any) {
    setDrinksUsers([...drinksUsers, ...arg])
  }

  return (

    eventCreated
      ? (
        <View>
          <Text style={styles.created}>Event Created!</Text>
        </View>
      )
      : (
        <View style={styles.container}>
          <View style={styles.button}>
            <Button color="black"
              title="ADD FRIENDS"
              onPress={() => navigation.navigate('FriendsScreen', {
                userList: userList,
                updateEventUsers: updateEventUsers
              })}
            />
          </View>

          <Text style={styles.label}>Event Name</Text>
          <Controller
            control={control}
            render={({ field: { value } }) => (
              <TextInput
                style={styles.input}
                onChangeText={value => onChangeEvent(value)}
                value={eventName}
              />
            )}
            name="eventName"
            rules={{ required: true }}
          />
          <Text style={styles.label}>Date</Text>
          <Controller
            control={control}
            render={({ field: { value } }) => (
              <TextInput
                style={styles.input}
                onChangeText={value => onChangeDate(value)}
                value={date}
              />
            )}
            name="date"
            rules={{ required: true }}
          />
          <Text style={styles.label}>Venue</Text>
          <Controller
            control={control}
            render={({ field: { value } }) => (
              <TextInput
                style={styles.input}
                onChangeText={value => onChangeVenue(value)}
                value={venue}
              />
            )}
            name="venue"
            rules={{ required: true }}
          />
          <Text style={styles.label}>Food Cost</Text>
          <Controller
            control={control}
            render={({ field: { value } }) => (
              <CurrencyInput
                keyboardType='numeric'
                style={styles.input}
                onChangeValue={value => onChangeFoodCost(value)}
                prefix="£"
                delimiter=","
                separator="."
                precision={2}
                value={foodCost}
                onSubmitEditing={() => {
                  navigation.navigate('FoodScreen', {
                    foodCost: foodCost,
                    eventUsers: eventUsers,
                    updateFoodUsers: updateFoodUsers
                  })
                }}
              />
            )}
            name="foodCost"
            rules={{ required: true }}
          />
          <Text style={styles.label}>Drinks Cost</Text>
          <Controller
            control={control}
            render={({ field: { value } }) => (
              <CurrencyInput
                keyboardType='numeric'
                style={styles.input}
                onChangeValue={value => onChangeDrinksCost(value)}
                prefix="£"
                delimiter=","
                separator="."
                precision={2}
                value={drinksCost}
                onSubmitEditing={() => {
                  navigation.navigate('DrinksScreen', {
                    drinksCost: drinksCost,
                    eventUsers: eventUsers,
                    updateDrinksUsers: updateDrinksUsers
                  })
                }}
              />
            )}
            name="drinksCost"
            rules={{ required: true }}
          />
          <View style={styles.buttonBottom}>
            <Button color="black"
              title="CREATE ARC"
              onPress={() => {
                calculateArc()
                setEventCreated(true)
              }}
            />
          </View>
        </View>
      ))
}


