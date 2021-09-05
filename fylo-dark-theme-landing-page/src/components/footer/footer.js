import React from 'react'
import FooterComps from '../footerComponents/footerCopms'
import Styles from './footer.module.css'

const footer = () => {
  return (
    <footer className={Styles.footer}>
      <div className={Styles.div}>
        <img src='/images/logo.svg' className={Styles.logo} />
        <div className={Styles.responsive}>
          <div className={Styles.flex}>
            <img src='/images/icon-location.svg' className={Styles.img} />
            <p className={Styles.p}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
          <div className={Styles.section}>
            <div className={Styles.contact}>
              <img src='/images/icon-phone.svg' className={Styles.img} />
              <div>
                <h2 className={Styles.h2}>+1-543-123-4567</h2>
              </div>
            </div>
            <div className={Styles.contact}>
              <img src='/images/icon-email.svg' className={Styles.img} />
              <div>
                <h2 className={Styles.h2}>example@fylo.com</h2>
              </div>
            </div>
          </div>
          <div className={Styles['footer-comps']}>
            <div>
              <FooterComps title='About Us' list={['Jobs', 'Press', 'Blog']} />
            </div>
            <div>
              <FooterComps title='Contact Us' list={['Terms', 'Privacy']} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default footer
