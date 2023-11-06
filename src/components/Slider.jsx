

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import banner1 from "../../src/assets/banners/banner1.png"
import banner2 from "../../src/assets/banners/banner2.jpg"
import banner3 from "../../src/assets/banners/banner3.jpg"
import banner4 from "../../src/assets/banners/banner4.jpg"

const Slider = () => {

    return (
        <>
            <Carousel showThumbs={false} useKeyboardArrows={true} showStatus={false} emulateTouch={true} autoPlay={true} infiniteLoop={true} className='homePageSlider'>


                <div>
                    <img src={banner3} alt="banner3" />
                    <div className='legend !text-xl md:!text-3xl !text-white !opacity-100 !bg-[#0000004f] !bottom-1/4 md:!bottom-2/4 lg:!bottom-2/4'>
                        <h1 className="text-2xl md:text-3xl lg:text-5xl text-white py-3">Sharing Meals, Spreading Love </h1>
                    </div>
                </div>


                <div>
                    <img src={banner2} alt="banner2" />
                    <div className='legend !text-xl md:!text-3xl !text-white !opacity-100 !bg-[#0000004f] !bottom-1/4 md:!bottom-2/4 lg:!bottom-2/4'>
                        <h1 className="text-2xl md:text-3xl lg:text-5xl text-white py-3"> One Dish, Infinite Bonds </h1>
                    </div>
                </div>

                <div>
                    <img src={banner1} alt="banner1" />
                    <div className='legend !text-xl md:!text-3xl !text-white !opacity-100 !bg-[#0000004f] !bottom-1/4 md:!bottom-2/4 lg:!bottom-2/4'>
                        <h1 className="text-2xl md:text-3xl lg:text-5xl text-white py-3">Building Bridges Unite Through Food Sharing </h1>
                    </div>
                </div>

                <div>
                    <img src={banner4} alt="banner4" />
                    <div className='legend !text-xl md:!text-3xl !text-white !opacity-100 !bg-[#0000004f] !bottom-1/4 md:!bottom-2/4 lg:!bottom-2/4'>
                        <h1 className="text-2xl md:text-3xl lg:text-5xl text-white py-3">Mealtime Magic, One Heartfelt Bite at a Time</h1>
                    </div>
                </div>

            </Carousel>
        </>
    );
};

export default Slider;

