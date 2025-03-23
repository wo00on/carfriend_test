import React, { useState } from "react";
import Modal from "./Modal";
import EstimateForm from "./EstimateForm";

const MainBanner = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <section className="relative w-full h-[600px] hover:shadow-2xl flex items-center justify-start text-left pl-6 md:pl-12 lg:pl-20 bg-gray-900 rounded-xl">
      {/* 배경 비디오 */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-50 rounded-xl"
      >
        <source src="/videos/M2.mp4" type="video/mp4" />
        브라우저가 비디오 태그를 지원하지 않습니다.
      </video>

      {/* 텍스트 컨텐츠 */}
      <div className="relative z-10 text-white max-w-[600px]">
        <h2 className="text-5xl md:text-6xl font-bold leading-tight whitespace-nowrap max-w-[550px]">
          "충주" 차 수리, 믿고 맡기세요!  
          <br />  
          <span className="text-blue-400">카프렌드</span>에서 쉽고 빠르게!
        </h2>

        <p className="mt-4 text-lg md:text-xl text-gray-300 leading-relaxed whitespace-nowrap max-w-[550px]">
          어디서, 어떻게, 얼마에 수리할지 고민되시나요?  
          <br />
          내 차에 꼭 맞는 견적을 먼저 비교하고, 합리적인 가격에 수리하세요!  
          <br />
          빠르고 정확한 견적, 믿을 수 있는 정비소까지 한 번에 해결!
        </p>
        
        {/* 버튼 클릭 시 모달 열기 */}
        <button
          onClick={() => setModalOpen(true)}
          className="mt-6 px-8 py-4 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition"
        >
          무료 견적 요청하기
        </button>
      </div>

      {/* 모달 */}
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <EstimateForm />
      </Modal>
    </section>
  );
};

export default MainBanner;
