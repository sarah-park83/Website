import logo2 from '/images/logo2.png'

export default function Dropdown2() {
  return (
    <a href="#association-info">
      단체소개
      <div className="dropdown-content" id="dropdown-content2">
        <div className="dropdown">
          <div className="content-left">
            <p>국민의 건강과 행복의 장을 여는</p>
            <p>대한생활 체육회</p>
            <h3>단체소개</h3>
            <img src={logo2} alt="Logo2" id="logo2" />
          </div>

          <div className="content-right">
            <div className="right-line" id="line-1">
              <p id="first-orange">단체소개</p>
              <div className="links">
                <a href="#1">Link1</a>
                <a href="#2">Link2</a>
                <a href="#3">Link3</a>
                <a href="#4">Link4</a>
              </div>
            </div>

            <div className="right-line" id="line-2">
              <p>체육회 소개</p>
              <div className="links">
                <a href="#1">Link1</a>
                <a href="#2">Link2</a>
                <a href="#3">Link3</a>
                <a href="#4">Link4</a>
                <a href="#4">Link5</a>
              </div>
            </div>

            <div className="right-line" id="line-2">
              <p>대회정보</p>
              <div className="links">
                <a href="#1">Link1</a>
                <a href="#2">Link2</a>
                <a href="#3">Link3</a>
              </div>
            </div>

            <div className="right-line" id="line-2">
              <p>알림마당</p>
              <div className="links">
                <a href="#1">Link1</a>
                <a href="#2">Link2</a>
                <a href="#3">Link3</a>
                <a href="#4">Link4</a>
              </div>
            </div>

            <div className="right-line" id="line-2">
              <p>자료실</p>
              <div className="links">
                <a href="#1">Link1</a>
              </div>
            </div>

            <div className="right-line">
              <p>협력기관</p>
              <div className="links">
                <a href="#1">Link1</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  )
}
