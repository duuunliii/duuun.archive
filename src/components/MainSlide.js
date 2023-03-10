import MainImg from './MainImg'
import Profile from './Profile'
import WorksList from './WorksList'
import styles from '../styles/mainslide.module.scss'
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'

function MainSlide({ clickedNum }) {
  let slideLength = 3
  const [slideNum, setSlideNum] = useState(0)
  useEffect(() => {
    setSlideNum(clickedNum)
  }, [clickedNum])

  return (
    <div
      className={styles.mainSlide}
      style={{
        transform: `translateX(calc(-100% / ${slideLength} * ${slideNum}))`,
      }}
    >
      <div className={styles.slide}>
        <MainImg />
      </div>
      <div className={styles.slide}>
        <Profile />
      </div>
      <div className={styles.slide}>
        <WorksList />
      </div>
    </div>
  )
}

MainSlide.propTypes = {
  clickedNum: PropTypes.number.isRequired,
}

export default MainSlide
