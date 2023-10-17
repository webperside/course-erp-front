
import { NavLink, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons';   
import { useAppContext } from '../context/AppContext';
import './Sidebar.css'
import Dropdown from '../dropdown/Dropdown'; 
export default function Sidebar() {
    const { isSidebarOpen, setIsSidebarOpen } = useAppContext();

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    return (
        <main>
            <div className={`sidebar-main ${isSidebarOpen ? 'active' : ''}`}>
                <div>
                    <div className='sidebar-logo'>
                        <Link to="/">
                            ABC
                        </Link>
                        <div className={`sidebar-close ${isSidebarOpen ? 'active' : ''}`} onClick={closeSidebar}>
                            <FontAwesomeIcon icon={faTimes} className='close-icon' />
                        </div>
                    </div>
                    <Dropdown />
                    <div className='sidebar-menu'>
                        <h4>MAIN MENU</h4>
                        <div className='sidebar-body'>
                            <NavLink to="/dashboard">
                                <div className='side-menu'>
                                    <img src="/images/Vector1.svg" alt="" />
                                    <p>Dashboard</p>
                                </div>
                            </NavLink>
                            <NavLink to="/orders">
                                <div className='side-menu'>
                                    <img src="/images/Vector2.svg" alt="" />
                                    <p>Orders</p>
                                </div>
                            </NavLink>
                            <NavLink to="/requests">
                                <div className='side-menu'>
                                    <img src="/images/Vector3.svg" alt="" />
                                    <p>Requests</p>
                                </div>
                            </NavLink>
                            <NavLink to="/shop-floor">
                                <div className='side-menu'>
                                    <img src="/images/Vector4.svg" alt="" />
                                    <p>Shop Floor</p>
                                </div>
                            </NavLink>
                            <NavLink to="/production-plan">
                                <div className='side-menu'>
                                    <img src="/images/Vector5.svg" alt="" />
                                    <p>Production Plan</p>
                                </div>
                            </NavLink>
                            <NavLink to="/forcast">
                                <div className='side-menu'>
                                    <img src="/images/Vector6.svg" alt="" />
                                    <p>Forcast</p>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className='sidebar-bottom'>
                    <div className='sidebar-body'>
                        <NavLink to="/profile">
                            <hr />
                            <div className='side-menu'>
                                <img src="/images/Vector7.svg" alt="" />
                                <p>Profile</p>
                            </div>
                        </NavLink>
                        <NavLink to="/logout">
                            <div className='side-menu'>
                                <img src="/images/Vector8.svg" alt="" />
                                <p>Logout</p>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
        </main>
    )
}

