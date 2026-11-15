import { Link } from 'react-router-dom'
import { ArrowUpRight, Heart, Leaf, Sparkles, Target } from 'lucide-react'

function About() {
  return (
    <>
      <header className="page-head">
        <div className="container">
          <span className="script">Since day one</span>
          <h1>About us</h1>
          <p>
            A small kitchen with a big love for Nigerian cooking — now feeding
            hundreds of happy customers across Lagos.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container story">
          <div className="story-card">
            <h2>Our story</h2>
            <p>
              Chop with Pius started as a home kitchen serving friends and
              family. Word spread fast, orders kept coming, and what began as a
              weekend hustle became a full delivery kitchen.
            </p>
            <p>
              We still cook the same way: fresh peppers blended that morning,
              rice steamed in small batches, meat marinated overnight.
            </p>
            <Link to="/menu" className="btn btn-lg">
              Taste the menu <ArrowUpRight size={18} />
            </Link>
          </div>

          <div>
            <span className="kicker">What we do</span>
            <h2 style={{ fontSize: '2.2rem', marginBottom: 14 }}>
              Fresh Nigerian meals, delivered hot
            </h2>
            <p style={{ color: '#46527a', marginBottom: 18 }}>
              We prepare and deliver freshly cooked Nigerian meals, snacks and
              drinks. Customers browse our menu online and place orders in a few
              clicks — no phone calls, no queues.
            </p>
            <p style={{ color: '#46527a' }}>
              Every order is cooked to order, packed in sealed containers and
              handed to a rider with a temperature check before it leaves the
              kitchen.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <div>
              <span className="kicker">What drives us</span>
              <h2>Mission, vision & values</h2>
            </div>
          </div>

          <div className="about-grid">
            <div className="about-block">
              <Target size={26} style={{ color: '#1626c9', marginBottom: 12 }} />
              <h2>Our mission</h2>
              <p>To serve tasty, affordable and hygienic meals to everyone.</p>
            </div>
            <div className="about-block">
              <Sparkles size={26} style={{ color: '#1626c9', marginBottom: 12 }} />
              <h2>Our vision</h2>
              <p>To become the most loved food brand in Nigeria.</p>
            </div>
            <div className="about-block">
              <Heart size={26} style={{ color: '#1626c9', marginBottom: 12 }} />
              <h2>Our values</h2>
              <p>Quality, freshness, honesty and great customer service.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <Leaf size={28} style={{ margin: '0 auto 14px', color: '#ffd60a' }} />
          <h2>Made fresh. Served hot.</h2>
          <p>Come chop with us today — your next favourite plate is one tap away.</p>
          <Link to="/menu" className="btn btn-lg">
            Order now <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}

export default About
