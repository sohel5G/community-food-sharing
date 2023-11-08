import { useEffect, useState } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import FeatureFoodsCard from './FeatureFoodsCard';

const FeatureFoods = () => {
    const [foods, setFoods] = useState([])
    const axiosSecure = useAxiosSecure()

    useEffect(() => {
        axiosSecure.get('/get-donated-foods')
            .then(res => {
                setFoods(res.data)
            })
    }, [axiosSecure])


    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-9">
                {
                    foods.map(food => <FeatureFoodsCard key={food._id} food={food}></FeatureFoodsCard>)
                }
            </div>
        </div>
    );
};

export default FeatureFoods;