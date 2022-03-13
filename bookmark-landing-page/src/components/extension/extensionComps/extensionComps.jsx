import React from 'react'
import Styles from './extensionComps.module.css'

const extensionComps = (props) => {
  return (
    <div className={Styles.div}>
      <img src={props.src} className={Styles.img} />
      <h2 className={Styles.h2}>{props.title}</h2>
      <span className={Styles.span}>{props.subTitle}</span>
      <button className={Styles.button}>add & install Extension</button>
    </div>
  )
}

export default extensionComps
