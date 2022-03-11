/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react'
import { View, Text, Button, StyleSheet, Image, ScrollView } from 'react-native'
import ApiService from '../ApiService'
import { useNavigation } from '@react-navigation/native'
import { FontAwesome, Entypo } from '@expo/vector-icons'
import { singleEventStyles as styles } from '../styles'

export default function SingleEventScreen(props: any) {
  const navigation = useNavigation()

  const [event, setEvent] = useState<any[]>([])
  const [eventUsers, setEventUsers] = useState<any[]>([])
  const [paid, setPaid] = useState(false)
  const [creator, setCreator] = useState('')

  useEffect(() => {
    const currentEvent = { event: props.route.params.eventId }
    ApiService.getEvent(currentEvent)
      .then(events => {
        setEvent(events)
        return events
      })
      .then(event => setCreator(event[0].creator))
  }, []
  )

  useEffect(() => {
    const currentEvent = { event: props.route.params.eventId }
    ApiService.getEvent(currentEvent)
      .then(answer => setPaid(answer[0].arcsPaid[props.route.params.user]))
  }, [paid]
  )

  useEffect(() => {
    const currentEvent = { event: props.route.params.eventId }
    ApiService.getEvent(currentEvent)
      .then(users => {
        return users
      })
      .then((users) => setEventUsers(users[0].arcNameArray.map(a => [a.firstName, a.lastName, a.email])))
  }, []
  )

  function payNow(event: any, user: any) {
    ApiService.updatePayment(event, user)
    setPaid(true)
  }

  const details = event.map((event) => {
    return <View key={event._id}>
      <View style={styles.header}>
        <Text style={styles.title}>{event.eventName}</Text>
        <Image style={styles.logo} source={require('../assets/logohq.png')} />
      </View>
      <Text style={styles.date}>{event.date}</Text>
      <Text style={styles.venue}>{event.venue}</Text>
      <View style={styles.totalCostWrapper}>
        <Text style={styles.totalCost}>£{event.totalCost}</Text>
        <Text style={styles.totalCostBlurb}>Total Bill</Text>
      </View>
      <View style={styles.foodCostWrapper}>
        <Text style={styles.foodCost}>£{event.foodCost}</Text>
        <Text style={styles.foodCostBlurb}>Food Bill</Text>
      </View>
      <View style={styles.foodCostWrapper}>
        <Text style={styles.foodCost}>£{event.drinksCost}</Text>
        <Text style={styles.drinkCostBlurb}>Drinks Bill</Text>
      </View>
    </View>
  })

  const myArc = eventUsers.filter(a => a[2] === props.route.params.user).map((user: any, i) => {
    return <View style={styles.me} key={user[2]}>
      <Text style={styles.textMe}>You {event[0].arcsPaid[user[2]] ? 'paid' : 'owe'} £{event[0].arcs[user[2]].toFixed(2)}</Text>
      <Text style={styles.textBlurbMe}>for {event[0].arcItems[props.route.params.user].length === 2 ? 'Food and Drink' : event[0].arcItems[props.route.params.user] === 'F' ? 'Food Only' : 'Drinks only'}</Text>
      <View>
      </View>
      <View style={paid ? styles.payNowButtonClicked : styles.payNowButton}>
        <Button
          color='black'
          title={paid ? 'Paid!' : 'Pay Now'}
          onPress={() => {
            payNow(event[0]._id, props.route.params.user)
          }} />
      </View>
    </View>
  })

  const friendsArc = eventUsers.filter(a => a[2] !== props.route.params.user).map((user: any, i) => {
    return <View style={styles.othersWrapper} key={user[2]}>
      <View style={styles.othersTextContent}>
        <Text style={styles.othersBill}>{event[0].arcFirstNames[user[2]] + ' ' + user[1]} {event[0].arcsPaid[user[2]] ? 'paid' : 'owes'} £{event[0].arcs[user[2]].toFixed(2)}</Text>
        <Text style={styles.othersBlurb}>for {event[0].arcItems[user[2]].length === 2 ? 'Food and Drink' : event[0].arcItems[user[2]] === 'F' ? 'Food' : 'Drinks'}</Text>
      </View>
      {event[0].arcItems[user[2]].length === 2
        ? <View style={styles.icons}>
          <FontAwesome name="cutlery" size={24} color="white" />
          <Entypo name="drink" size={24} color="white" style={styles.icon} />
        </View>
        : event[0].arcItems[user[2]] === 'F'
          ? <View style={styles.icons}>
            <FontAwesome name="cutlery" size={24} color="white" />
          </View>
          : <View style={styles.icons}>
            <Entypo name="drink" size={24} color="white" style={styles.icon} />
          </View>
      }
    </View>
  })

  return (
    <ScrollView>
      <View style={styles.container}>
        {details}
        {props.route.params.user === creator ? <Text style={styles.creator}>Your Event!</Text> : myArc}
        {friendsArc || 'undefined'}
        <View style={styles.buttonBack}>
          <Button color='white'
            title='Back to Events'
            onPress={() => {
              navigation.goBack()
            }} />
        </View>

      </View>
    </ScrollView>
  )
}
