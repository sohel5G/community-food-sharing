import { useContext, useEffect, useState } from "react";
import { AllContext } from "../../provider/Authprovider";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const FoodRequest = () => {

    const axiosSecure = useAxiosSecure();
    const [foods, setFoods] = useState();
    const { user } = useContext(AllContext);

    useEffect(() => {
        axiosSecure.get(`/get-requested-foods?userEmail=${user?.email}`)
            .then(res => {
                setFoods(res.data)
            })
    }, [axiosSecure, user?.email])

    return (
        <div>
            <h1 className='text-7xl mt-24'>My Food Request {foods?.length}</h1>
        </div>
    );
};

export default FoodRequest;