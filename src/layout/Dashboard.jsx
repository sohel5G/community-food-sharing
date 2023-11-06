import Footer from "../pages/footer/Footer";
import { Link, NavLink, Outlet } from "react-router-dom";
import "./dashboard.css";
import { FaUtensils, FaEnvelope } from 'react-icons/fa';
import { PiBowlFoodBold } from 'react-icons/pi';
import { MdFoodBank } from 'react-icons/md';

const Dashboard = () => {
    return (
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
    );
};

export default Dashboard;

