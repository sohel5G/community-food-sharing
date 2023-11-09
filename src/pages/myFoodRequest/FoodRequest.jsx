import { useContext, useEffect, useState } from "react";
import { AllContext } from "../../provider/Authprovider";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import FoodRequestCard from "./FoodRequestCard";
import swal from "sweetalert";
import { Helmet } from "react-helmet-async";

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


    const handleDelete = (foodId) => {

        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this request!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {

                axiosSecure.delete(`/user-request-delete?requestedFoodId=${foodId}&verifyUserEmail=${user?.email}`)
                    .then(res => {

                        if (res.data.deletedCount > 0) {
                            axiosSecure.get(`/get-requested-foods?userEmail=${user?.email}`)
                                .then(res => {
                                    setFoods(res.data)
                                })

                            swal({
                                text: "Request Deleted Successfully",
                                icon: "success",
                                buttons: false,
                            })
                        }

                    })
            }
        });

    }


    return (
        <div className="px-5 lg:px-1 pb-10">
            <Helmet><title> Food Request - Community Food Sharing </title></Helmet>
            <h1 className='text-3xl text-center pt-5 pb-8 dark:text-white'>My Food Request {foods?.length}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {
                    foods?.map(food => <FoodRequestCard key={food._id} food={food} handleDelete={handleDelete}></FoodRequestCard>)
                }
            </div>
        </div>
    );
};

export default FoodRequest;