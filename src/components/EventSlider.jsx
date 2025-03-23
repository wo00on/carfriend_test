import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EventCard from "./EventCard";

const repairData = [
  { id: 1, title: "럭셔리 차량 정비 완료!", img: "/images/.jpg", description: "럭셔리 차량 프리미엄 정비 완료! 엔진 성능 최적화 및 내부 청소 진행." },
  { id: 2, title: "Bentley VIP 정비 완료", img: "/images/bently.jpg", description: "벤틀리 VIP 정비 패키지 적용! 서스펜션 및 엔진 점검 완료." },
  { id: 3, title: "Porsche 성능 최적화", img: "/images/Por.jpg", description: "포르쉐 엔진 튜닝 및 브레이크 점검 완료! 퍼포먼스 극대화." },
  { id: 4, title: "Jeep 오프로드 점검 완료", img: "/images/Jeepjpg.jpg", description: "오프로드 주행을 위한 정밀 점검 및 업그레이드 완료." },
  { id: 5, title: "BMW 유지보수 완료", img: "/images/BMW.jpg", description: "BMW 엔진 및 미션 종합 점검 완료! 최상의 컨디션 유지." },
  { id: 6, title: "Audi 정기 점검 완료", img: "/images/Audi.jpg", description: "아우디 차량 정기 점검 및 주요 부품 교체 완료." },
  { id: 7, title: "Audi 오일 교환 완료", img: "/images/Audi2.jpg", description: "고성능 합성유로 오일 교환 완료! 연비와 내구성 개선." },
  { id: 8, title: "Ford 픽업트럭 정비 완료", img: "/images/Ford.jpg", description: "포드 F-시리즈 및 레인저 전문 정비 및 점검 완료." },
  { id: 9, title: "신차 정비 완료", img: "/images/event6.jpg", description: "신차 구매 후 첫 정비 완료! 안전한 주행을 위한 점검 실시." },
];

const RepairSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="w-full px-6 md:px-15 lg:px-20 py-32 md:py-40 lg:py-48">
      <h2 className="text-2xl font-bold mb-10 text-center">🔧 2025 차량 정비 사례</h2>
      <div className="w-full">
        <Slider {...settings}>
          {repairData.map((repair) => (
            <div key={repair.id} className="px-4">
              <EventCard title={repair.title} img={repair.img} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default RepairSlider;
