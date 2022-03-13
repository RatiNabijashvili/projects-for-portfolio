import React from 'react'
import Styles from './template.module.css'

const Reviewtemplate = (props) => {
  return (
    <div className={Styles['review-div']}>
      <section className={Styles['img-div']}>
        <img src={props.img} className={Styles.img} />
      </section>
      <section>
        <h2 className={Styles.h2}>{props.name}</h2>
      </section>
      <section>
        <div className={Styles.p}>{props.text}</div>
      </section>
    </div>
  )
}

export default Reviewtemplate
