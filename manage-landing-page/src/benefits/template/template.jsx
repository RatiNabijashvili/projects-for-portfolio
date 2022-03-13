import React from 'react'
import Styles from './template.module.css'

const Template = (props) => {
  return (
    <div className={Styles['template-div']}>
      <section>
        <div className={Styles['div-visual']}>
          <h2 className={Styles['div-h2']}>{props.number}</h2>
        </div>
      </section>
      <section>
        <h2 className={Styles.h2}>{props.head}</h2>
        <div className={Styles.p}>{props.subline}</div>
      </section>
    </div>
  )
}

export default Template
