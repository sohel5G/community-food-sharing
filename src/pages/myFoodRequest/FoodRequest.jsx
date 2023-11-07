import { useContext, useEffect, useState } from "react";
import { AllContext } from "../../provider/Authprovider";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import FoodRequestCard from "./FoodRequestCard";

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
            <h1 className='text-3xl text-center pt-2 pb-10'>My Food Request {foods?.length}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {
                    foods?.map(food => <FoodRequestCard key={food._id} food={food}></FoodRequestCard>)
                }
            </div>
        </div>
    );
};

export default FoodRequest;