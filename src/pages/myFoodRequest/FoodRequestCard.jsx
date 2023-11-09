import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

const FoodRequestCard = ({ food, handleDelete }) => {

    const { food_name, food_id, donator_email, donator_name, request_date, pickup_location, expired_time, donation_money, _id, food_status } = food;

    return (
        <div>
            <div className='shadow hover:shadow-md p-4 border group'>
                <p className='py-1 dark:text-white'><b>Food Name :</b> <Link className='group-hover:text-primary-defaultPrimaryColor group-hover:underline' to={`/available-food/${food_id}`}> {food_name} </Link> </p>
                <p className='py-1 dark:text-white'><b>Donar Name :</b> {donator_name} </p>
                <p className='py-1 dark:text-white'><b>Donar Email :</b> {donator_email} </p>
                <p className='py-1 dark:text-white'><b>Expire Time :</b> {expired_time} </p>
                <p className='py-1 dark:text-white'><b>Pickup Location :</b> {pickup_location} </p>
                <p className='py-1 dark:text-white'><b>Request Date :</b> {request_date} </p>
                <p className='py-1 dark:text-white'><b>Your Donation Amount :</b> {donation_money} </p>
                <p className='py-1 dark:text-white'><b>Food Status :</b> <span className={food_status === "Available" ? "text-green-500" : "text-orange-500"}>{food_status}</span> </p>
                <div>
                    <button
                        className={`${food_status === "Available" ? "text-primary-700" : "text-[#00000061]"} underline mt-6`} 
                        onClick={() => 
                            food_status === "Available" ? 
                            handleDelete(_id) : 
                                swal({
                                    text: "This food is already delivered",
                                    icon: "warning",
                                    buttons: false,
                                }) 
                        }>
                            Cancel this Request
                        </button>
                </div>
                {/* {
                food_status === "Available" ? <>
                    <button className='text-primary-defaultPrimaryColor underline mt-6' onClick={() => handleDelete(_id)}>Cancel this Request</button>
                </> : <>
                <p></p>
                </>
                } */}
                
            </div>
        </div>
    );
};

export default FoodRequestCard;

FoodRequestCard.propTypes = {
    food: PropTypes.object,
    handleDelete: PropTypes.func
};

