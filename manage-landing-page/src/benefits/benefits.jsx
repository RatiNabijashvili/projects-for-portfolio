import React from 'react'
import Styles from './benefits.module.css'
import Template from './template/template'

const Benefits = () => {
  return (
    <div className={Styles['main-div']}>
      <section>
        <h2 className={Styles.h2}>
          What’s different about <br /> Manage?
        </h2>
        <p className={Styles.p}>
          Manage provides all the functionality your <br /> team needs, without
          the complexity. Our <br /> software is tailor-made for modern digital{' '}
          <br /> product teams.
        </p>
      </section>
      <section>
        <Template
          number='01'
          head='Track company-wide progress'
          subline={
            <p>
              See how your day-to-day tasks fit into the wider vision. <br /> Go
              from tracking progress at the milestone level all the <br /> way
              done to the smallest of details. Never lose sight of <br /> the
              bigger picture again.
            </p>
          }
        />
        <Template
          number='02'
          head='Advanced built-in reports'
          subline={
            <p>
              Set internal delivery estimates and track progress toward <br />{' '}
              company goals. Our customisable dashboard helps you <br /> build
              out the reports you need to keep key stakeholders <br /> informed.
            </p>
          }
        />
        <Template
          number='03'
          head='Everything you need in one place'
          subline={
            <p>
              Stop jumping from one service to another to <br />
              communicate, store files, track tasks and share <br /> documents.
              Manage offers an all-in-one team <br /> productivity solution.
            </p>
          }
        />
      </section>
    </div>
  )
}

export default Benefits
