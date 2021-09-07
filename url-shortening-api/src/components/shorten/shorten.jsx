import React, { useState } from 'react'
import Styles from './shorten.module.css'

const Shorter = () => {
  const [shortenedUrls, setShortenedUrls] = useState([])
  const shortenUrl = () => {
    fetch('https://api.shrtco.de/v2/shorten?url=youtube.com')
      .then((res) => res.json())
      .then((json) => {
        if (!json.result) return
        setShortenedUrls([...shortenedUrls, json.result.full_short_link])
        console.log(json.result.full_short_link)
      })
  }

  return (
    <div className={Styles.div}>
      <div className={Styles.responsive}>
        <img src='/images/bg-shorten-desktop.svg' className={Styles.img} />
        <div className={Styles['input-div']}>
          <input
            type='text'
            placeholder='Shorten a link here... '
            className={Styles.input}
          />
          <button onClick={shortenUrl} className={Styles.button}>
            Shorten It!
          </button>
        </div>
        <div>
          <ul className={Styles.ul}>
            <li className={Styles.li}>
              {shortenedUrls.map((url) => {
                return <div>{url}</div>
              })}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Shorter
