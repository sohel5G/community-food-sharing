import { Outlet } from "react-router-dom";
import Footer from "../pages/footer/Footer";
import Header from "../pages/header/Header";

const MainLayout = () => {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default MainLayout;

