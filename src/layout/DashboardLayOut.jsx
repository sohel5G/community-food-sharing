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

// Dashboard imports
import "./DashboardLayOut.css";
import { FaUtensils, FaEnvelope } from 'react-icons/fa';
import { PiBowlFoodBold } from 'react-icons/pi';
import { MdFoodBank } from 'react-icons/md';



const DashboardLayOut = () => {
    const { themeMode, changeThemeMode } = useThemeMode();
    const { user } = useContext(AllContext);
    return (


  <>

        <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">

                    {/* Navbar */}
                    <div className="bg-gray-50 dark:bg-gray-800 shadow">
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
                    
                    


                    <div className="dark:bg-gray-600">
                        <section className="dark:bg-gradient-to-b dark:from-gray-700 dark:to-gray-600">

                            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-3">
                                <div className="bg-gray-50 dark:bg-gradient-to-b dark:from-gray-800 dark:to-gray-700">
                                    <aside className="flex items-center lg:min-h-[80vh]">
                                        <div className="flex-1 px-3 py-4">
                                            <ul className="space-y-2 font-medium dashboard-navigation">
                                                <li>
                                                    <Link
                                                        to={'/dashboard'}
                                                        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group"
                                                    >
                                                        <svg
                                                            className="flex-shrink-0 w-5 h-5 transition duration-75 group-hover:text-primary-defaultPrimaryColor dark:group-hover:text-primary-defaultPrimaryColor"
                                                            aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="currentColor"
                                                            viewBox="0 0 22 21"
                                                        >
                                                            <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                                            <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                                                        </svg>
                                                        <span className="flex-1 ml-3 whitespace-nowrap group-hover:text-primary-defaultPrimaryColor dark:group-hover:text-primary-defaultPrimaryColor">Dashboard</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <NavLink
                                                        to={'/dashboard/add-food'}
                                                        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                                                    >
                                                        <PiBowlFoodBold
                                                            className="flex-shrink-0 transition duration-75 group-hover:text-primary-defaultPrimaryColor dark:group-hover:text-primary-defaultPrimaryColor text-xl"
                                                        ></PiBowlFoodBold>
                                                        <span className="flex-1 ml-3 whitespace-nowrap group-hover:text-primary-defaultPrimaryColor dark:group-hover:text-primary-defaultPrimaryColor">Add Foods</span>
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink
                                                        to={'/dashboard/manage-foods'}
                                                        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                                                    >
                                                        <FaUtensils
                                                            className="flex-shrink-0 transition duration-75 group-hover:text-primary-defaultPrimaryColor dark:group-hover:text-primary-defaultPrimaryColor text-xl"
                                                        ></FaUtensils>
                                                        <span className="flex-1 ml-3 whitespace-nowrap group-hover:text-primary-defaultPrimaryColor dark:group-hover:text-primary-defaultPrimaryColor">Manage My Foods</span>
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink
                                                        to={'/dashboard/food-request'}
                                                        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                                                    >
                                                        <MdFoodBank
                                                            className="flex-shrink-0 transition duration-75 group-hover:text-primary-defaultPrimaryColor dark:group-hover:text-primary-defaultPrimaryColor text-xl"
                                                        ></MdFoodBank>
                                                        <span className="flex-1 ml-3 whitespace-nowrap group-hover:text-primary-defaultPrimaryColor dark:group-hover:text-primary-defaultPrimaryColor">My Food Request</span>
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink
                                                        to={'/dashboard/profile'}
                                                        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                                                    >
                                                        <svg
                                                            className="flex-shrink-0 w-5 h-5 transition duration-75 group-hover:text-primary-defaultPrimaryColor dark:group-hover:text-primary-defaultPrimaryColor"
                                                            aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="currentColor"
                                                            viewBox="0 0 20 18"
                                                        >
                                                            <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                                                        </svg>
                                                        <span className="flex-1 ml-3 whitespace-nowrap group-hover:text-primary-defaultPrimaryColor dark:group-hover:text-primary-defaultPrimaryColor">My Account</span>
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                                                    >
                                                        <FaEnvelope
                                                            className="flex-shrink-0 transition duration-75 group-hover:text-primary-defaultPrimaryColor dark:group-hover:text-primary-defaultPrimaryColor text-xl"
                                                        ></FaEnvelope>
                                                        <span className="flex-1 ml-3 whitespace-nowrap group-hover:text-primary-defaultPrimaryColor dark:group-hover:text-primary-defaultPrimaryColor">Inbox</span>
                                                        <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                                                            3
                                                        </span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </aside>
                                </div>

                                <div className="lg:col-span-3">
                                    <div className="lg:min-h-[80vh] flex justify-center items-center">
                                        <div className="flex-1">
                                            <Outlet></Outlet>
                                        </div>
                                    </div>
                                </div>


                            </div>



                        </section>
                        <section>
                            <Footer></Footer>
                        </section>
                    </div>



                {/* page content end here */}




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

export default DashboardLayOut;