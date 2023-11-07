import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { AllContext } from "../../provider/Authprovider";


const ManageFoods = () => {
    const axiosSecure = useAxiosSecure();
    const [foods, setFoods ] = useState();
    const {user} = useContext(AllContext);

    useEffect(() => {
        axiosSecure.get(`/get-donated-foods?userEmail=${user?.email}`)
        .then(res => {
            setFoods(res.data)
        })
    }, [axiosSecure, user?.email])

    return (
        <div>
            <h1 className='text-6xl mt-24 text-center'>Manage My Foods {foods?.length}</h1>
            <p className="text-3xl text-center py-8">Need to use react table</p>
        </div>
    );
};

export default ManageFoods;