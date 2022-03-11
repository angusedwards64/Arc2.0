import React, { useEffect, useState } from 'react'
import { View, Text, Button, StyleSheet, ScrollView, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import ApiService from '../ApiService'
import { eventListStyles as styles } from '../styles'

export default function EventListScreen (props: any) {
  const [myEvents, setMyEvents] = useState([])

  const navigation = useNavigation()

  useEffect(() => {
    const currentUser = { user: props.route.params.user }
    ApiService.getEventsList(currentUser)
      .then(events => setMyEvents(events))
      .catch(err => console.log(err))
  }, [myEvents]
  )

  const attendedEvents = myEvents.map((event: any) => {
    return <View style={styles.eventContainer} key={event._id}>
      <Text style={styles.eventHeader}>
        {event.eventName}
      </Text>
      <Text style={styles.venue}>
        {event.venue}
      </Text>
      <Text style={styles.label}>
        {event.date}
      </Text>
      <View style={styles.button}>
        <Text style={styles.button2}>
                  Head To Event
          <Button
            title=''
            color='black'
            onPress={() => {
              navigation.navigate('SingleEventScreen', {
                eventId: event._id
              })
            }} />
        </Text>
      </View>
      {event.creator === props.route.params.user ? <Text style={styles.creator}>Creator</Text> : null}
    </View>
  })

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.crosshead}>
          <Text style={styles.header}>Current Arcs</Text>
          <Image style={styles.logo} source={require('../assets/logohq.png')} />
        </View>
        {attendedEvents || <Text>Placeholder</Text>}
      </View>
    </ScrollView>
  )
}

