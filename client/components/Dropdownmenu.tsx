import '../styles/dropdownmenu.css'
import logo from '/images/logo.png'

import Dropdown1 from './Dropdown-1-체육회 소개'
// import { Link } from 'react-router-dom'

export default function Dropdownmenu() {
  return (
    <div className="navbar">
      <a href="/">
        <img src={logo} alt="Logo" id="logo" />
      </a>

      <Dropdown1 />

      <a href="#association-info">단체소개</a>
      <a href="#info">대회정보</a>
      <a href="#news">알림마당</a>
      <a href="#docs">자료실</a>
      <a href="#coorporates">협력기관</a>
      <a href="#news">회원가입/회원증 확인</a>
    </div>
  )
}
