import React, { createContext, useContext, useState, useEffect } from 'react';

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const toggleNotification = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };
  useEffect(() => {
    const handleDocumentClick = (e) => {
      if (isNotificationOpen && !e.target.closest('.notificationbox') && !e.target.closest('.not-icon') ){
        setIsNotificationOpen(false);
      }
    };
    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, );

  return (
    <NotificationContext.Provider value={{ isNotificationOpen, toggleNotification }}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotificationContext = () => {
  return useContext(NotificationContext);
};
