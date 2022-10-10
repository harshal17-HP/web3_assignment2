import React from 'react'
import Header from '../components/Header/Header'

const About = () => {
  document.title ="About Us"
  return (
    <div>
      <Header/>
      <li>
      <h1>
      Join the Community
      </h1>
      <p className='abt'>
      Meet new people, join groups, form clans, chat in-game and more! With over 100 million potential friends (or enemies), the fun never stops.
      </p>
      </li>
    </div>
  )
}

export default About
