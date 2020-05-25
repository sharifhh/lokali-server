import React from 'react'
import EventForm from '../components/Forms/EventForm'
import GiftOfferingForm from '../components/Forms/GiftOfferingForm'
import HelpRequestForm from '../components/Forms/HelpRequestForm'
import InitiativeForm from '../components/Forms/InitiativeForm'
import PostForm from '../components/PostForm/PostForm'
function App () {
  // heading: "",
  // subheading: "",
  // summary: "",
  // location: "",
  // category: "",
  // timeOfEvent: "",
  // dateOfEvent: "",
  return (
    <PostForm
      title='Party'
      type="event"
      subtitle='Cool bbq with friends'
      summary='some textsome textsome textsome textsome textsome textsome textsome textsome textsome text'
      location='Independant park, Jerusalem'
      category='cat'
      time="date"
      date='1'
    />
  )
}

export default App
