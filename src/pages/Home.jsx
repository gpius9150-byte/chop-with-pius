import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  Bike,
  Clock,
  Flame,
  Leaf,
  ShieldCheck,
  Star,
} from 'lucide-react'
import MenuCard from '../components/MenuCard'
import menuItems from '../data/menuItems'

const tickerItems = [
  'Free delivery over ₦15,000',
  'Cooked fresh every day',
  '30 minute average delivery',
  '100% Nigerian recipes',
]

function Home({ onAddToCart }) {
  const favourites = menuItems.slice(0, 3)

  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="hero-chips">
              <span className="chip">Fresh</span>
              <span className="chip">Tasty</span>
              <span className="chip">Delicious</span>
            </div>

            <h1>
              Hot meals
              <br />
              delivered
              <br />
              <span className="hl">to your door</span>
            </h1>

            <p className="hero-sub">
              Party jollof, peppery soups and smoky suya — cooked to order in our
              kitchen and rushed to you while it is still steaming.
            </p>

            <div className="hero-actions">
              <Link to="/menu" className="btn btn-lg">
                Order now <ArrowUpRight size={18} />
              </Link>
              <Link to="/menu" className="btn btn-ghost">
                See the menu
              </Link>
            </div>

            <ul className="hero-stats">
              <li>
                <strong>30 min</strong>
                <span>Average delivery</span>
              </li>
              <li>
                <strong>4.9/5</strong>
                <span>Customer rating</span>
              </li>
              <li>
                <strong>12k+</strong>
                <span>Meals served</span>
              </li>
            </ul>
          </div>

          <div className="hero-media">
            <div className="hero-photo">
              <img
                src="/images/hero-burger.jpg"
                alt="Freshly grilled food ready for delivery"
              />
            </div>
            <span className="hero-tape">Chop with Pius</span>
            <Link to="/menu" className="hero-badge" aria-label="Quick order">
              Quick
              <br />
              order
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        <div className="checker" />
      </section>

      {/* ---------- Ticker ---------- */}
      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {[0, 1].map((copy) => (
            <span key={copy}>
              {tickerItems.map((text) => (
                <span key={text}>
                  {text} <Star size={14} fill="currentColor" />
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ---------- Statement ---------- */}
      <section className="statement">
        <div className="container">
          <span className="script">Chop with Pius</span>
          <p>
            Started from a simple idea: make <em>healthy, delicious</em> Nigerian
            food accessible to everyone. What began as a passion for fresh
            ingredients and balanced nutrition has grown into a{' '}
            <em>trusted kitchen</em>.
          </p>
          <Link to="/about" className="btn btn-lg">
            More about us <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

      {/* ---------- Favourites ---------- */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="kicker">Ready to eat</span>
              <h2>Fan favourites</h2>
            </div>
            <p>
              The plates our customers keep coming back for. Pick one, choose
              your quantity and we will handle the rest.
            </p>
          </div>

          <div className="grid">
            {favourites.map((item) => (
              <MenuCard key={item.id} item={item} onAddToCart={onAddToCart} />
            ))}
          </div>

          <div className="center" style={{ marginTop: 40 }}>
            <Link to="/menu" className="btn btn-dark btn-lg">
              See full menu <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- Deal + features ---------- */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="deal-layout">
            <div className="deal">
              <span className="deal-clip" />
              <h3>Double trouble</h3>
              <p>
                Two bowls of party jollof, grilled chicken, fried plantain and a
                chilled zobo. Built for sharing.
              </p>
              <div className="deal-row">
                <span>Today only</span>
                <strong>₦8,500</strong>
              </div>
              <div className="barcode" />
              <p className="deal-note">Chop with Pius · Deal no. 349</p>
            </div>

            <div className="features">
              <div className="feature">
                <div className="feature-icon">
                  <Flame size={24} />
                </div>
                <h3>Cooked to order</h3>
                <p>
                  Nothing sits under a lamp. Your meal hits the pan after you
                  tap order.
                </p>
              </div>
              <div className="feature">
                <div className="feature-icon">
                  <Bike size={24} />
                </div>
                <h3>Fast delivery</h3>
                <p>
                  Riders on standby across Lagos, with live updates from kitchen
                  to gate.
                </p>
              </div>
              <div className="feature">
                <div className="feature-icon">
                  <ShieldCheck size={24} />
                </div>
                <h3>Sealed & safe</h3>
                <p>
                  Every pack is sealed and temperature checked before it leaves
                  the kitchen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="cta-band">
        <div className="container">
          <Clock size={28} style={{ margin: '0 auto 14px', color: '#ffd60a' }} />
          <h2>Hungry? We are already cooking</h2>
          <p>
            Order in under two minutes. Pay on delivery or transfer — your plate
            leaves the kitchen hot.
          </p>
          <Link to="/menu" className="btn btn-lg">
            Start your order <ArrowUpRight size={18} />
          </Link>
          <p style={{ marginTop: 18, marginBottom: 0 }}>
            <Leaf size={14} style={{ display: 'inline', marginRight: 6 }} />
            Vegetarian options available on request
          </p>
        </div>
      </section>
    </>
  )
}

export default Home
