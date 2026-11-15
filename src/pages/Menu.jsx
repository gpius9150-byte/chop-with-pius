import { useState } from 'react'
import { SearchX } from 'lucide-react'
import MenuCard from '../components/MenuCard'
import menuItems from '../data/menuItems'

function Menu({ onAddToCart }) {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')

  const categories = ['All', ...new Set(menuItems.map((item) => item.category))]

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = category === 'All' || item.category === category
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <>
      <header className="page-head">
        <div className="container">
          <span className="script">Something for every appetite</span>
          <h1>Our menu</h1>
          <p>
            Everything is cooked after you order. Search a dish, filter by
            category, and build your plate.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <input
            type="search"
            className="search"
            placeholder="Search for a meal…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search the menu"
          />

          <div className="filters">
            {categories.map((cat) => (
              <button
                key={cat}
                className={cat === category ? 'filter active' : 'filter'}
                onClick={() => setCategory(cat)}
                aria-pressed={cat === category}
              >
                {cat}
              </button>
            ))}
          </div>

          {filteredItems.length > 0 ? (
            <div className="grid">
              {filteredItems.map((item) => (
                <MenuCard key={item.id} item={item} onAddToCart={onAddToCart} />
              ))}
            </div>
          ) : (
            <div className="empty">
              <SearchX size={34} style={{ margin: '0 auto 12px', color: '#1626c9' }} />
              <strong>No meals found</strong>
              <p>Try another search or pick a different category.</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default Menu
