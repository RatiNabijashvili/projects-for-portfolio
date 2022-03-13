import React from 'react'
import Styles from './header.module.css'

const header = () => {
  return (
    <header className={Styles.header}>
      <div className={Styles.div}>
        <div className={Styles.text}>
          <h2 className={Styles.h2}>
            A Simple Bookmark <br /> Manager
          </h2>
          <p className={Styles.p}>
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <div className={Styles.buttons}>
            <button className={Styles['chrome-btn']}>Get it on Chrome</button>
            <button className={Styles['firefox-btn']}>Get it on Firefox</button>
          </div>
        </div>
        <div>
          <img src='/images/illustration-hero.svg' className={Styles.img} />
          <div className={Styles.decoration} />
        </div>
      </div>
    </header>
  )
}

export default header
