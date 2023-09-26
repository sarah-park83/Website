import '../../styles/link-header.css'
import test1 from '../../images/Link-Header/test1.png'
import test2 from '../../images/Link-Header/test2.png'
import test3 from '../../images/Link-Header/test3.png'
import test4 from '../../images/Link-Header/test4.jpg'

export default function Header() {
  const getRandomImage = () => {
    const images = [test1, test2, test3, test4]

    const randomIndex = Math.floor(Math.random() * images.length)

    const imagePath = images[randomIndex]

    return imagePath
  }

  return (
    <header className="header-image">
      <img src={getRandomImage()} alt="Header Sport Background" />
      <h1 id="header-quote">스포츠가 최고의 국민건강 복지입니다</h1>
    </header>
  )
}
