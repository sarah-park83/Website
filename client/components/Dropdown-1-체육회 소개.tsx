import '../styles/dropdownmenu.css'
import logo2 from '/images/logo2.png'

export default function Dropdown1() {
  return (
    <a href="#info">
      체육회 소개
      <div className="dropdown-content">
        <div className="dropdown">
          <div className="content-left">
            <p>국민의 건강과 행복의 장을 여는</p>
            <p>대한생활 체육회</p>
            <h3>체육회 소개</h3>
            <img src={logo2} alt="Logo2" id="logo2" />
          </div>

          <div className="content-right">
            <p>체육회 소개</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
          </div>
        </div>
      </div>
    </a>
  )
}
