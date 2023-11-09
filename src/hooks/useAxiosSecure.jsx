import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'https://community-food-sharing-server-chi.vercel.app',
    withCredentials: true
})

const useAxiosSecure = () => {

    return axiosSecure;
};

export default useAxiosSecure;