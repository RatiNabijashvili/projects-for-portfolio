import React, { useState, useRef } from 'react'
import Button from '../moreinfoBtn/moreinfoBtn'
import Styles from './features.module.css'
import Text from '../text/text'

const Featuers = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const getImg = (activeIndex) => {
    switch (activeIndex) {
      case 0:
        return '/images/illustration-features-tab-1.svg'
      case 1:
        return '/images/illustration-features-tab-2.svg'
      case 2:
        return '/images/illustration-features-tab-3.svg'
    }
  }

  const getText = (activeIndex) => {
    switch (activeIndex) {
      case 0:
        return 'Bookmark in one click'
      case 1:
        return 'Intelligent search'
      case 2:
        return 'Share your bookmarks'
    }
  }

  const getParagraph = (activeIndex) => {
    switch (activeIndex) {
      case 0:
        return 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.'
      case 1:
        return 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.'
      case 2:
        return 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.'
    }
  }

  // const tabOne = useRef()
  // const tabTwo = useRef()
  // const tabThree = useRef()

  // const getTabOne = () => {
  //   if (tabOne.current.classList.contains(Styles['clicked'])) {
  //     tabTwo.current.classList.remove(Styles['clicked'])
  //     tabThree.current.classList.remove(Styles['clicked'])
  //   } else {
  //     tabOne.current.classList.add(Styles['clicked'])
  //     tabTwo.current.classList.remove(Styles['clicked'])
  //     tabTwo.current.classList.remove(Styles['clicked'])
  //   }
  // }
  // const getTabTwo = () => {
  //   if (tabTwo.current.classList.contains(Styles['clicked'])) {
  //     tabOne.current.classList.remove(Styles['clicked'])
  //     tabThree.current.classList.remove(Styles['clicked'])
  //   } else {
  //     tabTwo.current.classList.add(Styles['clicked'])
  //     tabOne.current.classList.remove(Styles['clicked'])
  //     tabThree.current.classList.remove(Styles['clicked'])
  //   }
  // }
  // const getTabThree = () => {
  //   if (tabThree.current.classList.contains(Styles['clicked'])) {
  //     tabOne.current.classList.remove(Styles['clicked'])
  //     tabTwo.current.classList.remove(Styles['clicked'])
  //   } else {
  //     tabThree.current.classList.add(Styles['clicked'])
  //     tabOne.current.classList.remove(Styles['clicked'])
  //     tabTwo.current.classList.remove(Styles['clicked'])
  //   }
  // }

  const changeFeature = (index) => {
    setActiveIndex(index)
    // getTabOne()
    // getTabTwo()
    // getTabThree()
  }

  return (
    <section className={Styles.section}>
      <div className={Styles.div}>
        <div className={Styles.featueres}>
          <Text
            title='Features'
            paragraph='Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.'
          />
          <ul className={Styles.ul}>
            <li
              className={`${Styles.li} ${Styles.clicked}`}
              // ref={tabOne}
              onClick={() => changeFeature(0)}
            >
              Simple Bookmarking
            </li>
            <li
              className={Styles.li}
              // ref={tabTwo}
              onClick={() => changeFeature(1)}
            >
              Speedy Searching
            </li>
            <li
              className={Styles.li}
              // ref={tabThree}
              onClick={() => changeFeature(2)}
            >
              Easy Sharing
            </li>
          </ul>
        </div>
        <div className={Styles.tab}>
          <div className={Styles.decoration} />
          <img src={getImg(activeIndex)} className={Styles.img} alt='image' />
          <div className={Styles.text}>
            <h2 className={Styles.h2}>{getText(activeIndex)}</h2>
            <p className={Styles.p}>{getParagraph(activeIndex)}</p>
            <Button />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Featuers
