import React from 'react'
import Button from '../btn-template/btnTemplate'
import Styles from './hero.module.css'
import Img from './img/illustration-intro.svg'

const Hero = () => {
  return (
    <div className={Styles.hero}>
      <div>
        <h2 className={Styles.h2}>
          Bring everyone <br /> together to build <br /> better products.
        </h2>
        <p className={Styles.p}>
          Manage makes it simple for software teams <br /> to plan day-to-day
          tasks while keeping <br /> the larger team goals in view.
        </p>
        <Button />
      </div>
      <div>
        <img src={Img} />
      </div>
    </div>
  )
}

export default Hero
