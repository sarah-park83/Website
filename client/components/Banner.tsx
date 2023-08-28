import { useEffect, useState } from 'react'
import '../styles/banner.css'

export default function Banner() {
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity((prevOpacity) => {
        if (prevOpacity >= 1) {
          clearInterval(interval)
          return 1
        }
        return prevOpacity + 0.1
      })
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="homeHeader_banner">
      <div className="homeHeader_banner_content">
        <div className="homeHeader_banner_text">
          <h3 className="banner_text" style={{ opacity }}>
            국민의 건강과
          </h3>
          <h3 className="banner_text" style={{ opacity }}>
            행복의 장을 여는
          </h3>
          <h1 className="banner_text" style={{ opacity }}>
            뉴질랜드대한생활체육회
          </h1>
          <p className="banner_text" style={{ opacity }}>
            New Zealand Korea Sports For All Athletic Association
          </p>
        </div>
      </div>
    </div>
  )
}
