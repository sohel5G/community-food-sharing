import { Link, NavLink, Outlet } from "react-router-dom";
import Footer from "../pages/footer/Footer";
import useThemeMode from "../hooks/useThemeMode";
import headerlogoblack from "../assets/Logo/header-logo_black.png"
import headerlogowhite from "../assets/Logo/header-logo_white.png"
import { useContext } from "react";
import { AllContext } from "../provider/Authprovider";
import "./mainLayout.css"
import { MdDarkMode } from 'react-icons/md';
import { MdLightMode } from 'react-icons/md';
import logoBlack from "../assets/Logo/logo_black.png"
import logowhite from "../assets/Logo/logo_white.png"

const MainLayout = () => {
    const { themeMode, changeThemeMode } = useThemeMode();
    const { user } = useContext(AllContext);
    
    return (
        

        <>

        <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">

                    {/* Navbar */}
                    <div className="bg-gray-50 dark:bg-gray-800 shadow-md">
                        <div className="navbar container mx-auto flex justify-between">

                            {/* Mobile menu Icon  */}
                            <div className="flex-none lg:hidden">
                                <label htmlFor="my-drawer-3" aria-label="open sidebar" className="bg-primary-defaultPrimaryColor text-white hover:bg-primary-defaultPrimaryColor p-[9px] rounded-md cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                                </label>
                            </div>


                            {/* Website Header Logo */}
                            <div>
                                <Link to={'/'} className="flex items-center">
                                    <img
                                        src={themeMode === 'light' ? headerlogoblack : headerlogowhite}
                                        className="mr-3 w-36"
                                        alt="Logo"
                                    />
                                </Link>
                            </div>

                            
                            {/* Navbar menu items  */}
                            <div className="flex-none hidden lg:block">
                                <ul className="menu menu-horizontal gap-2 header-menu">
                                    
                                    <li>
                                        <NavLink
                                            to={'/'}
                                            className="hover:!bg-primary-defaultPrimaryColor hover:!text-white text-base dark:text-white"
                                        >
                                            Home
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to={'/available-foods'}
                                            className="hover:!bg-primary-defaultPrimaryColor hover:!text-white text-base dark:text-white"
                                        >
                                            Available Foods
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to={'/dashboard/add-food'}
                                            className="hover:!bg-primary-defaultPrimaryColor hover:!text-white text-base dark:text-white"
                                        >
                                            Add Food
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to={'/dashboard/manage-foods'}
                                            className="hover:!bg-primary-defaultPrimaryColor hover:!text-white text-base dark:text-white"
                                        >
                                            Manage My Foods
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to={'/dashboard/food-request'}
                                            className="hover:!bg-primary-defaultPrimaryColor hover:!text-white text-base dark:text-white"
                                        >
                                            My Food Request
                                        </NavLink>
                                    </li>

                                </ul>
                            </div>


                            <div className="flex gap-4 items-center justify-center">
                                <button className="flex justify-center items-center themeSwitchBtn text-lg" onClick={changeThemeMode}>
                                    {themeMode === 'light' ?
                                        <> <span className="text-black hover:text-primary-myPrimaryColor flex items-center gap-1 border p-1 rounded-full border-black">
                                            <MdDarkMode></MdDarkMode>
                                        </span>
                                        </> :
                                        <> <span className="text-white hover:text-primary-myPrimaryColor flex items-center gap-1 border p-1 rounded-full border-white">
                                            <MdLightMode></MdLightMode>
                                        </span>
                                        </>
                                    }
                                </button>
                                {
                                    !user ? <>
                                        <Link to={'/login'}>
                                            <button
                                                type="button"
                                                className="text-white bg-primary-700 hover:bg-primary-800 font-medium rounded-lg text-base px-4 py-2 text-center"
                                            >
                                                Log In
                                            </button>
                                        </Link>
                                    </> :
                                        <>
                                            <Link to={'/dashboard/profile'}>
                                                <button
                                                    type="button"
                                                    className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                                                    id="user-menu-button"
                                                    aria-expanded="false"
                                                    data-dropdown-toggle="user-dropdown"
                                                    data-dropdown-placement="bottom"
                                                >
                                                    <span className="sr-only">Open user menu</span>
                                                    <img
                                                        className="w-9 h-9 rounded-full"
                                                        src={user?.photoURL || "https://i.ibb.co/k2mWfq6/placeholder.jpg"}
                                                        alt="user photo"
                                                    />
                                                </button>
                                            </Link>
                                        </>
                                }
                            </div>

                        </div>
                   </div>

                    {/* Page content here */}
                    
                    <main className="dark:bg-gray-600">
                        <Outlet></Outlet>
                    </main>
                    <Footer></Footer>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <div>
                        
                    </div>
                    <ul className="menu p-4 w-80 min-h-full bg-gray-50 dark:bg-gray-800 header-menu">
                        {/* Sidebar content here */}
                        <li> 
                            <img
                            className="w-32 mx-auto lg:mx-auto"
                            src={themeMode === 'light' ? logoBlack : logowhite}
                            alt="Logo" /> 
                        </li>
                        
                        <li className="mt-5">
                            <NavLink
                                to={'/'}
                                className="hover:!bg-primary-defaultPrimaryColor hover:!text-white text-base dark:text-white"   
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="mt-5">
                            <NavLink
                                to={'/available-foods'}
                                className="hover:!bg-primary-defaultPrimaryColor hover:!text-white text-base dark:text-white"
                            >
                                Available Foods
                            </NavLink>
                        </li>
                        <li className="mt-5">
                            <NavLink
                                to={'/dashboard/add-food'}
                                className="hover:!bg-primary-defaultPrimaryColor hover:!text-white text-base dark:text-white"
                            >
                                Add Food
                            </NavLink>
                        </li>
                        <li className="mt-5">
                            <NavLink
                                to={'/dashboard/manage-foods'}
                                className="hover:!bg-primary-defaultPrimaryColor hover:!text-white text-base dark:text-white"
                            >
                                Manage My Foods
                            </NavLink>
                        </li>
                        <li className="mt-5">
                            <NavLink
                                to={'/dashboard/food-request'}
                                className="hover:!bg-primary-defaultPrimaryColor hover:!text-white text-base dark:text-white"
                            >
                                My Food Request
                            </NavLink>
                        </li>

                    </ul>
                </div>
            </div>


        </>


    );
};

export default MainLayout;

