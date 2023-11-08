import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AvailableFoodCard = ({ food }) => {

    const { food_name, food_image, pickup_location, food_quantity, expired_time, additional_notes, donator_image, donator_name, _id, food_status } = food;

    return (
        <div className='shadow-md rounded-md p-3 border group '>
            <div className='relative'>
                <Link to={food_status === 'Available' ? `/available-food/${_id}` : '/available-foods'}>
                <img className='transition-transform transform group-hover:scale-105 ease-in-out duration-500' src={food_image} alt={food_name} />
                </Link>
                <Link to={food_status === 'Available' ? `/available-food/${_id}` : '/available-foods'}>
                    <h1 className='text-2xl font-medium py-4 group-hover:text-primary-defaultPrimaryColor dark:text-white'> {food_name} </h1>
                </Link>
                <p className='absolute top-3 right-3 bg-white py-1 px-2 rounded-lg text-xs'><span className={food_status === "Available" ? "text-green-500" : "text-orange-500"}>{food_status}</span></p>
            </div>
            <div className='flex justify-around border-t-2 py-3'>
                <div className='flex-1'>
                    <img className='w-10  rounded-full' src={donator_image} alt={donator_name} />
                    <p className='text-base font-medium dark:text-white'>{donator_name}</p>
                </div>
                <div className='flex-1'>
                    <p className='font-semibold dark:text-white'>Food Quantity  (no. of person to be served.)</p>
                    <p className='text-base font-semibold dark:text-white'> {food_quantity} </p>
                </div>
            </div>
            <div className='flex justify-around border-t-2 py-3'>
                <div className='flex-1'>
                    <p className='font-semibold dark:text-white'>Pickup Location :</p>
                    <p className='font-medium dark:text-white'> {pickup_location} </p>
                </div>
                <div className='flex-1'>
                    <p className='font-semibold dark:text-white'>Expired Time :</p>
                    <p className='font-medium dark:text-white'> {expired_time} hr </p>
                </div>
            </div>
            <div className='border-t-2 py-3'>
                <p className='font-semibold dark:text-white'>Donner Notes :</p>
                <p className='font-medium dark:text-white'> {additional_notes} </p>
            </div>
            <div className='py-5'>
                <Link className={`text-white py-2 px-3 text-sm font-medium rounded-md ${food_status === "Available" ? "bg-primary-500" : "bg-[#0000004d]"}`} to={food_status === 'Available' ? `/available-food/${_id}` : '/available-foods'}> View Details </Link>
            </div>
        </div>
    );
};

export default AvailableFoodCard;

AvailableFoodCard.propTypes = {
    food: PropTypes.object
};
