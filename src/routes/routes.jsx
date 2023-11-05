import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import MainLayout from "../layout/MainLayout";
import AvailableFoods from "../pages/availableFoods/AvailableFoods";
import AddFood from "../pages/addFood/AddFood";
import ManageFoods from "../pages/manageMyFoods/ManageFoods";
import FoodRequest from "../pages/myFoodRequest/FoodRequest";
import Contact from "../pages/contact/Contact";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Dashboard from "../layout/Dashboard";
import Profile from "../pages/dashboard/Profile";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/available-foods',
                element: <AvailableFoods></AvailableFoods>
            },
            {
                path: '/add-food',
                element: <AddFood></AddFood>
            },
            {
                path: '/manage-foods',
                element: <ManageFoods></ManageFoods>
            },
            {
                path: '/food-request',
                element: <FoodRequest></FoodRequest>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children:[
            {
                path: 'profile',
                element:<Profile></Profile>
            }
        ]
    }
]);

export default routes


