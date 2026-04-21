import '../styles/RomanticEscapes.css'

import romantic from '../assets/romantic1.jpg'
import trending1 from '../assets/trending1.jpg'
import trending2 from '../assets/trending2.jpg'
import trending3 from '../assets/trending3.jpg'

function RomanticEscapes() {
    const cards = [
        {
            image: trending1,
            country: 'Canada',
            title: 'Top Whistler Honeymon or Babymoon Staycation Ideas',
            tags: ['Couple', 'Travel Guides', 'Winter', 'Honeymoon', 'Nature']
        },
        {
            image: trending2,
            country: 'Mexico',
            title: 'Best Tulum Beach Escape and Romantic Getaway Ideas',
            tags: ['Beach', 'Couple', 'Travel Guides', 'Luxury', 'Sunset']
        },
        {
            image: trending3,
            country: 'Brazil',
            title: 'Top Rio de Janeiro Adventure and Luxury Holiday Ideas',
            tags: ['Adventure', 'Nature', 'City', 'Travel Guides', 'Summer']
        }
    ]

    return (
        <section
            className="romantic"
            style={{
                backgroundImage: `url(${romantic})`
            }}
        >
            <div className="romantic-overlay"></div>

            <div className="romantic-content">
                <div className="romantic-text">
                    <h2>Romantic Escapes</h2>

                    <p>
                        Discover the ultimate romantic getaway, your
                        dream destination for couples celebrating their
                        honeymoon or babymoon.
                    </p>

                    <button>Discover More</button>
                </div>

                <div className="romantic-cards">
                    {cards.map((item, index) => (
                        <div className="mini-card" key={index}>
                            <p className="mini-country">{item.country}</p>

                            <div className="mini-row">
                                <img src={item.image} alt="" />

                                <h3>
                                    {item.title}
                                </h3>
                            </div>

                            <div className="mini-tags">
                                {item
                                    .tags.map((tag, i) => (
                                        <span key={i}>{tag}</span>
                                    ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default RomanticEscapes