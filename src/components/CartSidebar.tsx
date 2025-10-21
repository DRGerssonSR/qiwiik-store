import React, { useState } from 'react';
import { X, Plus, Minus, ShoppingBag, CreditCard } from 'lucide-react';
import { useCart } from '../context/CartContext';
import CheckoutModal from './CheckoutModal';
import './CartSidebar.css';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose }) => {
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    clearCart, 
    getTotalItems, 
    getTotalPrice 
  } = useCart();
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleCheckout = () => {
    setIsCheckoutOpen(true);
  };

  const handleCompleteCheckout = () => {
    clearCart();
    setIsCheckoutOpen(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="cart-overlay" onClick={onClose}>
      <div className="cart-sidebar" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h2 className="cart-title">
            <ShoppingBag className="cart-icon" />
            Carrito ({getTotalItems()})
          </h2>
          <button className="close-btn" onClick={onClose}>
            <X className="close-icon" />
          </button>
        </div>

        <div className="cart-content">
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <ShoppingBag className="empty-icon" />
              <p>Tu carrito está vacío</p>
              <span>Agrega algunos productos para comenzar</span>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {cartItems.map((item) => (
                  <div key={item.product.id} className="cart-item">
                    <div className="item-image">
                      <div className="product-placeholder">
                        <span>Qiwiik</span>
                      </div>
                    </div>
                    
                    <div className="item-details">
                      <h3 className="item-name">{item.product.name}</h3>
                      <p className="item-price">${item.product.price}</p>
                      
                      <div className="quantity-controls">
                        <button 
                          className="quantity-btn"
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        >
                          <Minus className="quantity-icon" />
                        </button>
                        <span className="quantity">{item.quantity}</span>
                        <button 
                          className="quantity-btn"
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        >
                          <Plus className="quantity-icon" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="item-actions">
                      <button 
                        className="remove-btn"
                        onClick={() => removeFromCart(item.product.id)}
                      >
                        <X className="remove-icon" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="cart-summary">
                <div className="summary-row">
                  <span>Subtotal:</span>
                  <span>${getTotalPrice().toFixed(2)}</span>
                </div>
                <div className="summary-row">
                  <span>Envío:</span>
                  <span>Gratis</span>
                </div>
                <div className="summary-row total">
                  <span>Total:</span>
                  <span>${getTotalPrice().toFixed(2)}</span>
                </div>
              </div>

              <div className="cart-actions">
                <button className="checkout-btn" onClick={handleCheckout}>
                  <CreditCard className="checkout-icon" />
                  Proceder al Pago
                </button>
                <button className="clear-btn" onClick={clearCart}>
                  Limpiar Carrito
                </button>
              </div>
            </>
          )}
        </div>
      </div>
      
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        totalAmount={getTotalPrice()}
        totalItems={getTotalItems()}
        onComplete={handleCompleteCheckout}
      />
    </div>
  );
};

export default CartSidebar;
