import React from 'react'
import Components from '../abilitiesComps/abilitiesComps'
import Styles from './abilities.module.css'

const abilities = () => {
  return (
    <section className={Styles.section}>
      <div className={Styles.div}>
        <Components
          img={'/images/icon-access-anywhere.svg'}
          title='Access your files, anywhere'
          paragraph='The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.'
        />
        <Components
          img={'/images/icon-security.svg'}
          title='Security you can trust'
          paragraph='2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.'
        />
        <Components
          img={'/images/icon-collaboration.svg'}
          title='Real-time collaboration'
          paragraph='Real-time collaboration Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.'
        />
        <Components
          img={'/images/icon-any-file.svg'}
          title='Store any type of file'
          paragraph="Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."
        />
      </div>
    </section>
  )
}

export default abilities
