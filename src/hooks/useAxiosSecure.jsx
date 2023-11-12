import axios from "axios";
// import { useContext, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { AllContext } from "../provider/Authprovider";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
})

const useAxiosSecure = () => {


    // const navigate = useNavigate()
    // const { userLogOut } = useContext(AllContext);


    // useEffect(() => {
    //     axiosSecure.interceptors.response.use(res => {
    //         return res;
    //     }, err => {

    //         console.log('Err trucking in the Interceptor', err.response);

    //         if (err.response.status === 401 || err.response.status === 403) {


    //             userLogOut()
    //                 .then(() => {

    //                     console.log('logout by Interceptor')

    //                     navigate('/login')
    //                 }).catch((err) => {

    //                     console.log('Interceptor logout error', err)

    //                 });

    //             console.log('Logout the user')

    //         }
    //     })
    // }, [userLogOut, navigate])



    return axiosSecure;
};

export default useAxiosSecure;