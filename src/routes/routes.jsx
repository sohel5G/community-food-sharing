import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/home/Home";
import MainLayout from "../layout/MainLayout";
import AvailableFoods from "../pages/availableFoods/AvailableFoods";
import AddFood from "../pages/addFood/AddFood";
import ManageFoods from "../pages/manageMyFoods/ManageFoods";
import FoodRequest from "../pages/myFoodRequest/FoodRequest";
import Contact from "../pages/contact/Contact";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path: '/available-foods',
                element:<AvailableFoods></AvailableFoods>
            },
            {
                path:'/add-food',
                element: <AddFood></AddFood>
            },
            {
                path:'/manage-foods',
                element:<ManageFoods></ManageFoods>
            },
            {
                path:'/food-request',
                element:<FoodRequest></FoodRequest>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            }
        ]
    },
]);

export default routes


