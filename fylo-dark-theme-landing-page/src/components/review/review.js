import React from 'react'
import Components from '../reviewComps/reviewComps'
import Styles from './review.module.css'

const review = () => {
  return (
    <div className={Styles['main-div']}>
      <div className={Styles['responsive-div']}>
        <img src='/images/bg-quotes.png' className={Styles.img} />
        <div className={Styles.components}>
          <Components
            paragraph='Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.'
            img={'/images/profile-1.jpg'}
            name='Satish Patel'
            title='Founder & CEO'
          />
          <Components
            paragraph='Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.'
            img={'/images/profile-2.jpg'}
            name='Bruce McKenzie '
            title='Founder & CEO'
          />
          <Components
            paragraph='Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.'
            img={'/images/profile-3.jpg'}
            name='Iva Boyd'
            title='Founder & CEO'
          />
        </div>
      </div>
    </div>
  )
}

export default review
