import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AllContext } from '../provider/Authprovider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading } = useContext(AllContext);
    const location = useLocation();

    if (loading){
        return <>
            <div className="h-screen flex justify-center items-center">
                <div className='text-center'>
                    <span className="loading loading-spinner loading-lg"></span>
                    <h1 className='py-9'>maybe your internet is too slow, please <span onClick={() => window.location.reload()} className='text-primary-defaultPrimaryColor underline cursor-pointer'>reload</span></h1>
                </div>
            </div>
        </>
    }

    return (
        <>
            {
                user ? children : <Navigate state={location.pathname} to={'/login'}></Navigate>
            }
        </>
    );
};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.node
};

