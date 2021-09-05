import React from 'react'
import Styles from './footerComps.module.css'

const footerCopms = (props) => {
  return (
    <div className={Styles.div}>
      <span className={Styles.span}>{props.title}</span>
      <ul className={Styles.ul}>
        {props.list.map((item) => {
          return <li>{item}</li>
        })}
      </ul>
    </div>
  )
}

export default footerCopms
