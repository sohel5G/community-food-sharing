import logoBlack from "../../assets/Logo/logo_black.png"
import logowhite from "../../assets/Logo/logo_white.png"
import { FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import useThemeMode from "../../hooks/useThemeMode";

const Footer = () => {

    const {themeMode } = useThemeMode();
    return (
        <>
            <footer className="bg-gray-50 dark:bg-gray-700">
                <div className="mx-auto container">
                    <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
                        <div>
                            <div>
                                <img 
                                className="w-28 mx-auto" 
                                src={themeMode === 'light' ? logoBlack : logowhite}
                                alt="" />
                            </div>

                            <div className="flex mt-6 space-x-3 justify-center">
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
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                Help center
                            </h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">
                                        Discord Server
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">
                                        Twitter
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">
                                        Facebook
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
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                Legal
                            </h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">
                                        Privacy Policy
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">
                                        Licensing
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">
                                        Terms &amp; Conditions
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                Download
                            </h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">
                                        iOS
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">
                                        Android
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">
                                        Windows
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">
                                        MacOS
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800">
                    <div className="px-4 py-6 container mx-auto  md:flex md:items-center md:justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
                        © 2023 <a href="https://flowbite.com/">Flowbite™</a>. All Rights
                        Reserved.
                    </span>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;

