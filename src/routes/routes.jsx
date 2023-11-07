import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import AvailableFoods from "../pages/availableFoods/AvailableFoods";
import AddFood from "../pages/addFood/AddFood";
import ManageFoods from "../pages/manageMyFoods/ManageFoods";
import FoodRequest from "../pages/myFoodRequest/FoodRequest";
import Contact from "../pages/contact/Contact";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Profile from "../pages/dashboard/Profile";
import DashboardContent from "../pages/dashboard/DashboardContent";
import MainLayout from "../layout/MainLayout";
import DashboardLayOut from "../layout/DashboardLayOut";
import SingleFoodDetails from "../pages/availableFoods/SingleFoodDetails";
import PrivateRoute from "../privateRoute/PrivateRoute";
import Error404 from "../pages/errorPage/Error404";
import FoodEdit from "../pages/manageMyFoods/FoodEdit";
import ManageFoodStatus from "../pages/manageMyFoods/ManageFoodStatus";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <Error404></Error404>,
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
            },
            {
                path: '/available-food/:id',
                element: <PrivateRoute> <SingleFoodDetails></SingleFoodDetails> </PrivateRoute>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute> <DashboardLayOut></DashboardLayOut> </PrivateRoute>,
        errorElement: <Error404></Error404>,
        children: [
            {
                path: '',
                element: <DashboardContent></DashboardContent>
            },
            {
                path: 'profile',
                element: <Profile></Profile>
            },
            {
                path: 'add-food',
                element: <AddFood></AddFood>
            },
            {
                path: 'manage-foods',
                element: <ManageFoods></ManageFoods>
            },
            {
                path: 'food-request',
                element: <FoodRequest></FoodRequest>
            },
            {
                path: 'food/edit/:id',
                element: <FoodEdit></FoodEdit>
            },
            {
                path: 'foods/status/:id',
                element: <ManageFoodStatus></ManageFoodStatus>
            }
        ]
    }
]);

export default routes


