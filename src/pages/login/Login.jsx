
import { FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AllContext } from '../../provider/Authprovider';
import { useContext } from 'react';
import swal from 'sweetalert';

const Login = () => {
    const { googleSignInWithPopup, userLogIn } = useContext(AllContext);
    const navigate = useNavigate()

    const handleUserLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        userLogIn(email, password)
            .then((succData) => {
                const user = succData.user;
                console.log(user)

                swal({
                    text: "Successfully Log In",
                    icon: "success",
                    buttons: false,
                })
                navigate('/dashboard/profile');
                
            })
            .catch((errorData) => {
                const error = errorData.message;

                swal({
                    text: errorData.message,
                    icon: "warning",
                    buttons: false,
                })

                console.log('login error', error)
            });
    }

    const handleUserSignInWithPopup = () => {
        googleSignInWithPopup()
            .then((succData) => {
                const user = succData.user;
                console.log(user)

                swal({
                    text: "Successfully Log In",
                    icon: "success",
                    buttons: false,
                })
                navigate('/dashboard/profile');

            }).catch((errorData) => {
                const error = errorData.message;
                
                swal({
                    text: errorData.message,
                    icon: "warning",
                    buttons: false,
                })

                console.log(error)
            });
    }

    return (
        <>
            <div className="flex justify-center items-center py-28">

                <div className="flex-1 max-w-md bg-white rounded-lg shadow dark:border dark:bg-gray-600 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-lg pb-8 font-semibold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleUserLogin}>
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
                                    required=""
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
                                    required=""
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input
                                            id="remember"
                                            aria-describedby="remember"
                                            type="checkbox"
                                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                            required=""
                                        />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label
                                            htmlFor="remember"
                                            className="text-gray-500 dark:text-gray-300"
                                        >
                                            Remember me
                                        </label>
                                    </div>
                                </div>
                                <a
                                    href="#"
                                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                                >
                                    Forgot password?
                                </a>
                            </div>
                            <input
                                value="Sign in"
                                type="submit"
                                className="cursor-pointer w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            />

                            <p className=" text-sm font-light text-gray-500 dark:text-gray-400">
                                Don’t have an account yet?{" "}
                                <Link
                                    to={'/register'}
                                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                >
                                    Sign up
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
        </>
    );
};

export default Login;