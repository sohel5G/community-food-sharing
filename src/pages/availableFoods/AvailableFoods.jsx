import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import AvailableFoodCard from "./AvailableFoodCard";

const AvailableFoods = () => {
    const [foods , setFoods] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/get/donated-foods')
        .then(res => {
            setFoods(res.data)
        })    
    },[])

    return (
        <div className="container mx-auto px-5 pb-24">
            <section>
                <h1 className="text-4xl font-medium text-center py-14"> Available Foods</h1>
            </section>
            <section className="">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-9">
                    {
                        foods.map(food => <AvailableFoodCard key={food._id} food={food}></AvailableFoodCard>)
                    }
                </div>
            </section>
        </div>
    );
};

export default AvailableFoods;