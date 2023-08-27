import '../../styles/link-header.css'

export default function Header() {
  const getRandomImage = () => {
    const images = ['test1.jpg', 'test2.jpg', 'test3.jpg', 'test4.jpg']

    const randomIndex = Math.floor(Math.random() * images.length)

    const imagePath = `/images/Link-Header/${images[randomIndex]}`

    return imagePath
  }

  return (
    <header className="header-image">
      <img src={getRandomImage()} alt="Header Sport Background" />
      <h1 id="header-quote">스포츠가 최고의 국민건강 복지입니다</h1>
    </header>
  )
}
