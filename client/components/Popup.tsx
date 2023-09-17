import React, { useState } from 'react'
import {
  IoMdArrowDropleftCircle,
  IoMdArrowDroprightCircle,
} from 'react-icons/io'

import '../styles/popup.css'

interface PopupProps {
  popupImagePaths: string[] // Specify the type of imagePaths prop
}

const Popup: React.FC<PopupProps> = ({ popupImagePaths }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : popupImagePaths.length - 1
    )
  }

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < popupImagePaths.length - 1 ? prevIndex + 1 : 0
    )
  }

  return (
    <div className="popup_container">
      <div className="headerPopup_container">
        <img
          className="headerPopup_img"
          src={popupImagePaths[currentIndex]}
          alt="Popup"
        />
        <div className="headerPopup_buttonContainer">
          <button onClick={prevImage} className="headerPopup_button">
            <IoMdArrowDropleftCircle />
          </button>
          <button onClick={nextImage} className="headerPopup_button">
            <IoMdArrowDroprightCircle />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Popup
