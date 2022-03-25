
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'

export const friendStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'rgb(20,20,30)',
    height: 1800
  },
  btnClicked: {
    color: 'red'
  },
  header: {
    marginTop: 35,
    marginLeft: 20,
    marginBottom: 20,
    fontSize: 30,
    color: 'white'
  },
  buttonClick: {
    height: 40,
    width: 350,
    marginBottom: 10,
    color: 'white',
    borderRadius: 10,
    backgroundColor: '#e1c4ff'
  },
  buttonUnclick: {
    height: 40,
    marginBottom: 10,
    width: 350,
    color: 'white',
    borderRadius: 10,
    backgroundColor: 'rgb(35,35,35)'
  },
  buttonBorder: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0)'
  },
  buttonContainer: {
    backgroundColor: 'rgb(5,5,5)',
    height: 40,
    marginTop: 20,
    width: 350,
    borderRadius: 10
  }
})

export const loginFormStyles = StyleSheet.create({
  container: {
    width: 280,
    height: 600,
    alignItems: 'center',
    alignContent: 'center'
  },
  label: {
    color: 'white',
    marginTop: 15,
    marginBottom: 5
  },
  button: {
    justifyContent: 'center',
    width: 140,
    marginTop: 30,
    height: 40,
    backgroundColor: '#C996D4',
    borderRadius: 4,
    fontWeight: 'bold'

  },
  input: {
    width: 320,
    backgroundColor: 'black',
    borderColor: 'rgb(129,129,129)',
    borderWidth: 1,
    color: 'white',
    height: 40,
    borderRadius: 4,
    padding: 10
  },

  signup: {
    color: 'rgb(230,230,230)',
    marginTop: 15,
    marginBottom: 5,
    fontWeight: 'bold',
    fontSize: 30
  }

})

export const newArcStyles = StyleSheet.create({
  container: {
    width: 280,
    height: 600,
    alignItems: 'center',
    alignContent: 'center'
  },
  label: {
    color: 'white',
    marginTop: 15,
    marginBottom: 5
  },
  button: {
    justifyContent: 'center',
    width: 140,
    marginTop: 30,
    height: 40,
    backgroundColor: '#C996D4',
    borderRadius: 4,
    fontWeight: 'bold'
  },
  buttonBottom: {
    justifyContent: 'center',
    width: 140,
    marginTop: 30,
    height: 40,
    backgroundColor: '#29b6f6',
    borderRadius: 4,
    fontWeight: 'bold'
  },
  input: {
    width: 320,
    backgroundColor: 'black',
    borderColor: 'rgb(129,129,129)',
    borderWidth: 1,
    color: 'white',
    height: 40,
    borderRadius: 4,
    padding: 10
  },
  signup: {
    color: 'rgb(230,230,230)',
    marginTop: 15,
    marginBottom: 5,
    fontWeight: 'bold',
    fontSize: 30
  },
  text: {
    color: 'white',
    fontSize: 20
  },
  created: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#C996D4',
    fontSize: 50
  }

})

export const signUpStyles = StyleSheet.create({
  container: {
    width: 280,
    height: 600,
    alignItems: 'center',
    alignContent: 'center'
  },
  label: {
    color: 'white',
    marginTop: 15,
    marginBottom: 5
  },
  button: {
    justifyContent: 'center',
    width: 140,
    marginTop: 30,
    height: 40,
    backgroundColor: '#C996D4',
    borderRadius: 4,
    fontWeight: 'bold'
  },
  input: {
    width: 320,
    backgroundColor: 'black',
    borderColor: 'rgb(129,129,129)',
    borderWidth: 1,
    color: 'white',
    height: 40,
    borderRadius: 4,
    padding: 10
  },
  signup: {
    color: 'rgb(230,230,230)',
    marginTop: 15,
    marginBottom: 5,
    fontWeight: 'bold',
    fontSize: 30
  }
})

export const drinkStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'rgb(20,20,30)',
    height: 1500
  },
  btnClicked: {
    color: 'red'
  },
  header: {
    marginTop: 35,
    marginLeft: 20,
    marginBottom: 20,
    fontSize: 30,
    color: 'white'
  },
  buttonClick: {
    height: 40,
    width: 350,
    marginBottom: 10,
    color: 'white',
    borderRadius: 10,
    backgroundColor: '#e1c4ff'
  },
  buttonUnclick: {
    height: 40,
    marginBottom: 10,
    width: 350,
    color: 'white',
    borderRadius: 10,
    backgroundColor: 'rgb(35,35,35)'
  },
  buttonBorder: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0)'
  },
  buttonContainer: {
    backgroundColor: 'rgb(5,5,5)',
    height: 40,
    marginTop: 20,
    width: 350,
    borderRadius: 10
  }
})

