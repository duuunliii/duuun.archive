import PropTypes from 'prop-types'
import styles from '../styles/workdetail.module.scss'

function ArtWorkDetail({ id, img, title, detail, detailImg, open }) {
  return (
    <div className={open ? `${styles.modal} ${styles.isActive}` : styles.modal}>
      {/* <h1 className={styles.title}>{title}</h1> */}
      <img className={styles.artWorkImg} src={img}></img>
      {/* <p className={styles.detail}>{detail}</p> */}
      {detailImg.map((detailImg, index) => (
        <img className={styles.artWorkImg} key={index} src={detailImg}></img>
      ))}
    </div>
  )
}

ArtWorkDetail.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  detail: PropTypes.string.isRequired,
  detailImg: PropTypes.array.isRequired,
}

export default ArtWorkDetail
