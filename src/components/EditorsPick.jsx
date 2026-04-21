import '../styles/EditorsPick.css'
import editorpick from '../assets/editorpick.jpg'

function EditorsPick() {
  return (
    <section className="editors-pick">
      <h2 className="editors-title">Editor's pick</h2>

      <div className="editors-content">
        <div className="image-box">
          <img src={editorpick} alt="Cocktail" />
        </div>

        <div className="text-box">
          <p className="country">Singapore</p>

          <h3>
            Article title max 2 liners than truncate goes here
          </h3>

          <div className="tag-list">
            <span>Couple</span>
            <span>Travel Guide</span>
            <span>Honey Moon</span>
            <span>Cities & Nightlife</span>
            <span>Romance</span>
          </div>

          <a href="#">Read more →</a>
        </div>
      </div>
    </section>
  )
}

export default EditorsPick