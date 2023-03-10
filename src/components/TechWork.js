import PropTypes from 'prop-types'
import { useState } from 'react'
import styles from '../styles/workslist.module.scss'
import TechWorkDetail from './TechWorkDetail'
import CloseBtnImg from '../assets/closeBtn.png'

function TechWork({
  id,
  title,
  img,
  genre,
  summary,
  year,
  skill,
  detail,
  detailImg,
}) {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <button className={styles.work} onClick={() => setOpen(true)}>
        <h2 className={styles.title}>{title}</h2>
        <img className={styles.thumbnail} src={img} alt={title}></img>
        <p className={styles.genre}>{genre}</p>
        <p className={styles.summary}>{summary}</p>
      </button>

      {open ? (
        <button className={styles.closeBtn} onClick={() => setOpen(false)}>
          <img src={CloseBtnImg}></img>
        </button>
      ) : null}

      <TechWorkDetail
        key={id}
        id={id}
        title={title}
        year={year}
        genre={genre}
        skill={skill}
        detail={detail}
        detailImg={detailImg}
        open={open}
      />
    </div>
  )
}

TechWork.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
}

export default TechWork
