import React from 'react'
import Styles from './simplify.module.css'

const Simplify = () => {
  return (
    <div className={Styles['simplify-div']}>
      <section className={Styles.section}>
        <div>
          <h2 className={Styles.h2}>
            Simplify how your team <br /> works today.
          </h2>
        </div>
        <div>
          <button className={Styles.btn}>Get Started</button>
        </div>
      </section>
    </div>
  )
}

export default Simplify
