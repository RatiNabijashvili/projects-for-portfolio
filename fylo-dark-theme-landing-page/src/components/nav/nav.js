import React from 'react'
import Styles from './nav.module.css'

const nav = () => {
  return (
    <nav className={Styles.nav}>
      <div className={Styles.div}>
        <img src='/images/logo.svg' alt='nav-logo' />
        <ul className={Styles.ul}>
          <li className={Styles.li}>Features</li>
          <li className={Styles.li}>Team</li>
          <li className={Styles.li}>Sign In</li>
        </ul>
      </div>
    </nav>
  )
}

export default nav
