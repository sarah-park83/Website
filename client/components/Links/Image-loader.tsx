import { useState, useEffect } from 'react'

interface ImageLoaderProps {
  src: string
  alt: string
  className?: string
}

function ImageLoader({ src, alt, className }: ImageLoaderProps) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadImage = async () => {
      try {
        const image = new Image()
        image.src = src

        await image.decode()

        setIsLoading(false)
      } catch (error) {
        console.error('Error loading image:', error)
      }
    }

    loadImage()
  }, [src])

  return (
    <div className="image-container">
      {isLoading ? (
        <div className="loading-text">Loading Image...</div>
      ) : (
        <img className={className} src={src} alt={alt} />
      )}
    </div>
  )
}

export default ImageLoader
