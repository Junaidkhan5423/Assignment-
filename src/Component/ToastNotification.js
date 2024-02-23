import React, { useEffect, useRef } from 'react';

const ToastNotification = ({ message, duration, setVisible, bottomOffset }) => {
  const timerRef = useRef();

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setVisible();
    }, duration);

    return () => clearTimeout(timerRef.current);
  }, [duration, setVisible]);

  return (
    <div
      className="toast-notification show"
      style={{bottom:` ${bottomOffset}px`  }}
    >
      <button className="close-button" onClick={() => setVisible()}>
      </button>
      <span className="message">{message}</span>
    </div>
  );
};

export default ToastNotification;