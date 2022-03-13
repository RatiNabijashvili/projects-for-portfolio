import React from 'react'
import Styles from './extension.module.css'
import Text from '../text/text'
import ExtensionComps from './extensionComps/extensionComps'

const extension = () => {
  return (
    <div className={Styles.div}>
      <div className={Styles.responsie}>
        <div className={Styles.text}>
          <Text
            title='Download the extension'
            paragraph='We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize. '
          />
        </div>
        <div className={Styles.extensionComps}>
          <ExtensionComps
            src='/images/logo-chrome.svg'
            title='Add to Chrome'
            subTitle='Minimum version 62'
          />
          <ExtensionComps
            src='/images/logo-firefox.svg'
            title='Add to Firefox'
            subTitle='Minimum version 55'
          />
          <ExtensionComps
            src='/images/logo-opera.svg'
            title='Add to Opera'
            subTitle='Minimum version 46'
          />
        </div>
      </div>
    </div>
  )
}

export default extension
