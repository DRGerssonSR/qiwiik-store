import React from 'react';
import { Zap, Shield, Leaf, Star } from 'lucide-react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Energía Natural para tu
            <span className="highlight"> Estilo de Vida Activo</span>
          </h1>
          <p className="hero-description">
            Descubre las barras energéticas Qiwiik, elaboradas con ingredientes naturales 
            y diseñadas para mantenerte energizado durante todo el día.
          </p>
          <div className="hero-features">
            <div className="feature">
              <Zap className="feature-icon" />
              <span>Energía Instantánea</span>
            </div>
            <div className="feature">
              <Shield className="feature-icon" />
              <span>100% Natural</span>
            </div>
            <div className="feature">
              <Leaf className="feature-icon" />
              <span>Ingredientes Orgánicos</span>
            </div>
          </div>
          <div className="hero-actions">
            <button className="btn-primary">Ver Productos</button>
            <button className="btn-secondary">Saber Más</button>
          </div>
        </div>
        <div className="hero-image">
          <div className="product-showcase">
            <div className="product-card">
              <div className="product-image"></div>
              <div className="product-info">
                <h3>Qiwiik Protein Bar</h3>
                <div className="rating">
                  <Star className="star filled" />
                  <Star className="star filled" />
                  <Star className="star filled" />
                  <Star className="star filled" />
                  <Star className="star filled" />
                  <span>4.9</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
