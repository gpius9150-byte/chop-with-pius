import { useState } from 'react'
import { Check, Minus, Plus } from 'lucide-react'

function MenuCard({ item, onAddToCart }) {
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    onAddToCart(item, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
    setQuantity(1)
  }

  return (
    <article className="card">
      <div className="card-photo">
        <img src={item.image} alt={item.name} loading="lazy" />
        <span className="tag">{item.category}</span>
      </div>

      <div className="card-body">
        <h3>{item.name}</h3>
        <p className="card-desc">{item.description}</p>
        <p className="price">₦{item.price.toLocaleString()}</p>

        <div className="quantity">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            aria-label={`Decrease quantity of ${item.name}`}
          >
            <Minus size={16} />
          </button>
          <span>{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            aria-label={`Increase quantity of ${item.name}`}
          >
            <Plus size={16} />
          </button>
        </div>

        <button className="btn" onClick={handleAdd}>
          {added ? (
            <>
              <Check size={16} /> Added
            </>
          ) : (
            'Add to cart'
          )}
        </button>
      </div>
    </article>
  )
}

export default MenuCard
