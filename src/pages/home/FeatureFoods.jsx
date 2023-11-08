import { useEffect, useState } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import FeatureFoodsCard from './FeatureFoodsCard';

const FeatureFoods = () => {
    const [foods, setFoods] = useState([]);
    const axiosSecure = useAxiosSecure();
    const [availableFoods, setavAilableFoods] = useState([])

    useEffect(() => {
        axiosSecure.get('/get-donated-foods')
            .then(res => {
                setFoods(res.data);
            });
    }, [axiosSecure]);

    useEffect(() => {
        if (foods.length > 0) {
            const availableFoods = foods.filter(food => food.food_status === 'Available')
            setavAilableFoods(availableFoods)
        }

    }, [foods])

   
    const top6Items = [...availableFoods].sort((a, b) => b.expired_time - a.expired_time).slice(0, 6);

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-9">
                {
                    top6Items.map(food => <FeatureFoodsCard key={food._id} food={food}></FeatureFoodsCard>)
                }
            </div>
        </div>
    );
};

export default FeatureFoods;
