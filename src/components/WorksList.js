import { useState, useEffect } from 'react'
import Work from './Work.js'
import Styles from '../styles/workslist.module.scss'
import WorksData from '../WorksData.js'

function WorksList() {
  const [works, setWorks] = useState([])

  const getWorks = () => {
    setWorks(WorksData)
  }

  useEffect(() => {
    getWorks()
  }, [])

  return (
    <div className={Styles.workslist}>
      <h1 className={Styles.categoryTitle}>Works</h1>
      {works.map((work) => (
        <Work
          key={work.id}
          id={work.id}
          title={work.title}
          img={work.img}
          genre={work.genre}
          summary={work.summary}
        />
      ))}
    </div>
  )
}

export default WorksList
