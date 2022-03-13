import React from 'react'
import Styles from './text.module.css'

const text = (props) => {
  return (
    <div className={Styles.div}>
      <h2 className={Styles.h2}>{props.title}</h2>
      <p className={Styles.p}>{props.paragraph}</p>
    </div>
  )
}

export default text
