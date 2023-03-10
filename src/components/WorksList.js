import { useState, useEffect } from 'react'
import TechWork from './TechWork.js'
import ArtWork from './ArtWork.js'
import styles from '../styles/workslist.module.scss'
import TechWorksData from '../TechWorksData.js'
import ArtWorksData from '../ArtWorksData.js'

function WorksList() {
  const [techWorks, setTechWorks] = useState([])
  const [artWorks, setArtWorks] = useState([])
  const [workIndex, setWorkIndex] = useState(0)
  //workIndex 0 == TechWorks
  //workIndex 1 == ArtWorks

  const getTechWorks = () => {
    setTechWorks(TechWorksData)
  }

  const getArthWorks = () => {
    setArtWorks(ArtWorksData)
  }

  useEffect(() => {
    getTechWorks()
    getArthWorks()
  }, [])

  return (
    <div className={styles.workslist}>
      <div className={styles.category}>
        <button
          className={
            workIndex == 0
              ? `${styles.categoryTitle} ${styles.isActive}`
              : styles.categoryTitle
          }
          onClick={() => setWorkIndex(0)}
        >
          Tech
        </button>
        <button
          className={
            workIndex == 1
              ? `${styles.categoryTitle} ${styles.isActive}`
              : styles.categoryTitle
          }
          onClick={() => setWorkIndex(1)}
        >
          Art
        </button>
      </div>

      {workIndex == 0
        ? techWorks.map((work) => (
            <TechWork
              key={work.id}
              id={work.id}
              title={work.title}
              img={work.img}
              genre={work.genre}
              summary={work.summary}
              year={work.year}
              skill={work.skill}
              detail={work.detail}
              detailImg={work.detailImg}
            />
          ))
        : workIndex == 1
        ? artWorks.map((work) => (
            <ArtWork
              key={work.id}
              id={work.id}
              title={work.title}
              img={work.img}
              detail={work.detail}
              detailImg={work.detailImg}
            />
          ))
        : console.log('Wrong Access')}
    </div>
  )
}

export default WorksList
