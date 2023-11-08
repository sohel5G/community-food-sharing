import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useParams } from "react-router-dom";
import swal from "sweetalert";

const ManageFoodStatus = () => {
    const [food, setFood] = useState({});
    const axiosSecure = useAxiosSecure();
    const { id } = useParams();

    useEffect(() => {
        axiosSecure.get(`/get-requested-food-by-donator-food-id?donatorFoodId=${id}`)
            .then(res => {
                setFood(res.data)
            })
    }, [id, axiosSecure])

    const { requester_name, requester_image, request_date, food_requester_email } = food;

    const handleManageFood = (e) => {
        e.preventDefault();
        const form = e.target;
        const food_status = form.food_status.value;

        const UpdatedStatus = {
            food_status
        }

        axiosSecure.patch(`/update-request-and-donate-food-status?donatedFoodId=${id}`, UpdatedStatus)
            .then(res => {
                if (res.data.donateCollectionResult.modifiedCount > 0 || res.data.requestCollectionResult.modifiedCount > 0) {
                    swal({
                        text: "Food Status updated successfully",
                        icon: "success",
                        buttons: false,
                    })
                }

                console.log(res.data)
            })
    }

    return (
        <>
            <section className="py-8">
                <div className="pt-4 pb-8 rounded-md px-4 mx-auto max-w-2xl dark:border dark:border-gray-700 shadow">
                    <h2 className="mb-3 text-4xl font-medium text-gray-900 dark:text-white">
                        Manage this Food
                    </h2>
                    <form onSubmit={handleManageFood}>
                        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                            <div className="sm:col-span-2">
                                <div>
                                    <img className="w-20 rounded-md" src={requester_image} alt="requester_name" />
                                </div>
                                <p className="text-xl py-2"> <span className="font-medium">Requester Name :</span> {requester_name} </p>
                                <p className="text-xl py-2"> <span className="font-medium">Requester Email :</span> {food_requester_email} </p>
                                <p className="text-xl py-2"> <span className="font-medium">Request Time and Date :</span> {request_date} </p>
                            </div>
                        </div>
                        <div className="max-w-[250px] pt-3">
                            <label
                                htmlFor="food_status"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                <span className="text-xl">Change Food Status :</span>
                            </label>
                            <select
                                name="food_status"
                                id="food_status"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full py-2 px-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                required
                            >
                                <option value="Available">Available</option>
                                <option value="Delivered">Delivered</option>
                            </select>
                        </div>
                        <input
                            type="submit"
                            value="Submit"
                            className="cursor-pointer inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
                        />
                    </form>
                </div>
            </section>

        </>
    );

};

export default ManageFoodStatus;