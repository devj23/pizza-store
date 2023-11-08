import { FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer">
        <div className="footer-logo">
          <NavLink className="nav-logo" to="/">
            PIZZA
          </NavLink>
        </div>
        <ul className="social-list">
          <li className="social-item">
            <NavLink className="social-link" to="/">
              <FiTwitter />
            </NavLink>
          </li>
          <li className="social-item">
            <NavLink className="social-link" to="/">
              <FiInstagram />
            </NavLink>
          </li>
          <li className="social-item">
            <NavLink className="social-link" to="/">
              <FiLinkedin />
            </NavLink>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
