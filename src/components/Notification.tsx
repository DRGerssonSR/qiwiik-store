import React, { useEffect } from 'react';
import { CheckCircle, X } from 'lucide-react';
import './Notification.css';

interface NotificationProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({ message, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="notification">
      <div className="notification-content">
        <CheckCircle className="notification-icon" />
        <span className="notification-message">{message}</span>
        <button className="notification-close" onClick={onClose}>
          <X className="close-icon" />
        </button>
      </div>
    </div>
  );
};

export default Notification;