export const eventListStyles = StyleSheet.create({
  container: {
    height: 1800,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'rgb(20,20,30)'
  },
  logo: {
    width: 100,
    height: 100,
    marginLeft: 45
  },
  crosshead: {
    flexDirection: 'row',
    height: 100,
    marginTop: 20,
    marginLeft: 0,
    paddingLeft: 0,
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  eventHeader: {
    color: 'white',
    fontSize: 30,
    paddingBottom: 5,
    fontWeight: 'bold'
  },
  venue: {
    color: 'white',
    fontSize: 20,
    paddingBottom: 3
  },
  eventContainer: {
    paddingTop: 20,
    paddingBottom: 5,
    width: '90%',
    borderTopColor: '#C996D4',
    borderRightColor: 'rgb(20,20,30)',
    borderBottomColor: 'rgb(20,20,30)',
    borderLeftColor: 'rgb(20,20,30)',
    borderWidth: 2,
    height: 165,
    alignItems: 'flex-start',
    backgroundColor: 'rgb(20,20,30)'
  },
  label: {
    color: 'white',
    marginTop: 5,
    marginBottom: 5
  },
  header: {
    color: '#C996D4',
    marginTop: 40,
    marginBottom: 20,
    marginLeft: 20,
    fontWeight: 'bold',
    fontSize: 35
  },
  title: {
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold'
  },
  button: {
    justifyContent: 'center',
    width: 140,
    marginTop: 5,
    marginBottom: 10,
    height: 30,
    backgroundColor: '#29b6f6',
    borderRadius: 4,
    alignSelf: 'flex-start',
    color: 'black',
    fontSize: 2
  },
  button2: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
    paddingLeft: 20,
    fontSize: 15
  },
  creator: {
    backgroundColor: 'rgb(20,20,30)',
    marginTop: 120,
    borderColor: '#5579c6',
    color: '#5579c6',
    borderWidth: 1,
    padding: 6,
    borderRadius: 3,
    position: 'absolute',
    marginLeft: 260
  }

})

export const foodStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'rgb(20,20,30)',
    height: 1500
  },
  btnClicked: {
    color: 'red'
  },
  header: {
    marginTop: 35,
    marginLeft: 20,
    marginBottom: 20,
    fontSize: 30,
    color: 'white'
  },
  buttonClick: {
    height: 40,
    width: 350,
    marginBottom: 10,
    color: 'white',
    borderRadius: 10,
    backgroundColor: '#e1c4ff'
  },
  buttonUnclick: {
    height: 40,
    marginBottom: 10,
    width: 350,
    color: 'white',
    borderRadius: 10,
    backgroundColor: 'rgb(35,35,35)'
  },
  buttonBorder: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0)'
  },
  buttonContainer: {
    backgroundColor: 'rgb(5,5,5)',
    height: 40,
    marginTop: 20,
    width: 350,
    borderRadius: 10
  }
})

export const newArcScreenStyles = StyleSheet.create({
  container: {
    height: 2000,
    alignItems: 'center',
    backgroundColor: 'rgb(20,20,30)'
  },
  logo: {
    width: 300,
    height: 300,
    top: 20
  },
  button: {
    color: 'black'
  },
  text: {
    color: 'white'
  }
})


