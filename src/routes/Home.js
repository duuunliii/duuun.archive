import Header from '../components/Header'
import MainSlide from '../components/MainSlide'
import { useState } from 'react'
import styles from '../styles/navbar.module.scss'

function Home() {
  window.scrollTo(0, 0)
  const [clickedNum, setClickedNum] = useState(0)

  return (
    <div style={{ width: '100%', height: '90vh', overflow: 'hidden' }}>
      <Header />
      <MainSlide clickedNum={clickedNum} />
      <div className={styles.navbar}>
        <button
          onClick={() => setClickedNum(0)}
          className={clickedNum == 0 ? `${styles.isActive}` : ''}
        >
          HOME
        </button>
        <button
          onClick={() => setClickedNum(1)}
          className={clickedNum == 1 ? `${styles.isActive}` : ''}
        >
          PROFILE
        </button>
        <button
          onClick={() => setClickedNum(2)}
          className={clickedNum == 2 ? `${styles.isActive}` : ''}
        >
          WORKS
        </button>
      </div>
    </div>
  )
}

export default Home
