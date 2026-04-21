import '../styles/Trending.css'
import hero1 from '../assets/hero1.jpg'
import hero2 from '../assets/hero2.jpg'
import hero3 from '../assets/hero3.jpg'
import trending1 from '../assets/trending1.jpg'
import trending2 from '../assets/trending2.jpg'
import trending3 from '../assets/trending3.jpg'

function Trending() {
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
        <section className="trending">
            <div className="trending-header">
                <p className="small-title">What’s trending</p>
                <h2>Fresh ideas for your next escape</h2>
            </div>

            <div className="trending-grid">
                {cards.map((card, index) => (
                    <div
                        className="trend-card"
                        key={index}
                        style={{
                            backgroundImage: `url(${card.image})`
                        }}
                    >
                        <div className="card-overlay"></div>

                        <div className="card-content">
                            <p>{card.country}</p>
                            <h3>{card.title}</h3>
                            <div className="card-tags">
                                {card.tags.map((tag, i) => (
                                    <span key={i}>{tag}</span>
                                ))}
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    )
}

export default Trending