import React from 'react';
import { Zap, Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="logo">
              <Zap className="logo-icon" />
              <span className="logo-text">Qiwiik</span>
            </div>
            <p className="footer-description">
              Barras energéticas naturales para mantenerte activo y saludable. 
              Calidad premium con ingredientes orgánicos.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">Facebook</a>
              <a href="#" className="social-link">Instagram</a>
              <a href="#" className="social-link">Twitter</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Productos</h3>
            <ul className="footer-links">
              <li><a href="#protein">Barras Proteicas</a></li>
              <li><a href="#energy">Barras Energéticas</a></li>
              <li><a href="#recovery">Barras de Recuperación</a></li>
              <li><a href="#snack">Barras Snack</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Empresa</h3>
            <ul className="footer-links">
              <li><a href="#about">Nosotros</a></li>
              <li><a href="#mission">Misión</a></li>
              <li><a href="#values">Valores</a></li>
              <li><a href="#careers">Carreras</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Contacto</h3>
            <div className="contact-info">
              <div className="contact-item">
                <Mail className="contact-icon" />
                <span>info@qiwiik.com</span>
              </div>
              <div className="contact-item">
                <Phone className="contact-icon" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="contact-item">
                <MapPin className="contact-icon" />
                <span>123 Energy St, Health City</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Qiwiik. Todos los derechos reservados.</p>
          <div className="footer-bottom-links">
            <a href="#privacy">Privacidad</a>
            <a href="#terms">Términos</a>
            <a href="#cookies">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
