import { useState } from 'react'
import hero1 from '../assets/hero1.jpg'
import hero2 from '../assets/hero2.jpg'
import hero3 from '../assets/hero3.jpg'
import '../styles/Hero.css'

function Hero() {
  const slides = [
    {
      image:
        hero1,
      title: 'Travel guide to Melbourne',
      subtitle: 'PARKROYAL Monash Melbourne'
    },
    {
      image:
        hero2,
      title: 'Luxury stay in Singapore',
      subtitle: 'PAN PACIFIC Singapore'
    },
    {
      image:
        hero3,
      title: 'Escape to the city',
      subtitle: 'PARKROYALTY Collection'
    }
  ]

  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${slides[currentSlide].image})`
      }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <p className="hero-tag">February Spotlight</p>

        <h1>{slides[currentSlide].title}</h1>

        <p>{slides[currentSlide].subtitle}</p>

        <span>More details →</span>
      </div>

      <div className="hero-dots">
        {slides.map((slide, index) => (
          <button
            key={index}
            className={
              currentSlide === index ? 'dot active' : 'dot'
            }
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </section>
  )
}

export default Hero