import { MdMap, MdCall, MdEmail } from 'react-icons/md'
import '../styles/footer.css'

export default function Footer() {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <h3 className="footer-logo">
          뉴질랜드
          <br />
          대한생활체육회
        </h3>
        <div className="footer-info">
          <p>상호 : (사)뉴질랜드 대한생활체육회 | 대표자명 : 김웅기</p>
          <p>이메일 : nzklsct@gmail.com</p>
        </div>
        <p className="footer-company-name">뉴질랜드대한생활체육회 © 2023</p>
      </div>

      <div className="footer-center">
        <div>
          <p>
            Contact
            <MdEmail className="icon" />
            <a className="email" href="mainto:nzklsct@gmail.com">
              nzklsct@gmail.com
            </a>
          </p>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <span>About us</span>
          뉴질랜드대한생활체육회는 순수 민간 비영리 법인단체로서 정치, 종교, 등
          모든 분야와 무관한 국민생활체육의 권장, 발전을 목표로 하고 있습니다.
        </p>
      </div>
    </footer>
  )
}
