import '../styles/CategoryStrip.css'

import category1 from '../assets/category1.jpg'
import category2 from '../assets/category2.jpg'
import category3 from '../assets/category3.jpg'

function CategoryStrip() {
  const items = [
    {
      image: category1,
      title: 'For Couples'
    },
    {
      image: category2,
      title: 'For Family'
    },
    {
      image: category3,
      title: 'For Business'
    }
  ]

  return (
    <section className="category-strip">
      {items.map((item, index) => (
        <div
          className="strip-card"
          key={index}
          style={{
            backgroundImage: `url(${item.image})`
          }}
        >
          <div className="strip-overlay"></div>
          <h3>{item.title}</h3>
        </div>
      ))}
    </section>
  )
}

export default CategoryStrip