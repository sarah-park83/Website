import '../styles/dropdownmenu.css'
import logo from '/images/logo.png'
import logo2 from '/images/logo2.png'
// import { Link } from 'react-router-dom'

export default function Dropdownmenu() {
  return (
    <div className="navbar">
      <a href="/">
        <img src={logo} alt="Logo" id="logo" />
      </a>

      <a href="#info">
        체육회 소개
        <div className="dropdown-content">
          <div className="dropdown">
            <div className="content-left">
              <p>국민의 건강과 행복의 장을 여는</p>
              <p>대한생활 체육회</p>
              <p>체육회 소개</p>
              <img src={logo2} alt="Logo2" id="logo2" />
            </div>

            <div className="content-right">
              <p>1</p>
              <p>1</p>
              <p>1</p>
            </div>
          </div>
        </div>
      </a>

      <a href="#association-info">단체소개</a>
      <a href="#info">대회정보</a>
      <a href="#news">알림마당</a>
      <a href="#docs">자료실</a>
      <a href="#coorporates">협력기관</a>
      <a href="#news">회원가입/회원증 확인</a>
    </div>
  )
}
