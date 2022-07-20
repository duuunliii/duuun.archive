import styles from '../styles/navbar.module.scss'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className={styles.navbar}>
      <button>PROFILE</button>
      <button>WORKS</button>
    </div>
  )
}

export default NavBar
