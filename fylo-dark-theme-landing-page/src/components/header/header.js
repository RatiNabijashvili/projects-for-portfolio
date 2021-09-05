import React from 'react'
import Button from '../button/button'
import Styles from './header.module.css'

const header = () => {
  return (
    <header className={Styles.header}>
      <div className={Styles.div}>
        <img
          src='/images/illustration-intro.png'
          alt='header-dec'
          className={Styles.img}
        />
        <div className={Styles.text}>
          <h2 className={Styles.h2}>All your files in one secure location,</h2>
          <h2 className={Styles.h2}>accessible anywhere.</h2>
          <p className={Styles.p}>
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends
            family, and co-workers.
          </p>
          <Button title='Get Started' />
        </div>
      </div>
    </header>
  )
}

export default header
