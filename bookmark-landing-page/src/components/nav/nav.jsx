import React from 'react'
import Styles from './nav.module.css'

const nav = () => {
  return (
    <nav className={Styles.nav}>
      <div className={Styles.div}>
        <img src='/images/logo-bookmark.svg' className={Styles.img} />
        <div>
          <ul className={Styles.ul}>
            <li className={Styles.li}>Features</li>
            <li className={Styles.li}>Pricing</li>
            <li className={Styles.li}>Contact</li>
            <li className={Styles.li}>
              <button className={Styles.button}>Login</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default nav
