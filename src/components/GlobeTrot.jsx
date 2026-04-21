import '../styles/GlobeTrot.css'

import globeTrot1 from '../assets/globe1.jpg'

function GlobeTrot() {
  return (
    <section className="globe-trot">

      <div className="globe-left">
        <h2>Globe-trot with Pan Pacific</h2>

        <ul className="globe-menu">
          <li>All</li>
          <li>Road Trips</li>
          <li>Sustainable Travel</li>
          <li className="active">Photo Journal</li>
          <li>Romantic</li>
          <li>Family Bonding</li>
          <li>Jet Setting</li>
        </ul>

        <div className="globe-arrows">
          <button>←</button>
          <button>→</button>
        </div>
      </div>

      <div className="globe-right">

        <div className="travel-card">
          <img src={globeTrot1} alt="" />

          <div className="travel-body">
            <p>Singapore</p>
            <h3>Lorem ipsum dolor sit amet consectetur</h3>

            <div className="mini-tags">
              <span>Category</span>
              <span>Category</span>
            </div>
          </div>

          <div className="card-arrow">→</div>
        </div>

        <div className="travel-card">
          <img src={globeTrot1} alt="" />

          <div className="travel-body">
            <p>Singapore</p>
            <h3>Lorem ipsum dolor sit amet consectetur</h3>

            <div className="mini-tags">
              <span>Category</span>
              <span>Category</span>
            </div>
          </div>

          <div className="card-arrow">→</div>
        </div>

      </div>

    </section>
  )
}

export default GlobeTrot