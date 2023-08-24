// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-container">
    <div className="top-container">
      <div className="wave-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          className="wave-img"
          alt="wave"
        />
        <h1 className="wave-heading">Wave</h1>
      </div>
      <ul className="ul-items">
        <li>
          <Link className="list-items" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="list-items" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="list-items" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
