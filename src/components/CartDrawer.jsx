import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2, Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'

function CartDrawer({
  open,
  items,
  total,
  onClose,
  onUpdateQuantity,
  onRemove,
  onClear,
}) {
  const [placed, setPlaced] = useState(false)
  const [placedTotal, setPlacedTotal] = useState(0)

  // Lock page scroll + close on Escape while the drawer is open
  useEffect(() => {
    if (!open) return

    const onKey = (event) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = previousOverflow
    }
  }, [open, onClose])

  useEffect(() => {
    if (!open) setPlaced(false)
  }, [open])

  const handleCheckout = () => {
    setPlacedTotal(total)
    onClear()
    setPlaced(true)
  }

  const count = items.reduce((sum, line) => sum + line.quantity, 0)

  return (
    <div className={open ? 'cart-root open' : 'cart-root'}>
      <button
        type="button"
        className="cart-overlay"
        onClick={onClose}
        aria-label="Close cart"
        tabIndex={open ? 0 : -1}
      />

      <aside
        className="cart-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Your cart"
      >
        <header className="cart-head">
          <h2>
            Your cart
            {count > 0 && <span className="cart-count-pill">{count}</span>}
          </h2>
          <button
            type="button"
            className="cart-close"
            onClick={onClose}
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </header>

        <div className="cart-body">
          {placed ? (
            <div className="cart-empty">
              <CheckCircle2 size={44} style={{ color: '#1626c9' }} />
              <h3>Order received!</h3>
              <p>
                We are firing up the pot. A rider will call you shortly to
                confirm delivery.
              </p>
              <p className="cart-placed-total">
                Total paid on delivery: ₦{placedTotal.toLocaleString()}
              </p>
              <button type="button" className="btn" onClick={onClose}>
                Keep browsing
              </button>
            </div>
          ) : items.length === 0 ? (
            <div className="cart-empty">
              <ShoppingBag size={44} style={{ color: '#1626c9' }} />
              <h3>Your cart is empty</h3>
              <p>Add a plate from the menu and it will show up here.</p>
              <Link to="/menu" className="btn" onClick={onClose}>
                Browse the menu
              </Link>
            </div>
          ) : (
            <ul className="cart-list">
              {items.map((item) => (
                <li key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} />
                  <div>
                    <h3>{item.name}</h3>
                    <p className="cart-unit">
                      ₦{item.price.toLocaleString()} each
                    </p>
                    <div className="cart-qty">
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        aria-label={`Reduce ${item.name}`}
                      >
                        <Minus size={14} />
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        aria-label={`Add another ${item.name}`}
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                  <div className="cart-item-end">
                    <strong>₦{(item.price * item.quantity).toLocaleString()}</strong>
                    <button
                      type="button"
                      className="cart-remove"
                      onClick={() => onRemove(item.id)}
                      aria-label={`Remove ${item.name} from cart`}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {!placed && items.length > 0 && (
          <footer className="cart-foot">
            <div className="cart-total">
              <span>Subtotal</span>
              <strong>₦{total.toLocaleString()}</strong>
            </div>
            <p className="cart-note">
              Delivery is free on orders above ₦15,000. Pay on delivery.
            </p>
            <button type="button" className="btn btn-lg" onClick={handleCheckout}>
              Checkout · ₦{total.toLocaleString()}
            </button>
          </footer>
        )}
      </aside>
    </div>
  )
}

export default CartDrawer
