import React from 'react'
import Styles from './Home.module.css'
import Logo from './img/logo.svg'
import HamburgerIcon from './img/icon-hamburger.svg'
import NavBar from './NavBar'

const Home = () => {
  return (
    <div className={Styles['main-div']}>
      <nav>
        <div>
          <img src={Logo} className={Styles.logo} alt='logo' />
        </div>
        <div>
          <img
            src={HamburgerIcon}
            className={Styles['hamburger-icon']}
            alt='hamburgerIcon'
          />
        </div>
        <NavBar />
      </nav>
      <div className={Styles['content-div']}>
        <section>
          <h3 className={Styles.h3}>So, you want to travel</h3>
          <h2 className={Styles.h2}>Space</h2>
          <p className={Styles.p}>
            Let’s face it; if you want to go to space, you might as well <br />
            genuinely go to outer space and not hover kind of on the <br />
            edge of it. Well sit back, and relax because we’ll give you
            <br /> a truly out of this world experience!
          </p>
        </section>
        <section className={Styles['btn-section']}>
          <button className={Styles.btn}>Explore</button>
        </section>
      </div>
    </div>
  )
}

export default Home
