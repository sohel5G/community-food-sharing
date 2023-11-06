/* eslint-disable react/prop-types */
import { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import banner1 from "../../src/assets/banners/banner1.png"
import banner2 from "../../src/assets/banners/banner2.jpg"
import banner3 from "../../src/assets/banners/banner3.jpg"
import banner4 from "../../src/assets/banners/banner4.jpg"
import "./slider.css"
import { Link } from "react-router-dom"

const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        },
    })

    return (
        <>
            <div className="navigation-wrapper container mx-auto">
                <div ref={sliderRef} className="keen-slider">

                    {/* Slide 1  */}
                    <div className="keen-slider__slide number-slide1 !w-full">
                        <div className="h-[500px] w-full bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${banner1})` }}>
                            <div className="bg-[#00000066] absolute top-0 left-0 h-[500px] w-full flex items-center justify-center">
                                <div className="text-center w-5/6 md:w-3/4 lg:w-5/12">
                                    <h1 className="text-3xl md:text-3xl lg:text-5xl text-white">Sharing the Love, One Meal at a Time </h1>
                                    <p className="text-xl py-5 text-white">Join us in sharing meals to nurture kindness and strengthen your local community bonds.</p>
                                    <Link to={'/available-foods'} className="btn-sm md:btn-md btn hover:bg-primary-defaultPrimaryColor border-2 hover:border-primary-defaultPrimaryColor">  Browse All Food  </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Slide 2  */}
                    <div className="keen-slider__slide number-slide2 !w-full ">
                        <div className="h-[500px] w-full bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${banner2})` }}>
                            <div className="bg-[#00000066] absolute top-0 left-0 h-[500px] w-full flex items-center justify-center">
                                <div className="text-center w-5/6 md:w-3/4 lg:w-5/12">
                                    <h1 className="text-3xl md:text-3xl lg:text-5xl text-white">Sharing the Love, One Meal at a Time </h1>
                                    <p className="text-xl py-5 text-white">Join us in sharing meals to nurture kindness and strengthen your local community bonds.</p>
                                    <Link to={'/available-foods'} className="btn-sm md:btn-md btn hover:bg-primary-defaultPrimaryColor border-2 hover:border-primary-defaultPrimaryColor">  Browse All Food  </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Slide 3  */}
                    <div className="keen-slider__slide number-slide3 !w-full">
                        <div className="h-[500px] w-full bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${banner3})` }}>
                            <div className="bg-[#00000066] absolute top-0 left-0 h-[500px] w-full flex items-center justify-center">
                                <div className="text-center w-5/6 md:w-3/4 lg:w-5/12">
                                    <h1 className="text-3xl md:text-3xl lg:text-5xl text-white">Sharing the Love, One Meal at a Time </h1>
                                    <p className="text-xl py-5 text-white">Join us in sharing meals to nurture kindness and strengthen your local community bonds.</p>
                                    <Link to={'/available-foods'} className="btn-sm md:btn-md btn hover:bg-primary-defaultPrimaryColor border-2 hover:border-primary-defaultPrimaryColor">  Browse All Food  </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Slide 4  */}
                    <div className="keen-slider__slide number-slide4 !w-full">
                        <div className="h-[500px] w-full bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${banner4})` }}>
                            <div className="bg-[#00000066] absolute top-0 left-0 h-[500px] w-full flex items-center justify-center">
                                <div className="text-center w-5/6 md:w-3/4 lg:w-5/12">
                                    <h1 className="text-3xl md:text-3xl lg:text-5xl text-white">Sharing the Love, One Meal at a Time </h1>
                                    <p className="text-xl py-5 text-white">Join us in sharing meals to nurture kindness and strengthen your local community bonds.</p>
                                    <Link to={'/available-foods'} className="btn-sm md:btn-md btn hover:bg-primary-defaultPrimaryColor border-2 hover:border-primary-defaultPrimaryColor">  Browse All Food  </Link>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                {loaded && instanceRef.current && (
                    <>
                        <Arrow
                            left
                            onClick={(e) =>
                                e.stopPropagation() || instanceRef.current?.prev()
                            }
                            disabled={currentSlide === 0}
                        />

                        <Arrow
                            onClick={(e) =>
                                e.stopPropagation() || instanceRef.current?.next()
                            }
                            disabled={
                                currentSlide ===
                                instanceRef.current.track.details.slides.length - 1
                            }
                        />
                    </>
                )}
            </div>
        </>
    );
};

export default Slider;



function Arrow(props) {
    const disabeld = props.disabled ? " arrow--disabled" : ""
    return (
        <svg
            onClick={props.onClick}
            className={`arrow ${props.left ? "arrow--left" : "arrow--right"
                } ${disabeld}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            {props.left && (
                <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
            )}
            {!props.left && (
                <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
            )}
        </svg>
    )
}


