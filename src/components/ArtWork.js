import PropTypes from 'prop-types'
import styles from '../styles/workslist.module.scss'
import ArtWorkDetail from './ArtWorkDetail'
import { useState } from 'react'
import CloseBtnImg from '../assets/closeBtn.png'

function ArtWork({ id, title, img, detail, detailImg }) {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <button
        className={styles.artwork}
        onClick={() => setOpen(true)}
        style={{ backgroundImage: `url(${img})` }}
      ></button>

      {open ? (
        <button className={styles.closeBtn} onClick={() => setOpen(false)}>
          <img src={CloseBtnImg}></img>
        </button>
      ) : null}

      <ArtWorkDetail
        key={id}
        id={id}
        img={img}
        title={title}
        detail={detail}
        detailImg={detailImg}
        open={open}
      />
    </div>
  )
}

ArtWork.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  detail: PropTypes.string.isRequired,
  detailImg: PropTypes.array.isRequired,
}

export default ArtWork
