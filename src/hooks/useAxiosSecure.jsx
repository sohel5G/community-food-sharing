import axios from "axios";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import auth from "../config/AuthConfig";
import { useEffect } from "react";

const axiosSecure = axios.create({
    baseURL: 'https://community-food-sharing-server-chi.vercel.app',
    withCredentials: true
})

// http://localhost:5000
//https://community-food-sharing-server-chi.vercel.app

const useAxiosSecure = () => {
    const navigate = useNavigate()

    useEffect(() => {
        axiosSecure.interceptors.response.use(function (response) {
            return response;
        }, async function (error) {

            if (error.response?.status == 401 || error.response?.status == 403) {

                await signOut(auth)
                    .then(() => {

                        console.log('logout by Interceptor')

                        navigate('/login')
                    }).catch((err) => {

                        console.log('Interceptor logout error', err)

                    });

                console.log('axios secure error', error.response.status);
            }

            return Promise.reject(error);
        });
    }, [navigate])

    return axiosSecure;
};

export default useAxiosSecure;

