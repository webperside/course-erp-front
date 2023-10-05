import React, { useState } from "react";
import "./Notification.css";
import { useNotificationContext } from "../context/NotificationContext";
import { Link } from "react-router-dom";

const Notification = () => {
  const { isNotificationOpen} = useNotificationContext();
  const [notifications] = useState([
    { id: 1, title: "Success", text: 'Anyone with access can view your invited visitors', image: "/images/succes.png", read: false },
    { id: 2, title: "Info", text: 'Anyone with access can view your invited visitors', image: '/images/info.png', read: false },
    { id: 3, title: "Success", text: 'Anyone with access can view your invited visitors', image: "/images/succes.png", read: true },
    { id: 4, title: "Info", text: 'Anyone with access can view your invited visitors', image: '/images/info.png', read: true },
    { id: 5, title: "Success", text: 'Anyone with access can view your invited visitors', image: "/images/succes.png", read: true },
    { id: 6, title: "Info", text: 'Anyone with access can view your invited visitors', image: '/images/info.png', read: true },
  ]);
  return (
    <div className={`notificationbox ${isNotificationOpen ? "open" : ""}`}>
      <div className="notifications">
        {notifications.slice(0, 3).map((notification) => (
          <div
            key={notification.id}
            className={`notification ${notification.read ? "read" : "unread"}`}
          >
            <div className="notification-icon">
              <img src={notification.image} alt="" />
            </div>
            <div className="notification-text">
              <p>{notification.title}</p>
              <p>{notification.text}</p>
            </div>
            {!notification.read && (
              <div
                className="not-read-unread"
              ></div>
            )}
          </div>
        ))}
        {notifications.length !== 0 && (
      <Link to="/notifications"><div className="show-all-button" >Show All</div></Link> 
        )}
      </div>
      {notifications.length === 0 && (
        <div className="no-notification">
          <img src="/images/notification.png" alt="" />
          <p>Your notifications will appear here.</p>
        </div>
      )}
    </div>
  );
};

export default Notification;
