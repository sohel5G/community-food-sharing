import { useContext } from "react";
import { AllContext } from "../../provider/Authprovider";
import { Helmet } from "react-helmet-async";

const Profile = () => {

    const { user, userlogOut } = useContext(AllContext);

    const handleLogOut = () => {
        userlogOut()
            .then(() => {
                console.log(' Sign-out successful ')
            }).catch(() => {
                console.log('Logout : An error happened')
            });
    }

    return (
        <div className="flex justify-center items-center py-8">
            <Helmet><title> Profile - Community Food Sharing </title></Helmet>
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-600 dark:border-gray-700">
                <div className="flex flex-col items-center py-10">
                    <img
                        className="w-20 h-20 mb-3 rounded-full shadow-lg"
                        src={user?.photoURL || 'https://i.ibb.co/k2mWfq6/placeholder.jpg'}
                        alt="Bonnie image"
                    />
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                        {user?.displayName || "name not found"}
                    </h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                        {user?.email || "Email not found"}
                    </span>
                    <div className="flex mt-4 space-x-3 md:mt-6">
                        <button
                            onClick={handleLogOut}
                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-primary-defaultPrimaryColor rounded-lg hover:bg-primary-defaultPrimaryColor focus:ring-4 focus:outline-none focus:ring-primary-defaultPrimaryColor dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Log out
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Profile;