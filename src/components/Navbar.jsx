import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu as MenuIcon, ShoppingBag, X } from 'lucide-react'

function Navbar({ cartCount, onCartOpen }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="navbar">
      <div className="shell navbar-inner">
        <NavLink to="/" className="logo" onClick={closeMenu}>
          <span className="logo-mark">CP</span>
          Chop with Pius
        </NavLink>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <MenuIcon size={22} />}
        </button>

        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <NavLink to="/" end onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/menu" onClick={closeMenu}>
            Menu
          </NavLink>
          <NavLink to="/about" onClick={closeMenu}>
            About
          </NavLink>
          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>
          <button
            type="button"
            className="cart-badge"
            onClick={onCartOpen}
            aria-label={`Open cart, ${cartCount} item${cartCount === 1 ? '' : 's'}`}
          >
            <ShoppingBag size={14} />
            Cart · {cartCount}
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
