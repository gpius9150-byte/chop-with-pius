import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <span className="logo">
              <span className="logo-mark">CP</span>
              Chop with Pius
            </span>
            <p>
              Fresh Nigerian meals, cooked to order and delivered hot across
              Lagos. Party jollof, peppery soups and suya — every plate made
              with love.
            </p>
          </div>

          <div>
            <h3>Explore</h3>
            <ul className="footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/menu">Our menu</Link>
              </li>
              <li>
                <Link to="/about">About us</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3>Reach us</h3>
            <ul className="footer-links">
              <li>
                <a href="tel:+2348000000000">
                  <Phone size={13} style={{ display: 'inline', marginRight: 6 }} />
                  +234 8156849750
                </a>
              </li>
              <li>
                <a href="mailto:hello@chopwithpius.com">
                  <Mail size={13} style={{ display: 'inline', marginRight: 6 }} />
                  hello@chopwithpius.com
                </a>
              </li>
              <li>
                <span>
                  <MapPin size={13} style={{ display: 'inline', marginRight: 6 }} />
                  12 Food Street, Lagos
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Chop with Pius. All rights reserved.</span>
          <span>Fresh Nigerian meals, delivered with love.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
