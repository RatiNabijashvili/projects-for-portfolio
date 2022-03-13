import React from 'react'
import Nav from '../nav/nav'
import Hero from '../hero/hero'
import Benefits from '../benefits/benefits'
import Review from '../review/review'
import Simplify from '../simplify/simplify'
import Footer from '../footer/footer'

// this is a file that contains one div and integrates everything

const App = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <Benefits />
      <Review />
      <Simplify />
      <Footer />
    </div>
  )
}

export default App
