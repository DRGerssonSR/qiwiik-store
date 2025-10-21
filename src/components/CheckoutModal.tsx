import React, { useState } from 'react';
import { CheckCircle, CreditCard, User, Mail, Phone } from 'lucide-react';
import './CheckoutModal.css';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  totalAmount: number;
  totalItems: number;
  onComplete: () => void;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ 
  isOpen, 
  onClose, 
  totalAmount, 
  totalItems, 
  onComplete 
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simular procesamiento de pago
    setTimeout(() => {
      setIsProcessing(false);
      setIsCompleted(true);
      
      // Simular completar la compra después de mostrar el éxito
      setTimeout(() => {
        onComplete();
        onClose();
        setIsCompleted(false);
        setFormData({ name: '', email: '', phone: '', address: '' });
      }, 2000);
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="checkout-overlay" onClick={onClose}>
      <div className="checkout-modal" onClick={(e) => e.stopPropagation()}>
        {!isCompleted ? (
          <>
            <div className="checkout-header">
              <h2>Finalizar Compra</h2>
              <button className="close-btn" onClick={onClose}>
                ×
              </button>
            </div>

            <div className="checkout-content">
              <div className="order-summary">
                <h3>Resumen del Pedido</h3>
                <div className="summary-item">
                  <span>Productos ({totalItems}):</span>
                  <span>${totalAmount.toFixed(2)}</span>
                </div>
                <div className="summary-item">
                  <span>Envío:</span>
                  <span>Gratis</span>
                </div>
                <div className="summary-item total">
                  <span>Total:</span>
                  <span>${totalAmount.toFixed(2)}</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="checkout-form">
                <h3>Información de Contacto</h3>
                
                <div className="form-group">
                  <label htmlFor="name">
                    <User className="form-icon" />
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    <Mail className="form-icon" />
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="tu@email.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">
                    <Phone className="form-icon" />
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="address">Dirección de Envío</label>
                  <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    placeholder="Calle, número, ciudad, código postal"
                    rows={3}
                  />
                </div>

                <div className="payment-method">
                  <h3>Método de Pago</h3>
                  <div className="payment-options">
                    <label className="payment-option">
                      <input type="radio" name="payment" value="card" defaultChecked />
                      <CreditCard className="payment-icon" />
                      <span>Tarjeta de Crédito/Débito</span>
                    </label>
                    <label className="payment-option">
                      <input type="radio" name="payment" value="cash" />
                      <span>Pago contra entrega</span>
                    </label>
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="checkout-btn"
                  disabled={isProcessing}
                >
                  {isProcessing ? 'Procesando...' : `Pagar $${totalAmount.toFixed(2)}`}
                </button>
              </form>
            </div>
          </>
        ) : (
          <div className="checkout-success">
            <CheckCircle className="success-icon" />
            <h2>¡Compra Completada!</h2>
            <p>Gracias por tu compra. Recibirás un email de confirmación pronto.</p>
            <div className="success-details">
              <p><strong>Total:</strong> ${totalAmount.toFixed(2)}</p>
              <p><strong>Productos:</strong> {totalItems}</p>
              <p><strong>Email:</strong> {formData.email}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutModal;
