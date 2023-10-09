

import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";

const Notification = () => {
  const [isOpen, setIsOpen] = useState(false);
  const userData = {
    username: "Pixsellz",
    notifications: 2,
  };
  const { username } = userData;
  const showNotification = username && true;
  const notifications = [
    {
      id: 1,
      title: "Success",
      text: "Anyone with access can view your invited visitors",
      image: "/images/success.png",
      read: false,
    },
    {
      id: 2,
      title: "Info",
      text: "Anyone with access can view your invited visitors",
      image: "/images/info.png",
      read: false,
    },
    {
      id: 3,
      title: "Success",
      text: "Anyone with access can view your invited visitors",
      image: "/images/success.png",
      read: true,
    },
  ];
  const unreadNotifications = notifications.filter(
    (notification) => !notification.read
  );

  // useRef ile notification-box ref oluşturuluyor
  const notificationBoxRef = useRef(null);

  // useEffect ile sayfa üzerindeki tıklamalar dinleniyor
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        !e.target.closest(".notification-box") &&
        !e.target.closest(".not-icon")
      ) {
        // notification-box dışına tıklanıldığında isOpen state'i false yapılıyor
        setIsOpen(false);
      }
    };

    // Event listener'ı eklemek için useEffect içinde kullanıyoruz
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Component kaldırıldığında event listener'ı kaldırıyoruz
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      {showNotification && (
        <div
          className={`not-icon cursor-pointer relative p-2 rounded select-none hover:bg-gray-200 duration-75 ${
            isOpen ? "bg-gray-200" : ""
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <FontAwesomeIcon
            icon={faBell}
            size="xl"
            style={{ color: "#000000" }}
          />
          {unreadNotifications.length > 0 && (
            <span className="select-none badge bg-red-500 text-white rounded-full px-2 py-1 text-xs absolute top-2 left-4">
              {unreadNotifications.length}
            </span>
          )}
        </div>
      )}

      {isOpen && (
          <div
           ref={notificationBoxRef}
           className="notification-box absolute right-0 translate-x-20 top-8 mt-4 w-96 bg-white border border-gray-200 shadow-lg rounded-lg pt-1">
          {notifications.map((notification, index) => (
            <div
              key={notification.id}
              className={`p-2 ${
                index === notifications.length - 1 ? "" : " border-b"
              }`}
            >
              <div className="flex items-center">
                <div className="w-8 h-8 mr-2">
                  <img
                    src={notification.image}
                    alt=""
                    className="rounded-full"
                  />
                </div>
                <div className="flex-grow">
                  <h4 className="text-base font-medium">{notification.title}</h4>
                  <p className="text-sm text-gray-500 w-max">
                    {notification.text}
                  </p>
                </div>
                {notification.read === false && (
                  <div className="w-2 h-2 bg-blue-500 rounded-full mb-5"></div>
                )}
              </div>
            </div>
          ))}

          <div className="p-2">
            <Link to="/notification-page">
              <button className="w-full bg-gray-100 text-black font-medium py-2 rounded focus:outline-none">
                Show All
              </button>
            </Link>
          </div>
          {notifications.length === 0 && (
            <div className="no-notification flex flex-col items-center justify-center p-4">
              <img
                src="/images/notification.png"
                alt=""
                className="w-40 h-40 mb-4"
              />
              <p className="text-gray-500 text-lg">
                Your notifications will appear here.
              </p>
            </div>
          )}
        </div>
     
      )}
    </div>
  );
};

export default Notification;

