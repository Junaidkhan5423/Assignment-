import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import ToastNotification from './ToastNotification'; // Ensure correct import path

const ToastManager = forwardRef(({ duration = 7000 }, ref) => {
  const [messages, setMessages] = useState([]);
  const [visibleToasts, setVisibleToasts] = useState([]);

  useEffect(() => {
    if (messages.length > 0 && visibleToasts.length < 3) {
      setVisibleToasts(currentToasts => [...currentToasts, { ...messages[0], bottomOffset: (currentToasts.length * 70) + 30 }]);
      setMessages(currentMessages => currentMessages.slice(1));
    }
  }, [messages, visibleToasts]);

  useImperativeHandle(ref, () => ({
    addMessage(message) {
      setMessages(currentMessages => [...currentMessages, message]);
    }
  }));

  const removeToast = id => {
    setVisibleToasts(currentToasts => currentToasts.filter(toast => toast.id !== id));
  };

  return (
    <div className="toast-container">
      {visibleToasts.map((toast, index) => (
        <ToastNotification
          key={toast.id}
          message={toast.message}
          duration={duration}
          setVisible={() => removeToast(toast.id)}
          bottomOffset={toast.bottomOffset} 
        />
      ))}
    </div>
  );
});

export default ToastManager;