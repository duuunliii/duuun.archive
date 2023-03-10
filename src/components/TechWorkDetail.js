import styles from '../styles/workdetail.module.scss'
import PropTypes from 'prop-types'

function TechWorkDetail({
  id,
  title,
  year,
  genre,
  skill,
  detail,
  detailImg,
  open,
}) {
  return (
    <div className={open ? `${styles.modal} ${styles.isActive}` : styles.modal}>
      <div className={styles.workdetail}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.yearAndGenre}>
          (<h4 className={styles.year}>{year}</h4>,
          <h4 className={styles.genre}>{genre}</h4>)
        </div>
        <h4 className={styles.skill}>{skill}</h4>
        {detail.map((detail, index) => (
          <p className={styles.detail} key={index}>
            {detail}
          </p>
        ))}
        {detailImg.map((detailImg, index) => (
          <img className={styles.detailImg} key={index} src={detailImg}></img>
        ))}
      </div>
    </div>
  )
}

export default TechWorkDetail
