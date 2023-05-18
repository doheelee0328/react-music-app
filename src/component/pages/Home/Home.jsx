import React, { useEffect } from 'react'
import { useAuthentication } from '../../context/context'

const Home = () => {
  const { user } = useAuthentication()

  const rose = 'rose'
  const jisoo = 'jisoo'
  const jennie = 'jennie'
  const lisa = 'lisa'

  let message

  switch (user.toLowerCase()) {
    case rose.toLowerCase():
      message =
        'Rose is an amazing choice! Her vocals are incredible and she brings so much energy to the stage!'
      break
    case jisoo.toLowerCase():
      message = "Jisoo is a fantastic choice! She's talented and beautiful!"
      break
    case jennie.toLowerCase():
      message =
        "Jennie is an awesome choice! She's a powerful rapper and a charismatic performer!"
      break
    case lisa.toLowerCase():
      message =
        "Lisa is an incredible choice! She's a phenomenal dancer and has a unique sense of style!"
      break
    default:
      message = 'That is not the name of the blackpink member but Welcome!!!'
  }

  return (
    <>
      <h1> You chose {user}!</h1>
      <p>{message}</p>
    </>
  )
}

export default Home
