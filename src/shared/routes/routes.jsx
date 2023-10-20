import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/Main/MainLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import Orders from "../pages/orders/Orders";
import Notification from "../components/Notification/Notification";
import Profile from "../pages/profile/Profile";
import Panel from "../pages/profile/profile-pages/Panel";
import NotificationSettings from "../pages/profile/profile-pages/NotificationSettings";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "dashboard",
                element: <Dashboard />
            },
            {
                path: "orders",
                element: <Orders />
            },
            {
                path: "notifications",
                element: <Notification />
            },
            {
                path: "profile",
                element: <Profile/>,
                children: [
                    {
                        path: "panel",
                        element: <Panel />
                    },
                    {
                        path: "notification-settings",
                        element: <NotificationSettings />
                    }
                ]
            }
        ]
    }
]);

export default Routes;