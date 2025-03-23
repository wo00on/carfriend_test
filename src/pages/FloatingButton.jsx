// components/FloatingButton.js
import React from "react";
import { FaPhone, FaCommentDots } from "react-icons/fa";

const FloatingButton = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-5">
      {/* 카카오톡 버튼 */}
      <a
        href="https://pf.kakao.com/_your_channel"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-yellow-400 text-black px-4 py-4 rounded-full shadow-lg hover:scale-105 transition"
      >
        <FaCommentDots />
        
      </a>

      {/* 전화 버튼 */}
      <a
        href="tel:010-1234-5678"
        className="flex items-center gap-2 bg-green-500 text-white px-4 py-4 rounded-full shadow-lg hover:scale-105 transition"
      >
        <FaPhone />
        
      </a>
    </div>
  );
};

export default FloatingButton;
