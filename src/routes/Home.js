import Header from '../components/Header.js'
import NavBar from '../components/NavBar.js'
import Profile from '../components/Profile.js'
import WorksList from '../components/WorksList.js'

function Home() {
  window.scrollTo(0, 0)
  return (
    <div>
      <Header />
      {/* <Profile /> */}
      <WorksList />
    </div>
  )
}

export default Home
