import { useState } from 'react'
import './App.css'

function App() {
  const [cartCount, setCartCount] = useState(0)

  const truffles = [
    { id: 1, name: 'Signature Gold', desc: 'Dark chocolate ganache with edible gold leaf', price: '$4.50', img: '/truffle_dark_gold.png' },
    { id: 2, name: 'Raspberry Noir', desc: 'Dark chocolate dusted with tart raspberry powder', price: '$4.00', img: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Raspberry_chocolate_truffle_from_Mary_Ann%27s_Chocolates_Dessert%2C_March_2011.jpg' },
    { id: 3, name: 'Hazelnut Praline', desc: 'Milk chocolate shell with roasted hazelnut center', price: '$4.00', img: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Truffles_with_nuts_and_chocolate_dusting_in_detail.jpg' }
  ]

  return (
    <div className="app">
      <header className="header animate-fade-in delay-100">
        <div className="container header-content">
          <div className="logo">Luxe Truffles</div>
          <nav className="nav">
            <a href="#home">Home</a>
            <a href="#menu">Menu</a>
            <a href="#about">About</a>
          </nav>
          <div className="cart">
            <button className="cart-btn">
              Cart ({cartCount})
            </button>
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="hero animate-fade-in delay-200">
          <div className="container hero-container">
            <div className="hero-text">
              <h1>The Art of Chocolate</h1>
              <p>Handcrafted artisan truffles made with the finest sustainably sourced cacao and exquisite ingredients.</p>
              <div className="hero-actions">
                <a href="#menu" className="btn-primary">Shop Collection</a>
                <a href="#about" className="btn-outline">Our Story</a>
              </div>
            </div>
            <div className="hero-image-wrapper">
               <img src="/truffle_dark_gold.png" alt="Signature Gold Truffle" className="hero-image" />
            </div>
          </div>
        </section>

        <section id="menu" className="menu-section animate-fade-in delay-300">
          <div className="container">
            <div className="section-header">
              <h2>Signature Collection</h2>
              <p>Discover our carefully curated selection of fine truffles.</p>
            </div>
            <div className="product-grid">
              {truffles.map(truffle => (
                <div key={truffle.id} className="product-card">
                  <div className="product-image-container">
                    <img src={truffle.img} alt={truffle.name} className="product-image" />
                  </div>
                  <div className="product-info">
                    <h3>{truffle.name}</h3>
                    <p>{truffle.desc}</p>
                    <div className="product-footer">
                      <span className="price">{truffle.price}</span>
                      <button onClick={() => setCartCount(c => c + 1)} className="btn-primary add-to-cart">Add</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-brand">
            <h2>Luxe Truffles</h2>
            <p>Elevating the chocolate experience.</p>
          </div>
          <div className="footer-links">
            <div>
              <h4>Shop</h4>
              <a href="#">Collections</a>
              <a href="#">Gifts</a>
            </div>
            <div>
              <h4>About</h4>
              <a href="#">Our Story</a>
              <a href="#">Sourcing</a>
            </div>
            <div>
              <h4>Support</h4>
              <a href="#">Contact</a>
              <a href="#">FAQ</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Luxe Truffles. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
