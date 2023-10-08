import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/Main/MainLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import Orders from "../pages/orders/Orders";
import Requests from "../pages/requests/Requests";
import ShopFloor from "../pages/shop-floor/ShopFloor";
import ProductionPlan from "../pages/production-plan/ProductionPlan";
import Forcast from "../pages/forcast/Forcast";

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
                path: "requests",
                element: <Requests />
            },
            {
                path: "shop-floor",
                element: <ShopFloor />
            },
            {
                path: "production-plan",
                element: <ProductionPlan />
            },
            {
                path: "forcast",
                element: <Forcast />
            }
        ]
    }
]);

export default Routes;