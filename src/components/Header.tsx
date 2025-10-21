import React, { useState } from 'react';
import { ShoppingCart, Heart, Zap } from 'lucide-react';
import { useCart } from '../context/CartContext';
import CartSidebar from './CartSidebar';
import './Header.css';

const Header: React.FC = () => {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="logo">
            <Zap className="logo-icon" />
            <span className="logo-text">Qiwiik</span>
          </div>
          
          <nav className="nav">
            <a href="#home" className="nav-link">Inicio</a>
            <a href="#products" className="nav-link">Productos</a>
            <a href="#about" className="nav-link">Nosotros</a>
            <a href="#contact" className="nav-link">Contacto</a>
          </nav>

          <div className="header-actions">
            <button className="action-btn">
              <Heart className="icon" />
            </button>
            <button className="action-btn" onClick={handleCartClick}>
              <ShoppingCart className="icon" />
              {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
            </button>
          </div>
        </div>
      </header>
      
      <CartSidebar isOpen={isCartOpen} onClose={handleCloseCart} />
    </>
  );
};

export default Header;
