import {
  IoMdArrowDropleftCircle,
  IoMdArrowDroprightCircle,
} from 'react-icons/io'

import '../styles/popup.css'

export default function Popup() {
  return (
    <div className="headerPopup_container">
      <a href="https://xn--vk1by6xrzecngs4l6obxj.com/article/anouncement/1/wBwT6IpiRh0pkWfXADw5">
        <img
          className="headerPopup_img"
          src="images/Popup/ad.jpeg"
          alt="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/mainPopup%2F%EB%8C%80%ED%95%9C%EC%83%9D%ED%99%9C%EC%B2%B4%EC%9C%A1%ED%9A%8C%20MOU%20%ED%9A%8C%EC%9B%90%20%EA%B0%80%EC%9E%85%20%ED%98%9C%ED%83%9D.jpg?alt=media&amp;token=05a33938-2875-48bf-8e6d-51f9482113f8"
        />
      </a>
      <div className="headerPopup_buttonContainer">
        <svg
          className="headerPopup_button"
          focusable="false"
          aria-hidden="true"
        >
          <IoMdArrowDropleftCircle />
        </svg>
        <svg
          className="headerPopup_button"
          focusable="false"
          aria-hidden="true"
        >
          <IoMdArrowDroprightCircle />
        </svg>
      </div>
    </div>
  )
}
