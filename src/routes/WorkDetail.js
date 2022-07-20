import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import WorksData from '../WorksData.js'
import Styles from '../styles/workdetail.module.scss'
import work3Video from '../assets/wave.mp4'

function WorkDetail() {
  const { id } = useParams()
  const [details, setDetails] = useState([])
  const [detailImgs, setDetailImgs] = useState([])

  const getDetails = () => {
    setDetails(WorksData[id].detail)
  }

  const getDetailImgs = () => {
    setDetailImgs(WorksData[id].detailImg)
  }

  useEffect(() => {
    getDetails()
    getDetailImgs()
  }, [])

  return (
    <div className={Styles.workdetail}>
      <Link to={'/duuun/'} className={Styles.backBtn}></Link>
      <h1 className={Styles.title}>{WorksData[id].title}</h1>
      <h4 className={Styles.genre}>{WorksData[id].genre}</h4>

      {WorksData[id].link == undefined ? (
        console.log('no link')
      ) : (
        <a className={Styles.link} href={WorksData[id].link}>
          CLICK ME
        </a>
      )}

      {details.map((detail, index) => (
        <p className={Styles.detail} key={index}>
          {detail}
        </p>
      ))}

      {detailImgs.map((detailImg, index) => (
        <img className={Styles.detailImg} key={index} src={detailImg}></img>
      ))}

      {WorksData[id].detailVideo == undefined ? (
        console.log('no video')
      ) : (
        <video
          className={Styles.detailVideo}
          loop={true}
          muted={true}
          autoplay={true}
          playsinline={true}
        >
          <source src={work3Video} type="video/mp4"></source>
        </video>
      )}
    </div>
  )
}

export default WorkDetail
