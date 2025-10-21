import React from 'react';
import { ShoppingCart, Star, Zap } from 'lucide-react';
import type { Product } from '../types/Product';
import './ProductCard.css';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  onAddToCart
}) => {

  const getCategoryIcon = () => {
    return <Zap className="category-icon" />;
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      protein: '#e74c3c',
      energy: '#f39c12',
      recovery: '#9b59b6',
      snack: '#27ae60'
    };
    return colors[category as keyof typeof colors] || '#3498db';
  };

  return (
    <div className={`product-card ${!product.inStock ? 'out-of-stock' : ''}`}>
      <div className="product-image">
        <div className="product-category" style={{ backgroundColor: getCategoryColor(product.category) }}>
          {getCategoryIcon()}
          <span>{product.category}</span>
        </div>
        {!product.inStock && (
          <div className="out-of-stock-badge">Agotado</div>
        )}
      </div>
      
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        
        <div className="nutritional-info">
          <div className="nutrition-item">
            <span className="nutrition-label">Calorías:</span>
            <span className="nutrition-value">{product.nutritionalInfo.calories}</span>
          </div>
          <div className="nutrition-item">
            <span className="nutrition-label">Proteína:</span>
            <span className="nutrition-value">{product.nutritionalInfo.protein}g</span>
          </div>
        </div>
        
        <div className="product-rating">
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="star filled" />
            ))}
          </div>
          <span className="rating-text">4.8</span>
        </div>
        
        <div className="product-footer">
          <div className="price">
            <span className="currency">$</span>
            <span className="amount">{product.price}</span>
          </div>
          <button 
            className="add-to-cart-btn"
            onClick={() => onAddToCart(product)}
            disabled={!product.inStock}
          >
            <ShoppingCart className="cart-icon" />
            {product.inStock ? 'Agregar' : 'Agotado'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
