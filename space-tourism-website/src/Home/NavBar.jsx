import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Destination from '../Destination/Destination'
import Home from './Home'
import Styles from './NavBar.module.css'

const NavBar = () => {
  return (
    <>
      <ul>
        <li className={Styles.active}>
          <Link to='./Home.jsx'>00 Home</Link>
        </li>
        <li>
          <Link to='../Destination/Destination.jsx'>01 Destination</Link>
        </li>
        <li>02 Crew</li>
        <li>03 Technology</li>
      </ul>
      <Routes>
        <Route path='*' element={<Home />} />
        <Route path='/destination' element={<Destination />} />
      </Routes>
    </>
  )
}

export default NavBar
