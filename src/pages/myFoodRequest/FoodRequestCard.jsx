import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const FoodRequestCard = ({ food, handleDelete }) => {

    const { food_name, food_id, donator_email, donator_name, request_date, pickup_location, expired_time, donation_money, _id, food_status } = food;

    return (
        <div>
            <div className='shadow hover:shadow-md p-4 border group'>
                <p className='py-1'><b>Food Name :</b> <Link className='group-hover:text-primary-defaultPrimaryColor group-hover:underline' to={`/available-food/${food_id}`}> {food_name} </Link> </p>
                <p className='py-1'><b>Donar Name :</b> {donator_name} </p>
                <p className='py-1'><b>Donar Email :</b> {donator_email} </p>
                <p className='py-1'><b>Expire Time :</b> {expired_time} </p>
                <p className='py-1'><b>Pickup Location :</b> {pickup_location} </p>
                <p className='py-1'><b>Request Date :</b> {request_date} </p>
                <p className='py-1'><b>Your Donation Amount :</b> {donation_money} </p>
                <p className='py-1'><b>Food Status :</b> <span className={food_status === "Available" ? "text-green-500" : "text-orange-500"}>{food_status}</span> </p>
                <button className='text-primary-defaultPrimaryColor underline mt-6' onClick={() => handleDelete(_id)}>Cancel this Request</button>
            </div>
        </div>
    );
};

export default FoodRequestCard;

FoodRequestCard.propTypes = {
    food: PropTypes.object,
    handleDelete: PropTypes.func
};

