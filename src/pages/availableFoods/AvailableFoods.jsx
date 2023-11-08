import { useState } from "react";
import { useEffect } from "react";
import AvailableFoodCard from "./AvailableFoodCard";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const AvailableFoods = () => {
    const [foods, setFoods] = useState([])
    const axiosSecure = useAxiosSecure()
    const [searchText, setSearchText] = useState('');
    const [filtertext, setFilterText] = useState('');
    const [availableFoods, setavAilableFoods] = useState([])

    const handleSearch = e => {
        e.preventDefault()
        const searchText = e.target.searchText.value;
        setSearchText(searchText)
    }


    useEffect(() => {

        if (searchText) {
            axiosSecure.get(`/get-donated-foods?search=${searchText}`)
                .then(res => {
                    setFoods(res.data)
                })
        } 
        else {
            axiosSecure.get('/get-donated-foods')
                .then(res => {
                    setFoods(res.data)
                })

        }

    }, [searchText, axiosSecure]);


    useEffect(() => {

        if (filtertext) {
            axiosSecure.get(`/get-donated-foods?sort=${filtertext}`)
                .then(res => {
                    setFoods(res.data)
                })
        }
        else {
            axiosSecure.get('/get-donated-foods')
                .then(res => {
                    setFoods(res.data)
                })

        }

    }, [filtertext]);



  useEffect(() =>{
      if (foods.length > 0) {
          const availableFoods = foods.filter(food => food.food_status === 'Available')
          setavAilableFoods(availableFoods)
      }

  }, [foods])
   


    return (
        <div className="container mx-auto px-5 pb-24">
            <Helmet><title>Available Foods - Community Food Sharing </title></Helmet>
            <section>
                <div className="py-11">
                    <form onSubmit={handleSearch}>
                        <label
                            htmlFor="default-search"
                            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                        >
                            Search
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg
                                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                    />
                                </svg>
                            </div>
                            <input
                                type="text"
                                name="searchText"
                                placeholder="Search Foods"
                                value={searchText}
                                onChange={(e) => setSearchText(e.target.value)}
                                id="default-search"
                                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required
                            />
                            <button
                                type="submit"
                                className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-primary-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-primary-600"
                            >
                                Search
                            </button>
                        </div>
                    </form>


                </div>
            </section>
            <section>
                <form>
                    <select
                        className="select select-bordered w-full max-w-xs"
                        name="filterText"
                        onChange={(e) => setFilterText(e.target.value)}
                    >
                        <option value="">Filter Foods By Expire Time</option>
                        <option value="3">3 hr</option>
                        <option value="7">7 hr</option>
                        <option value="12">12 hr</option>
                        <option value="24">24 hr</option>
                        <option value="36">36 hr</option>
                        <option value="48">48 hr</option>
                        <option value="60">60 hr</option>
                        <option value="72">72 hr</option>
                    </select>
                </form>
            </section>
            <section>
                <h1 className="text-4xl font-medium text-center pb-14 dark:text-white"> Available Foods</h1>
            </section>
            <section>
                {
                    foods.length === 0 ?
                        <>
                            <h1 className="text-4xl font-medium text-center dark:text-white"> No Foods found</h1>
                        </> :
                        <>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-9">
                                {
                                    
                                    availableFoods.map(food => <AvailableFoodCard key={food._id} food={food}></AvailableFoodCard>)
                                }
                            </div>

                        </>
                }
            </section>
        </div>
    );
};

export default AvailableFoods;





