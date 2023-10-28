import { useState } from 'react'
import {
  IoMdArrowDropleftCircle,
  IoMdArrowDroprightCircle,
} from 'react-icons/io'
import '../styles/gallery.css'

interface GalleryImage {
  path: string
  // link: string
}

interface GalleryProps {
  images: GalleryImage[]
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    )
  }

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    )
  }

  return (
    <div>
      <p className="gallery_title">뉴질랜드 대한생활체육회 활동</p>
      <div className="gallery_container">
        <div className="galleryimg_container">
          {/* <a href={images[currentIndex].link}>
            <img
              className="galleryimg"
              src={images[currentIndex].path}
              alt={`${currentIndex + 1}`}
            />
          </a> */}
          <div className="gallery_buttonContainer">
            <button className="gallery_button" onClick={prevImage}>
              <IoMdArrowDropleftCircle />
            </button>
            <button className="gallery_button" onClick={nextImage}>
              <IoMdArrowDroprightCircle />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery
