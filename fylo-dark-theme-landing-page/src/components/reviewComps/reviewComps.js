import React from 'react'
import Styles from './reviewComps.module.css'

const reviewComps = (props) => {
  return (
    <section className={Styles.section}>
      <div className={Styles.div}>
        <p className={Styles.p}>{props.paragraph}</p>
        <div className={Styles.person}>
          <img src={props.img} alt='profileImage' className={Styles.img} />
          <div className={Styles.text}>
            <h2 className={Styles.h2}>{props.name}</h2>
            <h2 className={Styles['diff-h2']}>{props.title}</h2>
          </div>
        </div>
      </div>
    </section>
  )
}

export default reviewComps
