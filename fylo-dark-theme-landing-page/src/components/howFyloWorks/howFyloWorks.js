import React from 'react'
import Styles from './howFyloWorks.module.css'

const howFyloWorks = () => {
  return (
    <section className={Styles.section}>
      <div className={Styles.div}>
        <img src='/images/illustration-stay-productive.png' alt='decoration' />
        <div className={Styles.text}>
          <h2 className={Styles.h2}>
            Stay productive,
            <br /> wherever you are
          </h2>
          <p className={Styles.p}>
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <p className={Styles.p}>
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
          <h4 className={Styles.h4}>See how Fylo works</h4>
        </div>
      </div>
    </section>
  )
}

export default howFyloWorks
