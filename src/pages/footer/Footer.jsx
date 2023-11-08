import logoBlack from "../../assets/Logo/logo_black.png"
import logowhite from "../../assets/Logo/logo_white.png"
import { FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import useThemeMode from "../../hooks/useThemeMode";
import "./footer.css"

const Footer = () => {

    const {themeMode } = useThemeMode();
    return (
        <>
            <footer className="bg_image">
                <div className=" bg-[#f9fafbf5] dark:bg-[#374151f7]">
                    <div className="mx-auto container py-9">
                        <div className="grid grid-cols-1 gap-8 px-14 lg:px-4 lg:py-8 lg:grid-cols-4">
                            <div>
                                <div>
                                    <img
                                        className="w-28 lg:mx-auto"
                                        src={themeMode === 'light' ? logoBlack : logowhite}
                                        alt="" />
                                </div>

                                <div className="flex mt-6 space-x-3 lg:justify-center">
                                    <a
                                        href="https://web.facebook.com/sohel5G/"
                                        target="blank"
                                        className="text-primary-defaultPrimaryColor border-2 p-2 rounded-full border-primary-defaultPrimaryColor hover:text-white hover:bg-primary-defaultPrimaryColor dark:hover:text-primary-defaultPrimaryColor dark:text-white dark:hover:bg-white dark:border-white"
                                    >
                                        <FaFacebookF></FaFacebookF>
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/sohel5G"
                                        target="blank"
                                        className="text-primary-defaultPrimaryColor border-2 p-2 rounded-full border-primary-defaultPrimaryColor hover:text-white hover:bg-primary-defaultPrimaryColor dark:hover:text-primary-defaultPrimaryColor dark:text-white dark:hover:bg-white dark:border-white"
                                    >
                                        <FaLinkedinIn></FaLinkedinIn>
                                    </a>
                                    <a
                                        href="https://github.com/sohel5G"
                                        target="blank"
                                        className="text-primary-defaultPrimaryColor border-2 p-2 rounded-full border-primary-defaultPrimaryColor hover:text-white hover:bg-primary-defaultPrimaryColor dark:hover:text-primary-defaultPrimaryColor dark:text-white dark:hover:bg-white dark:border-white"
                                    >
                                        <FaGithub></FaGithub>
                                    </a>
                                </div>
                            </div>
                            <div>
                                <h2 className="mb-6 text-base font-semibold text-gray-900 uppercase dark:text-white">
                                    Informations
                                </h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">

                                    <li className="mb-4">
                                        <a href="#" className="hover:underline">
                                            About us
                                        </a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline">
                                            Privacy Policy
                                        </a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline">
                                            Term and Conditions
                                        </a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline">
                                            Contact Us
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-base font-semibold text-gray-900 uppercase dark:text-white">
                                    Quick Links
                                </h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline">
                                            Available Foods
                                        </a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline">
                                            Add Food
                                        </a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline">
                                            Manage My Foods
                                        </a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline">
                                            My Food Request
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-base font-semibold text-gray-900 uppercase dark:text-white">
                                    Contact info
                                </h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <p><b>Address :</b> London Eye, London, United Kingdom</p>
                                    </li>
                                    <li className="mb-4">
                                        <p><b>Phone :</b> +88 01735 42 83 25</p>
                                    </li>
                                    <li className="mb-4">
                                        <p><b>Email :</b> info@communityfood.com</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="border-t dark:border-gray-500 border-gray-200">
                        <div className="px-4 py-6 container mx-auto text-center">
                            <span className="text-sm text-gray-600 dark:text-gray-400 sm:text-center">
                                © 2023 <a href="https://flowbite.com/">Community Food Sharing</a>. All Rights
                                Reserved.
                            </span>
                        </div>
                    </div>
               </div>
            </footer>
        </>
    );
};

export default Footer;

