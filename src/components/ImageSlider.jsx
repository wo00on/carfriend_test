import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [
    "/images/bently.jpg",
    "/images/Por.jpg",
    "/images/Jeepjpg.jpg",
    "/images/Ford.jpg",
    "/images/Audi.jpg"
  ];

const CustomPrevArrow = ({ onClick }) => (
  <button className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md" onClick={onClick}>
    <FaChevronLeft className="text-gray-600 text-xl" />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md" onClick={onClick}>
    <FaChevronRight className="text-gray-600 text-xl" />
  </button>
);

const ImageSlider = () => {
  const [centerIndex, setCenterIndex] = useState(0);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "1%",
    beforeChange: (current, next) => setCenterIndex(next),
    prevArrow: <CustomPrevArrow />, 
    nextArrow: <CustomNextArrow />, 
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <div className="w-full max-w-7xl mx-auto my-50 relative">
      <h2 className="text-center text-2xl font-bold mb-5">Features</h2>
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="px-2">
            <div
  className={`relative transition-transform duration-300 rounded-lg overflow-hidden 
    ${index === centerIndex ? 'scale-145 shadow-2xl opacity-100' : 'scale-85 opacity-20'}`}>

              <div className="absolute inset-0 bg-black/30"></div>
              <img
                src={src}
                alt={`slide-${index}`}
                className="w-full h-[500px] object-cover rounded-lg"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
