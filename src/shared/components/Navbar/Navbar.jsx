import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight , faBars} from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { useAppContext } from "../context/AppContext";

const Navbar = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useAppContext();
  const toggleSidebar = () => {
    setIsSidebarOpen(true);
  };

  const userData = {
    username: "Pixsellz", 
    notifications: 2, 
  };
  const { username, notifications } = userData;
  const firstLetter = username ? username.charAt(0) : "";
  const showNotification = username && true;
  return (
    <header role="banner">
    <nav>
      <div className="page-property">
      <div className={`sidebar-open ${isSidebarOpen ? 'active' : ''}`} onClick={toggleSidebar}>
        <FontAwesomeIcon className="open-icon" icon={faBars} size="xl" style={{color: "#000000",}} />
        </div>
        <div className="navbar-icon">
          <span>A</span>
          <p>ABC</p>
        </div>
        
        <div className="orientation">
          <div className="manufacturing">
            <FontAwesomeIcon
              icon={faAngleRight}
              style={{ color: "#000000" }}
            />
            <p>Manufacturing</p>
          </div>
          <div className="subcategory">
            <FontAwesomeIcon
              icon={faAngleRight}
              style={{ color: "#000000" }}
            />
            <p>Ordering</p>
          </div>
        </div>
      </div>
      <div className="header-actions">
        {showNotification && (
          <div className="notification">
            <FontAwesomeIcon icon={faBell} size="xl" style={{ color: "#000000" }} />
            {notifications > 0 && (
              <span className="badge">{notifications}</span>
            )}
             {/* <span className="tooltip">Notifications</span> */}
          </div>
        )}
        {username ? (
          <div className="user-part">
            <div className="user-avatar">{firstLetter}</div>
            <div className="user-name">{username}</div>
          </div>
        ) : (
          <div className="login">
            <a href="/login">Login</a>
          </div>
        )}
      </div>
    </nav>
  </header>
  );
};

export default Navbar;
