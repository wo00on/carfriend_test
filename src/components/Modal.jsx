import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-lg w-[90%] max-w-[500px] shadow-lg relative">
        {/* 닫기 버튼 */}
        <button className="absolute top-3 right-3 text-xl" onClick={onClose}>
          ✖
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
