import '../../styles/dropdownmenu.css'
import logo from '/images/logo.png'
import Dropdown1 from './Dropdown-1-체육회 소개'
import Dropdown2 from './Dropdown-2-단체소개'
import Dropdown3 from './Dropdown-3-대회정보'
import Dropdown4 from './Dropdown-4-알림마당'
import Dropdown5 from './Dropdown-5-자료실'
import Dropdown6 from './Dropdown-6-협력기관'
// import { Link } from 'react-router-dom'

export default function Dropdownmenu() {
  return (
    <div className="navbar">
      <a href="/">
        <img src={logo} alt="Logo" id="logo" />
      </a>

      <Dropdown1 />
      <Dropdown2 />
      <Dropdown3 />
      <Dropdown4 />
      <Dropdown5 />
      <Dropdown6 />

      <a href="#news">회원가입/회원증 확인</a>
    </div>
  )
}
