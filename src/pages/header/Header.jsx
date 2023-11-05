import { Link, NavLink } from "react-router-dom";
import useThemeMode from "../../hooks/useThemeMode";
import { MdDarkMode } from 'react-icons/md';
import { MdLightMode } from 'react-icons/md';
import headerlogowhite from "../../assets/Logo/header-logo_white.png"
import headerlogoblack from "../../assets/Logo/header-logo_black.png"
import "./header.css"

const Header = () => {
    const { changeThemeMode, themeMode } = useThemeMode();
    // const user = {user: 'coderloft@gmail.com'} 
    const user = null

    return (
        <>
            <nav className="bg-gray-50 dark:bg-gray-800 fixed w-full z-50 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
                <div className="container flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to={'/'} className="flex items-center">
                        <img
                            src={themeMode === 'light' ? headerlogoblack : headerlogowhite }
                            className="mr-3 w-36"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex gap-5 md:order-2">
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
                                        className="text-white bg-primary-700 hover:bg-primary-800 font-medium rounded-lg text-sm px-4 py-2 text-center md:mr-0"
                                    >
                                        Log In
                                    </button>
                                </Link>
                            </> :
                            <>
                                <div className="flex items-center md:order-2">
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
                                            className="w-8 h-8 rounded-full"
                                            src="https://picsum.photos/200"
                                            alt="user photo"
                                        />
                                    </button>
                                    {/* Dropdown menu */}
                                    <div
                                        className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                                        id="user-dropdown"
                                    >
                                        <div className="px-4 py-3">
                                            <span className="block text-sm text-gray-900 dark:text-white">
                                                Bonnie Green
                                            </span>
                                            <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                                                name@flowbite.com
                                            </span>
                                        </div>
                                        <ul className="py-2" aria-labelledby="user-menu-button">
                                            <li>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                                >
                                                    Dashboard
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                                >
                                                    Settings
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                                >
                                                    Sign out
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </>
                        }
                        
                        <button
                            data-collapse-toggle="navbar-sticky"
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center rounded-lg lg:hidden text-white bg-primary-defaultPrimaryColor"
                            aria-controls="navbar-sticky"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 17 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M1 1h15M1 7h15M1 13h15"
                                />
                            </svg>
                        </button>
                    </div>
                    <div
                        className="items-center justify-between hidden w-full lg:flex md:w-auto md:order-1"
                        id="navbar-sticky"
                    >
                        <ul className="header-menu flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 lg:flex-row lg:space-x-2 lg:mt-0 lg:border-0 dark:bg-gray-800 md:dark:bg-gray-800 dark:border-gray-700">
                            <li>
                                <NavLink
                                    to={'/'}
                                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                    aria-current="page"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={'/available-foods'}
                                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 mt-4 lg:mt-0"
                                >
                                    Available Foods
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={'/add-food'}
                                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 mt-4 lg:mt-0"
                                >
                                    Add Food
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={'/manage-foods'}
                                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 mt-4 lg:mt-0"
                                >
                                    Manage My Foods
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={'/food-request'}
                                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 mt-4 lg:mt-0"
                                >
                                    My Food Request
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;