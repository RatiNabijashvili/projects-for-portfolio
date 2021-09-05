import React from 'react'
import Button from '../button/button'
import Styles from './form.module.css'

const form = () => {
  return (
    <section className={Styles.section}>
      <div className={Styles.div}>
        <h2 className={Styles.h2}>Get early access today</h2>
        <p className={Styles.p}>
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        <div className={Styles['input-div']}>
          <input
            type='text'
            placeholder='email@example.com'
            className={Styles.input}
            id='email'
          />
          <Button title='Get Started For Free' />
        </div>
        <p id='main-input-p'></p>
      </div>
    </section>
  )
}

export default form
