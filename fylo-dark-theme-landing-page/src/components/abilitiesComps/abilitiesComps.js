import React from 'react'
import Styles from './abilitiesComps.module.css'

const abilitiesComps = (props) => {
  return (
    <div className={Styles.div}>
      <img src={props.img} alt='logo' className={Styles.img} />
      <h2 className={Styles.h2}>{props.title}</h2>
      <p className={Styles.p}>{props.paragraph}</p>
    </div>
  )
}

export default abilitiesComps
