import { useEffect, useState } from 'react'
import '../styles/banner.css'

export default function Banner() {
  const [currentTextIndex, setCurrentTextIndex] = useState(-1) // Start with -1 to hide all texts initially
  const [animationsDone, setAnimationsDone] = useState(false)

  const textArray = [
    '국민의 건강과',
    '행복의 장을 여는',
    '뉴질랜드대한생활체육회',
    'New Zealand Korea Sports For All Athletic Association',
  ]

  useEffect(() => {
    if (currentTextIndex < textArray.length - 1) {
      const timeout = setTimeout(() => {
        setCurrentTextIndex((prevIndex) => prevIndex + 1)
      }, 1000)

      return () => clearTimeout(timeout)
    } else {
      setTimeout(() => {
        setAnimationsDone(true)
      }, 1000)
    }
  }, [currentTextIndex, textArray.length])

  return (
    <div className="homeHeader_banner">
      <div className="homeHeader_banner_content">
        <div className="homeHeader_banner_text">
          {textArray.map((text, index) => {
            let Element = 'h3'

            if (index === 2) {
              Element = 'h1'
            } else if (index === 3) {
              Element = 'h4'
            }

            return (
              <div
                key={index}
                className={`banner_text ${
                  (index <= currentTextIndex || animationsDone) && 'show'
                }`}
              >
                {Element === 'h1' ? (
                  <h1>{text}</h1>
                ) : Element === 'h4' ? (
                  <h4>{text}</h4>
                ) : (
                  <h3>{text}</h3>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
