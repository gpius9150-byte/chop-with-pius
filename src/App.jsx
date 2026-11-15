import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
import Home from './pages/Home'
import About from './pages/About'
import Menu from './pages/Menu'
import Contact from './pages/Contact'
import DemoOne from './components/demo'

const STORAGE_KEY = 'chop-with-pius-cart'

function loadCart() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    const parsed = raw ? JSON.parse(raw) : []
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

function App() {
  const [cartItems, setCartItems] = useState(loadCart)
  const [cartOpen, setCartOpen] = useState(false)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems))
    } catch {
      // storage unavailable — cart still works for this session
    }
  }, [cartItems])

  const addToCart = (item, quantity = 1) => {
    setCartItems((current) => {
      const existing = current.find((line) => line.id === item.id)
      if (existing) {
        return current.map((line) =>
          line.id === item.id
            ? { ...line, quantity: line.quantity + quantity }
            : line
        )
      }
      return [
        ...current,
        {
          id: item.id,
          name: item.name,
          price: item.price,
          image: item.image,
          quantity,
        },
      ]
    })
    setCartOpen(true)
  }

  const updateQuantity = (id, quantity) => {
    setCartItems((current) =>
      quantity < 1
        ? current.filter((line) => line.id !== id)
        : current.map((line) =>
            line.id === id ? { ...line, quantity } : line
          )
    )
  }

  const removeItem = (id) => {
    setCartItems((current) => current.filter((line) => line.id !== id))
  }

  const cartCount = cartItems.reduce((sum, line) => sum + line.quantity, 0)
  const cartTotal = cartItems.reduce(
    (sum, line) => sum + line.quantity * line.price,
    0
  )

  return (
    <>
      <Navbar cartCount={cartCount} onCartOpen={() => setCartOpen(true)} />
      <main>
        <Routes>
          <Route path="/" element={<Home onAddToCart={addToCart} />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu onAddToCart={addToCart} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/demo" element={<DemoOne />} />
        </Routes>
      </main>
      <Footer />

      <CartDrawer
        open={cartOpen}
        items={cartItems}
        total={cartTotal}
        onClose={() => setCartOpen(false)}
        onUpdateQuantity={updateQuantity}
        onRemove={removeItem}
        onClear={() => setCartItems([])}
      />
    </>
  )
}

export default App
