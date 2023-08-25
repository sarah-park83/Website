import '../styles/footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h3 className="footer-logo">뉴질랜드대한생활체육회</h3>
        <div className="footer-info">
          <p>상호 : (사)대한생활체육회 | 대표자명 : 김균식</p>
          <p>고유번호 : 102-82-10135</p>
          <p>
            대표번호 : 02-2088-7508 | 팩스 : 02-2088-7509 | 이메일 :
            ksfaa21@naver.com
          </p>
          <p>주소 : 서울특별시 영등포구 버드나루로88, 인따르시아빌딩 101호</p>
        </div>
        <p className="footer-company-name">대한생활체육회 © 2021</p>
      </div>

      <div className="footer-center">
        <div>
          <div className="icon"></div>
          <p>
            <span>서울특별시 영등포구 버드나루로88</span>
            인따르시아빌딩 101호
          </p>
        </div>
        <div>
          <div className="icon"></div>
          <p>02-2088-7508</p>
        </div>
        <div>
          <div className="icon"></div>
          <p>
            <a href="mainto:ksfaa@naver.com">contact@ksfaa21@naver.com</a>
          </p>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <span>About us</span>
          대한생활체육회는 순수 민간 비영리 법인단체로서 정치, 종교, 등 모든
          분야와 무관한 국민생활체육의 권장, 발전을 목표로 하고 있습니다.
        </p>
      </div>
    </footer>
  )
}
