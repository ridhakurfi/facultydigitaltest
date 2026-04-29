import '../styles/Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <button className="menu-btn">☰</button>
        <h2 className="logo">PAN PACIFIC</h2>
      </div>

      <div className="nav-right">
        <a href="#">Discovery</a>
        <a href="#">Join | Sign In</a>
        <button className="btn-outline">Book Nao</button>
        <button className="btn-fill">Diner is Served</button>
      </div>
    </nav>
  )
}

export default Navbar