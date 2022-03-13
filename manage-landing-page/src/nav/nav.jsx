import React from 'react'
import Styles from './nav.module.css'
import Logo from './img/logo.svg'
import Button from '../btn-template/btnTemplate'

const Nav = () => {
  return (
    <nav className={Styles.nav}>
      <div>
        <img src={Logo} />
      </div>
      <div>
        <ul className={Styles['nav-ul']}>
          <li className={Styles['nav-li']}>Pricing</li>
          <li className={Styles['nav-li']}>Product</li>
          <li className={Styles['nav-li']}>About Us</li>
          <li className={Styles['nav-li']}>Careers</li>
          <li className={Styles['nav-li']}>Community</li>
        </ul>
      </div>
      <div>
        <Button />
      </div>
    </nav>
  )
}

export default Nav
