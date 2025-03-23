import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  { id: 1, name: "김민수", rating: 5, text: "정말 친절하고 빠르게 수리해주셨어요! 강추합니다." },
  { id: 2, name: "이정훈", rating: 4, text: "가격도 적당하고 서비스도 좋았습니다. 재방문할게요!" },
  { id: 3, name: "박지연", rating: 5, text: "세세한 설명까지 해주셔서 믿음이 갔어요. 감사합니다!" },
  { id: 4, name: "최영희", rating: 4, text: "예약 없이 갔는데도 빠르게 처리해주셨어요!" },
  { id: 5, name: "홍길동", rating: 5, text: "차량 상태 점검까지 해주셔서 너무 만족했습니다." },
];

const ReviewSlider = () => {
  const settings = {
    dots: true, // 네비게이션 점 추가
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } }, // 태블릿
      { breakpoint: 768, settings: { slidesToShow: 1 } },  // 모바일
    ],
  };

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 py-5">
      <h2 className="text-2xl font-bold text-center mb-6">💬 고객 후기</h2>
      <Slider {...settings}>
        {reviews.map((review) => (
          <div key={review.id} className="p-4">
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <p className="text-lg font-semibold">{review.name}</p>
              <p className="text-yellow-400 text-xl">{"★".repeat(review.rating)}</p>
              <p className="mt-2 text-gray-700">{review.text}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ReviewSlider;
