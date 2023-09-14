import '../../styles/dropdownmenu.css'
import logo from '/images/logo.png'
import Dropdown1 from './Dropdown-1-체육회 소개'
import Dropdown2 from './Dropdown-2-단체소개'
import Dropdown4 from './Dropdown-4-알림마당'
import Dropdown6 from './Dropdown-6-스폰서'

export default function Dropdownmenu() {
  return (
    <div className="navbar">
      <a href="/">
        <img src={logo} alt="Logo" id="logo" />
      </a>

      <Dropdown1 />
      <Dropdown2 />
      <Dropdown4 />
      <Dropdown6 />

      <a href="#news">회원가입/회원증 확인</a>
    </div>
  )
}
