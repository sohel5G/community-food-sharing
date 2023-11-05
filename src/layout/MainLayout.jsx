import { Outlet } from "react-router-dom";
import Footer from "../pages/footer/Footer";
import Header from "../pages/header/Header";

const MainLayout = () => {
    return (
        <div className="dark:bg-gray-600">
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;

