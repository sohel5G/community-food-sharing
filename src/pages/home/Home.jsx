import { Link } from "react-router-dom";
import Slider from "../../components/Slider";
import FeatureFoods from "./FeatureFoods";
import front_page_bottom from "../../assets/home/Front page Bottom .jpg"
import "./home.css"
import donateimg from "../../assets/home/donationimg.jpg"
import { Helmet } from "react-helmet-async";

const Home = () => {

    return (
        <>
            <Helmet><title>Home - Community Food Sharing </title></Helmet>
            <section className="container mx-auto">
                <Slider></Slider>
            </section>
            <section className="container mx-auto px-3 pt-4">
                <div className="max-w-lg mx-auto py-14">
                    <h1 className="text-4xl text-center font-medium pb-5 dark:text-white"> Featured Foods</h1>
                    <div className="h-[2px] w-[100px] bg-primary-300 mx-auto"></div>
                    <p className="text-center text-xl dark:text-white py-5">Delicious Meals Making a Difference Savor the Flavor of Generosity</p>
                </div>
                <div>
                    <FeatureFoods></FeatureFoods>
                </div>
                <div className="py-16 text-center">
                    <Link to={'/available-foods'}> <button className="bg-primary-defaultPrimaryColor text-white py-2 px-3 text-sm font-medium rounded-md">  Show All Foods </button> </Link>
                </div>
            </section>
            <section className="container mx-auto px-3 pt-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-16 items-center py-20">
                    <div>
                        <img className="w-full" src={donateimg} alt="Donate Image" />
                    </div>
                    <div className="mt-10 lg:mt-0">
                        <h1 className="text-center lg:text-left text-4xl font-medium pb-5 dark:text-white"> Our Mission </h1>
                        <div className="h-[2px] w-[100px] bg-primary-300 mx-auto lg:mx-0"></div>
                        <p className="text-center lg:text-left  text-xl dark:text-white py-5"> To provide our neighbours with access to healthy food by: Promoting the benefits of nutrition; building community partnerships; and supporting our clients through a variety of life challenges. </p>
                    </div>
                </div>
            </section>
            <section className="container mx-auto px-4">
                <div className="max-w-lg mx-auto py-14">
                    <h1 className="text-4xl text-center font-medium pb-5 dark:text-white"> How Can We Help?</h1>
                    <div className="h-[2px] w-[100px] bg-primary-300 mx-auto"></div>
                    <p className="text-center text-xl dark:text-white py-5">There are numerous ways you can help us make a difference in our community.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7 justify-center items-center max-w-5xl mx-auto">

                    <div className="food_donate bg-cover bg-no-repeat bg-center shadow hover:shadow-md rounded-md">
                        <div className="text-center h-96 bg-[#ffffffc2] flex justify-center items-center">
                            <div className="w-3/4 mx-auto">
                                <h1 className="text-3xl text-primary-700 text-center font-medium ">Donate Food </h1>
                                <p className="text-center text-lg ">You can donate food to any of our Food Bank locations during office hours.</p>
                                <Link className="text-primary-defaultPrimaryColor underline">Learn more</Link>
                            </div>
                        </div>
                    </div>
                    
                    <div className="grow food_donate bg-cover bg-no-repeat bg-center shadow hover:shadow-md rounded-md">
                        <div className="text-center h-96 bg-[#ffffffc2] flex justify-center items-center">
                            <div className="w-3/4 mx-auto">
                                <h1 className="text-3xl text-primary-700 text-center font-medium ">Grow a Row  </h1>
                                <p className="text-center text-lg  py-2">If you grew too much in your garden, please donate it to us. We’ll see that it gets used by those in need.</p>
                                <Link className="text-primary-defaultPrimaryColor underline">Learn more</Link>
                            </div>
                        </div>
                    </div>
                    <div className="money food_donate bg-cover bg-no-repeat bg-center shadow hover:shadow-md rounded-md">
                        <div className="text-center h-96 bg-[#ffffffc2] flex justify-center items-center">
                            <div className="w-3/4 mx-auto">
                                <h1 className="text-3xl text-primary-700 text-center font-medium "> Donate Money  </h1>
                                <p className="text-center text-lg  py-2">Monetary donations allow us to keep our shelves stocked throughout the year.</p>
                                <Link className="text-primary-defaultPrimaryColor underline">Learn more</Link>
                            </div>
                        </div>
                    </div>
                    <div className="volunteer food_donate bg-cover bg-no-repeat bg-center shadow hover:shadow-md rounded-md">
                        <div className="text-center h-96 bg-[#ffffffc2] flex justify-center items-center">
                            <div className="w-3/4 mx-auto">
                                <h1 className="text-3xl text-primary-700 text-center font-medium "> Volunteer  </h1>
                                <p className="text-center text-lg  py-2">We are always looking for people to lend a hand, in a variety of capacities.</p>
                                <Link className="text-primary-defaultPrimaryColor underline">Learn more</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section>
                <div>
                    <img src={front_page_bottom} alt="front page image" />
                </div>
            </section>

        </>
    );
};

export default Home;

