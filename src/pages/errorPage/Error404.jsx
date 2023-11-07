import Lottie from "lottie-react";
import errorPage404animation from "../../assets/animation/animation_404.json"
import { Link } from "react-router-dom";

const Error404 = () => {


    return (
        <div>
            <div className="max-w-3xl mx-auto px-7 h-screen flex justify-center items-center">
                <div>
                    <div>
                        <Lottie animationData={errorPage404animation}></Lottie>
                    </div>
                    <div className="mt-10 text-center">
                        <Link className="text-primary-defaultPrimaryColor text-lg" to={'/'}> <button> Go to Hone Page </button> </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Error404;