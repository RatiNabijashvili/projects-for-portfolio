import React from 'react'
import Button from '../btn-template/btnTemplate'
import Reviewtemplate from './Template/template'
import AvatarOne from './img/avatar-anisha.png'
import AvatarTwo from './img/avatar-ali.png'
import AvatarThree from './img/avatar-richard.png'
import Styles from './review.module.css'

const Review = () => {
  return (
    <div className={Styles['review-div']}>
      <section className={Styles['h2-section']}>
        <h2 className={Styles.h2}>What they’ve said</h2>
      </section>
      <section className={Styles['review-style']}>
        <Reviewtemplate
          img={AvatarOne}
          name='Anisha Li'
          text={
            <p>
              “Manage has supercharged our team’s workflow. The <br /> ability
              to maintain visibility on larger milestones at all times <br />
              keeps everyone motivated.”
            </p>
          }
        />
        <Reviewtemplate
          img={AvatarTwo}
          name='Ali Bravo'
          text={
            <p>
              “We have been able to cancel so many other subscriptions <br />{' '}
              since using Manage. There is no more cross-channel <br />{' '}
              confusion and everyone is much more focused.”
            </p>
          }
        />
        <Reviewtemplate
          img={AvatarThree}
          name='Richard Watts'
          text={
            <p>
              Manage allows us to provide structure and process. It <br /> keeps
              us organized and focused. I can’t stop recommending <br /> them to
              everyone I talk to!” Shanai Gough “
            </p>
          }
        />
      </section>
      <section className={Styles['btn-section']}>
        <Button />
      </section>
    </div>
  )
}

export default Review
