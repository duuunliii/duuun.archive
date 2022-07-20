import { useState } from 'react'
import Styles from '../styles/profile.module.scss'

function Profile() {
  return (
    <div className={Styles.profile}>
      <div className={Styles.info}>
        <h2>PROFILE</h2>
        <p>
          이다은 Daeun Lee <br></br>2018~ 서울예술대학교 영상학부 디지털아트
          전공 재학 <br></br> <br></br>소프트웨어 프로그래밍 Software
          Programming<br></br>
          Unity C# / Web Frontend (HTML, CSS, SCSS, JavaScript)
        </p>
      </div>

      <div className={Styles.info}>
        <h2>EXHIBITION</h2>
        <p>
          {' '}
          -2019 디지털아트 창작실습 'REN DEZ VOUS', 팀 일산 &lt;커먼히어로즈&gt;
          <br></br> -2020 디지털아트 창작실습 'LOG-IN', 팀 척 &lt;CHUCKLE&gt;
          <br></br>-2022 디지털아트 창작실습 'ENTER', 팀 둔
          &lt;MD그룹최종면접&gt;
        </p>
      </div>
    </div>
  )
}

export default Profile
