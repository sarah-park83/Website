import { useEffect, useState } from 'react'
import '../styles/banner.css'

export default function Banner() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [animationsDone, setAnimationsDone] = useState(false)

  const textArray = [
    // eslint-disable-next-line react/jsx-key
    <h3>국민의 건강과</h3>,
    // eslint-disable-next-line react/jsx-key
    <h3>행복의 장을 여는</h3>,
    // eslint-disable-next-line react/jsx-key
    <h1>뉴질랜드대한생활체육회</h1>,
    // eslint-disable-next-line react/jsx-key
    <h4>New Zealand Korea Sports For All Athletic Association</h4>,
  ]

  useEffect(() => {
    if (currentTextIndex < textArray.length - 1) {
      const timeout = setTimeout(() => {
        setCurrentTextIndex((prevIndex) => prevIndex + 1)
      }, 2000)

      return () => clearTimeout(timeout)
    } else {
      setTimeout(() => {
        setAnimationsDone(true)
      }, 2000)
    }
  }, [currentTextIndex, textArray.length])

  return (
    <div className="homeHeader_banner">
      <div className="homeHeader_banner_content">
        <div className="homeHeader_banner_text">
          {textArray.map((text, index) => (
            <div
              key={index}
              className="banner_text"
              style={{
                opacity: index <= currentTextIndex || animationsDone ? 1 : 0,
                transition: 'opacity 1s ease',
              }}
            >
              {text}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
