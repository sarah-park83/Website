import '../../../styles/Sub-pages/subpage.css'
import '../../../styles/Sub-pages/단체소개 css/전국체육회현황-content.css'
import Dropdownmenu from '../../Dropdown/Dropdownmenu'
import Dropdownmenu_mobile from '../../Dropdown/Dropdownmenu-mobile'
import MobileCheck from '../../Dropdown/Mobile-check'
import Footer from '../../Footer'
import Header from '../Link-header'
import { MdHome } from 'react-icons/md'
import { BiSolidRightArrow } from 'react-icons/bi'
import { Link } from 'react-router-dom'

export function 산하단체() {
  const isMobile = MobileCheck()

  return (
    <div>
      {isMobile ? (
        <div>
          <Dropdownmenu_mobile />
        </div>
      ) : (
        <div>
          <Dropdownmenu />
        </div>
      )}

      <Header />

      <div className="subpage-container">
        <div className="location-container">
          <MdHome
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="homeIcon"
          />
          <Link to="/">
            <h2>홈</h2>
          </Link>
          <BiSolidRightArrow
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="icon-style"
          />
          <p>단체소개</p>
          <BiSolidRightArrow
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="icon-style"
          />
          <Link to="/group/sanha">
            <h2>산하단체</h2>
          </Link>
        </div>

        {!isMobile && (
          <div className="navbar-container">
            <div className="navbarVertricle">
              <div className="title">
                <h2>단체소개</h2>
              </div>
              <div className="itemList">
                <Link to="/group/nation">
                  <div className="navItem">
                    <div className="navLink">전국체육회현황</div>
                  </div>
                </Link>
                <Link to="/group/internation">
                  <div className="navItem">
                    <div className="navLink">국제체육회현황</div>
                  </div>
                </Link>
                <Link to="/group/sports">
                  <div className="navItem">
                    <div className="navLink">종목별 운영현황</div>
                  </div>
                </Link>
                <Link to="/group/sanha">
                  <div className="navItem">
                    <div className="navLink">산하단체</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        )}

        <div className="content-container">
          <div>
            <div className="subMenu-title-container">
              <h2>산하단체</h2>
              <h3>대한생활체육회의 산하단체입니다.</h3>
            </div>
            <div>
              <div className="group-list-container">
                <div className="group-list-title">대한유청소년생활체육회</div>
                <div className="group-list-img-container">
                  <div className="group-list-img-container2">
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        window.open(
                          'https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fzxc.png?alt=media&amp;token=27da75a4-572e-4358-a1d3-8743f6130f05',
                          '_blank',
                          'width=380,height=500,top=100,left=100'
                        )
                      }}
                    >
                      <img
                        className="group-image"
                        src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fzxc.png?alt=media&amp;token=27da75a4-572e-4358-a1d3-8743f6130f05"
                        alt="대한유청소년생활체육회"
                      />
                    </button>
                  </div>
                </div>
                <div className="group-list-text-container">
                  <p>
                    회장 : 김의종
                    <br />
                    체육회명 : 대한유청소년생활체육회
                  </p>
                </div>
              </div>

              <div className="group-list-container">
                <div className="group-list-title">대한노인생활체육회</div>
                <div className="group-list-img-container">
                  <div className="group-list-img-container2">
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        window.open(
                          'https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fqwe.png?alt=media&amp;token=c29f7ee3-de6f-4fd5-bf89-aae9c150486f',
                          '_blank',
                          'width=380,height=500,top=100,left=100'
                        )
                      }}
                    >
                      <img
                        className="group-image"
                        src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fqwe.png?alt=media&amp;token=c29f7ee3-de6f-4fd5-bf89-aae9c150486f"
                        alt="대한노인생활체육회"
                      />
                    </button>
                  </div>
                </div>
                <div className="group-list-text-container">
                  <p>
                    회장 : 강석만
                    <br />
                    체육회명 : 대한노인생활체육회
                  </p>
                </div>
              </div>

              <div className="group-list-container">
                <div className="group-list-title">대한직장생활체육회</div>
                <div className="group-list-img-container">
                  <div className="group-list-img-container2">
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        window.open(
                          'https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fasd.png?alt=media&amp;token=baf5e375-cd1d-446b-ad0c-b7b66008506d',
                          '_blank',
                          'width=380,height=500,top=100,left=100'
                        )
                      }}
                    >
                      <img
                        className="group-image"
                        src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fasd.png?alt=media&amp;token=baf5e375-cd1d-446b-ad0c-b7b66008506d"
                        alt="대한직장생활체육회"
                      />
                    </button>
                  </div>
                </div>
                <div className="group-list-text-container">
                  <p>
                    회장 : 이충재
                    <br />
                    체육회명 : 대한직장생활체육회
                  </p>
                </div>
              </div>

              <div className="group-list-container">
                <div className="group-list-title">대한다문화생활체육회</div>
                <div className="group-list-img-container">
                  <div className="group-list-img-container2">
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        window.open(
                          'https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fsch.png?alt=media&amp;token=680c4b70-e496-4e4f-ab31-ff99c86977b9',
                          '_blank',
                          'width=380,height=500,top=100,left=100'
                        )
                      }}
                    >
                      <img
                        className="group-image"
                        src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fsch.png?alt=media&amp;token=680c4b70-e496-4e4f-ab31-ff99c86977b9"
                        alt="대한다문화생활체육회"
                      />
                    </button>
                  </div>
                </div>
                <div className="group-list-text-container">
                  <p>
                    회장 : 심철효
                    <br />
                    체육회명 : 대한다문화생활체육회
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
