import React from 'react'
import Styles from './footer.module.css'
import Img from './img/logo.svg'
import FacebookIcon from './img/icon-facebook.svg'
import InstagramIcon from './img/icon-instagram.svg'
import TwitterIcon from './img/icon-twitter.svg'
import YoutubeIcon from './img/icon-youtube.svg'
import PinterestIcon from './img/icon-pinterest.svg'

const Footer = () => {
  return (
    <div className={Styles['footer-div']}>
      <div className={Styles['main-components']}>
        <div className={Styles['first-div']}>
          <section>
            <img src={Img} className={Styles.img} />
          </section>
          <section>
            <img src={FacebookIcon} />
            <img src={TwitterIcon} className={Styles['socialMedia-space']} />
            <img src={InstagramIcon} className={Styles['socialMedia-space']} />
            <img src={YoutubeIcon} className={Styles['socialMedia-space']} />
            <img src={PinterestIcon} className={Styles['socialMedia-space']} />
          </section>
        </div>
        <div>
          <ul>
            <li>Home</li>
            <li>Pricing</li>
            <li>Products</li>
            <li>About Us</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Careers</li>
            <li>Community</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className={Styles['second-div']}>
          <section className={Styles['second-section']}>
            <div>
              <input
                placeholder='Updates in your inbox...'
                type='email'
                className={Styles.input}
              />
            </div>
            <div>
              <button className={Styles.btn}>Go</button>
            </div>
          </section>
          <h2 className={Styles.h2}>Copyright 2020. All Rights Reserved</h2>
        </div>
      </div>
    </div>
  )
}

export default Footer
