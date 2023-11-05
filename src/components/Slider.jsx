import banner1 from "../assets/banners/banner1.png"
import banner2 from "../assets/banners/banner2.jpg"
import banner3 from "../assets/banners/banner3.jpg"
import banner4 from "../assets/banners/banner4.jpg"

const Slider = () => {
    return (
        <>
            <div
                id="indicators-carousel"
                className="relative w-full"
                data-carousel="static"
            >
                {/* Carousel wrapper */}
                <div className="relative overflow-hidden h-[400px] lg:h-[550px]">
                    {/* Item 1 */}
                    <div
                        className="duration-700 ease-in-out"
                        data-carousel-item="active"
                    >
                        <img
                            src={banner1}
                            className="absolute block h-full md:h-full lg:h-auto w-auto lg:w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            alt="..."
                        />
                        <div className="bg-[#00000069] h-[400px] lg:h-[600px] absolute top-0 left-0 min-w-full flex items-center justify-center">
                            <div>
                                <h1 className="w-3/4 mx-auto text-center lg:text-6xl text-4xl text-white"> Sharing the Love, One Meal at a Time </h1>
                                <p className="w-3/4 mx-auto text-center text-2xl text-white py-5 hidden lg:block">Join us in spreading kindness through shared meals. Nourish your community</p>
                            </div>
                        </div>

                    </div>
                    {/* Item 2 */}
                    <div className="duration-700 ease-in-out" data-carousel-item="">
                        <img
                            src={banner2}
                            className="absolute block h-full md:h-full lg:h-auto w-auto lg:w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            alt="..."
                        />
                        <div className="bg-[#00000069] h-[400px] lg:h-[600px] absolute top-0 left-0 min-w-full flex items-center justify-center">
                            <div>
                                <h1 className="w-3/4 mx-auto text-center lg:text-6xl text-4xl text-white"> Sharing the Love, One Meal at a Time </h1>
                                <p className="w-3/4 mx-auto text-center text-2xl text-white py-5 hidden lg:block">Join us in spreading kindness through shared meals. Nourish your community</p>
                            </div>
                        </div>
                    </div>
                    {/* Item 3 */}
                    <div className="duration-700 ease-in-out" data-carousel-item="">
                        <img
                            src={banner3}
                            className="absolute block h-full md:h-full lg:h-auto w-auto lg:w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            alt="..."
                        />
                        <div className="bg-[#00000069] h-[400px] lg:h-[600px] absolute top-0 left-0 min-w-full flex items-center justify-center">
                            <div>
                                <h1 className="w-3/4 mx-auto text-center lg:text-6xl text-4xl text-white"> Sharing the Love, One Meal at a Time </h1>
                                <p className="w-3/4 mx-auto text-center text-2xl text-white py-5 hidden lg:block">Join us in spreading kindness through shared meals. Nourish your community</p>
                            </div>
                        </div>
                    </div>
                    {/* Item 4 */}
                    <div className="duration-700 ease-in-out" data-carousel-item="">
                        <img
                            src={banner4}
                            className="absolute block h-full md:h-full lg:h-auto w-auto lg:w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            alt="..."
                        />
                        <div className="bg-[#00000069] h-[400px] lg:h-[600px] absolute top-0 left-0 min-w-full flex items-center justify-center">
                            <div>
                                <h1 className="w-3/4 mx-auto text-center lg:text-6xl text-4xl text-white"> Sharing the Love, One Meal at a Time </h1>
                                <p className="w-3/4 mx-auto text-center text-2xl text-white py-5 hidden lg:block">Join us in spreading kindness through shared meals. Nourish your community</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Slider indicators */}
                <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                    <button
                        type="button"
                        className="w-3 h-3 rounded-full"
                        aria-current="true"
                        aria-label="Slide 1"
                        data-carousel-slide-to={0}
                    />
                    <button
                        type="button"
                        className="w-3 h-3 rounded-full"
                        aria-current="false"
                        aria-label="Slide 2"
                        data-carousel-slide-to={1}
                    />
                    <button
                        type="button"
                        className="w-3 h-3 rounded-full"
                        aria-current="false"
                        aria-label="Slide 3"
                        data-carousel-slide-to={2}
                    />
                    <button
                        type="button"
                        className="w-3 h-3 rounded-full"
                        aria-current="false"
                        aria-label="Slide 4"
                        data-carousel-slide-to={3}
                    />
                </div>
                {/* Slider controls */}
                <button
                    type="button"
                    className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    data-carousel-prev=""
                >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg
                            className="w-4 h-4 text-white dark:text-gray-800"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 1 1 5l4 4"
                            />
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button
                    type="button"
                    className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    data-carousel-next=""
                >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg
                            className="w-4 h-4 text-white dark:text-gray-800"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="m1 9 4-4-4-4"
                            />
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>


        </>
    );
};

export default Slider;