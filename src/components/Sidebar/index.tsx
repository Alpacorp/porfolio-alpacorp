import { Link, NavLink } from 'react-router-dom'
import RellenoA from '../../assets/images/rellenoA.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faLinkedin,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import './index.scss'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={RellenoA} alt="Alpacorp" />
        {/* <img className="sub-logo" src={logoSubtitle} alt="Alpacorp" /> */}
      </Link>
      <nav>
        <NavLink
          to="/"
          style={({ isActive }) =>
            isActive
              ? {
                  color: '#ffd700',
                }
              : {}
          }
        >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink to="/about" className="about-link">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink to="/contact" className="contact-link">
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/alejandro-palacios88/"
            target="blank"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a href="https://github.com/Alpacorp" target="blank">
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UCHeCQZ3dlEbX4hvqoV40ujg/featured"
            target="blank"
          >
            <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
