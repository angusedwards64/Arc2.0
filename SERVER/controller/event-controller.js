const eventModel = require('../models/event-model');



const postEvents = async (req, res) => {
  console.log(req.body)
  try {
    const event = req.body
    const savedEvent = await eventModel.create(event);
    console.log('saved event', savedEvent)
      res.status(200).json(savedEvent)
    }

  catch (error) {
    console.log(error);
    res.sendStatus(500)
}
}



const getEventsList = async (req, res) => {
  // console.log(req.body.user)
  try {
    const user = req.body.user;
    const eventList = await eventModel.find({});
    const userEvents = eventList.filter(event => (event.arcs[user]))
    res.status(200).json(userEvents)
  }

  catch (error) {
    console.log(error);
    res.sendStatus(500)
}
}



const getEvent = async (req, res) => {

  try {
    const id = req.body.event
    const currentEvent = await eventModel.find({_id: id});
    res.status(200).json(currentEvent)
  }

  catch (error) {
    console.log(error);
    res.sendStatus(500)
  }
}

const updatePayment = async (req, res) => {

  try {
    const {event, user} = req.params;
    console.log(event)
    console.log(user)
    const updatedEvent = await eventModel.findById(event)
    const arcsPaid = updatedEvent.arcsPaid;
    arcsPaid[user] = true;
    await eventModel.findByIdAndUpdate(event, {arcsPaid})
  }

  catch (error) {
    console.log(error);
    res.sendStatus(500)
  }
}




module.exports = { postEvents, getEventsList, getEvent, updatePayment}