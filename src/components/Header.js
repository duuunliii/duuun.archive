import styles from '../styles/header.module.scss'
import profileImg from '../assets/profile.jpg'

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.profileimg}>
        <img src={profileImg} alt="Profile Image" />
      </div>
      <h1 className={styles.profilename}>
        이다은<br></br>Daeun Lee
      </h1>
    </div>
  )
}

export default Header
