import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Styles from '../styles/workslist.module.scss'

function Work({ id, title, img, genre, summary }) {
  return (
    <Link to={`/duuun/work/${id}`} className={Styles.work}>
      <h2 className={Styles.title}>{title}</h2>
      <img className={Styles.thumbnail} src={img} alt={title}></img>
      <p className={Styles.genre}>{genre}</p>
      <p className={Styles.summary}>{summary}</p>
    </Link>
  )
}

Work.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
}

export default Work
