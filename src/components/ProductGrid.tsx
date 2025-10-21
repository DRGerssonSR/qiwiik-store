import React, { useState } from 'react';
import ProductCard from './ProductCard';
import Notification from './Notification';
import type { Product } from '../types/Product';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import './ProductGrid.css';

const ProductGrid: React.FC = () => {
  const [, setFavorites] = useState<string[]>([]);
  const { addToCart } = useCart();
  const [notification, setNotification] = useState<{ message: string; isVisible: boolean }>({
    message: '',
    isVisible: false
  });

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    setNotification({
      message: `¡${product.name} agregado al carrito!`,
      isVisible: true
    });
  };

  const handleCloseNotification = () => {
    setNotification(prev => ({ ...prev, isVisible: false }));
  };

  const handleToggleFavorite = (productId: string) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <>
      <section className="product-grid-section" id="products">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Nuestros Productos</h2>
            <p className="section-description">
              Descubre nuestra amplia gama de barras energéticas naturales
            </p>
          </div>
          
          <div className="product-grid">
            {products.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
                onToggleFavorite={handleToggleFavorite}
              />
            ))}
          </div>
        </div>
      </section>
      
      <Notification
        message={notification.message}
        isVisible={notification.isVisible}
        onClose={handleCloseNotification}
      />
    </>
  );
};

export default ProductGrid;
