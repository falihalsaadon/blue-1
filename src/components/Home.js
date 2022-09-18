import React from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="home_container">
      <div className="loader"></div>
      <img src={logo} />
      <h1>WELCOME TO AL-SAFEE AL-MOTAHIDA</h1>
      <Link to='/landing'><button to='/landing'>View States</button></Link>
    </div>
  )
}

export default Home