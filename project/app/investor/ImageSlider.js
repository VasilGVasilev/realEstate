'use client'

import { useState } from "react";

export const ImageSlider = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const changeSlide = (key) => {
        setCurrentIndex(key);

    }
    return (
        <div className="relative">
            <img src={`${slides[currentIndex]}`} alt="image" />
            <div className="flex justify-center space-x-4 cursor-pointer">
                {slides.map((slide, slideIndex) => {
                    return <div onClick={() => changeSlide(slideIndex)} className="text-orange-300 transition duration-75 ease-in-out  hover:scale-150 active:scale-150 active:text-orange-500 hover:text-orange-500 " key={slideIndex}>⬤</div>
                })}
            </div>
        </div>
    )
}

export default ImageSlider;

// best practice is to set the width and height of a div warpping the ImageSlider, not setting them on the actual ImageSlider
// you want the above component to be fluid