import { useState } from 'react'
import '../styles/DestinationExplorer.css'

import destination1 from '../assets/destination1.jpg'
import destination2 from '../assets/destination2.jpg'
import destination3 from '../assets/destination3.jpg'
import destination4 from '../assets/destination4.jpg'
import destination5 from '../assets/destination5.jpg'
import destination6 from '../assets/destination6.jpg'

function DestinationExplorer() {
  const places = [
    {
      name: 'Singapore',
      image: destination1
    },
    {
      name: 'Australia',
      image: destination2
    },
    {
      name: 'Malaysia',
      image: destination3
    },
    {
      name: 'China',
      image: destination4
    },
    {
      name: 'Canada',
      image: destination5
    },
    {
      name: 'More destinations',
      image: destination6
    }
  ]

  const [activePlace, setActivePlace] = useState(0)

  return (
    <section className="destination">
      <div className="destination-left">
        <h2>
          Explore your next adventure
          <br />
          with Pan Pacific
        </h2>

        <p>
          Find your next adventure with our
          handpicked travel inspiration, exciting
          guides, and spotlighted destinations.
        </p>

        <div className="destination-list">
          {places.map((place, index) => (
            <button
              key={index}
              className={
                activePlace === index
                  ? 'place-btn active'
                  : 'place-btn'
              }
              onClick={() => setActivePlace(index)}
            >
              {place.name}
              {activePlace === index && <span>→</span>}
            </button>
          ))}
        </div>
      </div>

      <div className="destination-right">
        <img
          src={places[activePlace].image}
          alt={places[activePlace].name}
        />
      </div>
      <div className="destination-mobile">
        {places.map((place, index) => (
          <div className="destination-card" key={index}>
            <img src={place.image} alt={place.name} />
            <h3>{place.name}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default DestinationExplorer