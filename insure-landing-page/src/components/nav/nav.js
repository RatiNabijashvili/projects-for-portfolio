import React from 'react'
import { Button } from '../button/button'
import Styles from './nav.module.css'

const Nav = () => {
  return (
    <nav className={Styles.nav}>
      <div className={Styles.div}>
        <img src='/images/logo.svg' alt='' className={Styles.img} />
        <ul className={Styles.ul}>
          <List name='HOW WE WORK' />
          <List name='BLOG' />
          <List name='ACCOUNT' />
          <Button name='VIEW PLANS' className={Styles['nav-button']} />
        </ul>
      </div>
    </nav>
  )
}

const List = (props) => {
  return <li className={Styles.li}>{props.name}</li>
}

export default Nav
