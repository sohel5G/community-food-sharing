/* eslint-disable no-useless-escape */
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from 'react-icons/fa';
import { useContext } from "react";
import { AllContext } from "../../provider/Authprovider";
import swal from "sweetalert";
import { Helmet } from "react-helmet-async";

const Register = () => {
    const { registerUser, userUpdateOnSignUp, setUser, googleSignInWithPopup } = useContext(AllContext);
    const navigate = useNavigate()

    const handleRegisterUser = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo_url = form.photo_url.value;
        const password = form.password.value;
        const confirm_pass = form.confirm_pass.value;
        const terms = form.terms.checked;

        
        if (password.length < 6) {
            return swal({
                text: "Password must be 6 characters or more!",
                icon: "warning",
                buttons: false,
            })
        } else if (password !== confirm_pass){
            return swal({
                text: "Password not match, Please double check!",
                icon: "warning",
                buttons: false,
            })
        } else if (!/[A-Z]/.test(password)) {
            return swal({
                text: "Password must be at least one capital letter!",
                icon: "warning",
                buttons: false,
            })
        } else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\]/.test(password)) {
            return swal({
                text: "Password must be at least one special character!",
                icon: "warning",
                buttons: false,
            })
        } else if (!terms === true) {
            return swal({
                text: "Please accept the term & conditions",
                icon: "warning",
                buttons: false,
            })
        }



        registerUser(email, password)
            .then((succData) => {
                const user = succData.user;

                userUpdateOnSignUp({ displayName: name, photoURL: photo_url, email: email })
                    .then(() => {

                        setUser({ displayName: name, photoURL: photo_url, email: email });
                        console.log('profile data set')

                        swal({
                            text: "Registration Success",
                            icon: "success",
                            buttons: false,
                        })

                        navigate('/dashboard/profile');

                    }).catch((error) => {
                        console.log('profile data not set', error)
                    });

                console.log('SignUp Use', user)


            })
            .catch((errorData) => {
                const error = errorData.message;

                swal({
                    text: errorData.message,
                    icon: "warning",
                    buttons: false,
                })

                console.log('SignUp error', error)
            });

    }


    const handleUserSignInWithPopup = () => {
        googleSignInWithPopup()
            .then((succData) => {
                const user = succData.user;
                console.log(user)

                swal({
                    text: "Registration Success",
                    icon: "success",
                    buttons: false,
                })
                navigate('/dashboard/profile');

            }).catch((errorData) => {
                const error = errorData.message;
                console.log(error)

                swal({
                    text: errorData.message,
                    icon: "warning",
                    buttons: false,
                })
            });
    }


    return (
        <div className="px-5 py-10 lg:py-20 flex justify-center items-center">
            <Helmet><title>Register - Community Food Sharing </title></Helmet>
            <div className="flex-1 max-w-md bg-white rounded-lg shadow dark:border dark:bg-gray-600 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-lg pb-8 font-semibold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Create an account
                    </h1>
                    <form className="space-y-4 md:space-y-6" onSubmit={handleRegisterUser} >
                        <div>
                            <label
                                htmlFor="name"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Your name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Your name"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Your email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="name@company.com"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="photo_url"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Profile Photo URL
                            </label>
                            <input
                                type="url"
                                name="photo_url"
                                id="photo_url"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Profile picture URL"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="password"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="••••••••"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="confirm_pass"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Confirm password
                            </label>
                            <input
                                type="text"
                                name="confirm_pass"
                                id="confirm_pass"
                                placeholder="••••••••"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required
                            />
                        </div>
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input
                                    id="terms"
                                    name="terms"
                                    aria-describedby="terms"
                                    type="checkbox"
                                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                    required
                                />
                            </div>
                            <div className="ml-3 text-sm">
                                <label
                                    htmlFor="terms"
                                    className="cursor-pointer font-light text-gray-500 dark:text-gray-300"
                                >
                                    I accept the{" "}
                                    <a
                                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                        href="#"
                                    >
                                        Terms and Conditions
                                    </a>
                                </label>
                            </div>
                        </div>
                        <input
                            value="Create an account"
                            type="submit"
                            className="cursor-pointer w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        />
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Already have an account?{" "}
                            <Link
                                to={'/login'}
                                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                            >
                                Login here
                            </Link>
                        </p>
                    </form>
                    <div className="flex justify-center items-center">
                        <div className='mt-2 my-4 mx-1'>

                            <button onClick={handleUserSignInWithPopup} className='text-primary-defaultPrimaryColor flex items-center gap-2 py-2 border border-primary-defaultPrimaryColor rounded-lg text-sm font-medium my-3 px-4 min-w-[185px] hover:bg-primary-defaultPrimaryColor hover:text-white dark:text-white dark:hover:text-primary-defaultPrimaryColor dark:hover:bg-white dark:border-white'><span> <FaGoogle /> </span> <span>Login with Google</span> </button>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;