export const profileStyles = StyleSheet.create({
  logo: {
    width: 300,
    height: 300,
    top: 20
  },
  button: {
    color: 'black'
  },
  container: {
    color: 'white'
  },
  text: {
    color: 'white',
    fontSize: 20,
    marginBottom: 10,
    fontStyle: 'italic'
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white'
  },
  logout: {

  },
  buttonCreate: {
    justifyContent: 'center',
    width: 180,
    marginTop: 30,
    height: 50,
    backgroundColor: '#29b6f6',
    borderRadius: 4,
    fontWeight: 'bold',
    marginBottom: 20

  },
  buttonEdit: {
    justifyContent: 'center',
    width: 150,
    marginTop: 30,
    height: 40,
    backgroundColor: '#36454f',
    borderRadius: 4,
    fontWeight: 'bold',
    marginBottom: 10

  },
  buttonLogout: {
    justifyContent: 'center',
    width: 150,
    marginTop: 5,
    height: 40,
    backgroundColor: 'black',
    borderRadius: 4,
    borderColor: '#36454f',
    borderWidth: 1,
    fontWeight: 'bold',
    marginBottom: 20

  },
  details: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export const singleEventStyles = StyleSheet.create({
  container: {
    height: 1500,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'rgb(20,20,30)'
  },
  title: {
    marginLeft: 30,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    width: 200,
    color: '#C996D4',
    fontSize: 40,
    flexWrap: 'wrap',
    fontWeight: 'bold'
  },
  venue: {
    borderTopColor: '#D3D3D3',
    borderTopWidth: 2,
    color: 'white',
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 30,
    fontWeight: 'bold'

  },
  date: {
    color: 'white',
    marginLeft: 20,
    marginTop: 15,
    fontSize: 18,
    fontStyle: 'italic'

  },
  totalCostWrapper: {
    flexDirection: 'row'
  },
  totalCostBlurb: {
    color: '#a9a9a9',
    marginLeft: 20,
    marginTop: 10,
    fontSize: 25,
    fontStyle: 'italic'
  },
  totalCost: {
    color: '#D3D3D3',
    marginLeft: 20,
    marginTop: 10,
    fontSize: 25,
    fontStyle: 'italic',
    fontWeight: 'bold'
  },
  foodCostWrapper: {
    flexDirection: 'row'
  },
  foodCostBlurb: {
    color: '#a9a9a9',
    marginLeft: 20,
    marginTop: 10,
    fontSize: 25,
    fontStyle: 'italic'
  },
  drinkCostBlurb: {
    color: '#a9a9a9',
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 12,
    fontSize: 25,
    fontStyle: 'italic'
  },
  foodCost: {
    color: '#D3D3D3',
    marginLeft: 20,
    marginTop: 10,
    fontSize: 25,
    fontStyle: 'italic',
    fontWeight: 'bold'
  },
  cost: {
    color: '#D3D3D3',
    marginLeft: 20,
    marginTop: 10,
    fontSize: 25,
    fontStyle: 'italic',
    fontWeight: 'bold'

  },
  me: {
    marginTop: 20,
    borderTopColor: '#C996D4',
    borderBottomColor: '#C996D4',
    borderTopWidth: 2,
    fontWeight: 'bold',
    width: '60%',
    alignItems: 'center'

  },

  textMe: {
    marginTop: 20,
    color: 'white',
    fontSize: 25

  },
  textBlurbMe: {
    fontSize: 20,
    color: 'white',
    marginTop: 3,
    fontStyle: 'italic'
  },
  split: {
  },
  logo: {
    width: 150,
    height: 150,
    marginLeft: 30
  },
  header: {
    flexDirection: 'row',
    width: 400,
    height: 150,
    marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 0,
    paddingBottom: 0,
    borderBottomColor: '#C996D4',
    borderTopColor: 'rgb(20,20,30)',
    borderLeftColor: 'rgb(20,20,30)',
    borderRightColor: 'rgb(20,20,30)',
    borderWidth: 4
  },
  payNowButton: {
    justifyContent: 'center',
    width: 180,
    marginTop: 20,
    height: 40,
    backgroundColor: '#29b6f6',
    borderRadius: 4,
    fontWeight: 'bold',
    marginBottom: 17
  },
  payNowButtonClicked: {
    justifyContent: 'center',
    width: 180,
    marginTop: 20,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 4,
    fontWeight: 'bold',
    marginBottom: 20
  },
  othersWrapper: {
    flexDirection: 'row',
    marginTop: 20,
    borderTopColor: '#C996D4',
    borderBottomColor: '#C996D4',
    borderTopWidth: 2,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  othersTextContent: {
  },
  othersBill: {
    marginTop: 13,
    color: 'white',
    fontSize: 15
  },
  othersBlurb: {
    marginTop: 5,
    color: '#a9a9a9',
    fontSize: 15
  },
  buttonBack: {
    justifyContent: 'center',
    width: 150,
    marginTop: 20,
    height: 40,
    backgroundColor: 'black',
    borderRadius: 8,
    fontWeight: 'bold',
    marginBottom: 20,
    borderColor: 'grey',
    borderWidth: 1
  },
  creator: {
    backgroundColor: 'rgb(20,20,30)',
    marginBottom: 10,
    marginTop: 10,
    borderColor: '#187bcd',
    color: '#187bcd',
    borderWidth: 1,
    padding: 4,
    fontSize: 20,
    fontWeight: 'bold',
    borderRadius: 3
  },
  icons: {
    flexDirection: 'row'
  },
  icon: {
    paddingLeft: 10
  }
})
