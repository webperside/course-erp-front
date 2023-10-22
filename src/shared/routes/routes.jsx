import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/Main/MainLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import Orders from "../pages/orders/Orders";
import Register from "../pages/register/Register";

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
                path: "register",
                element: <Register/>
            }
        ]
    }
]);

export default Routes;