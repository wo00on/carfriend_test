import React, { useState } from "react";

const EstimateForm = () => {
  const [image, setImage] = useState(null);

  // 이미지 선택 핸들러
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-full">
      <h2 className="text-xl font-bold mb-4">견적 보내기</h2>
      <form className="flex flex-col gap-3">
        {["이름", "전화번호", "차 종류", "차 번호","수리내용"].map((label, idx) => (
          <div key={idx} className="flex flex-col">
            <label className="font-semibold">
              {label} <span className="text-red-500">*</span>
            </label>
            <input className="border p-2 rounded-md w-full" type="text" required />
          </div>
        ))}

        {/* 방문 일자 선택 */}
        <div className="flex flex-col">
          <label className="font-semibold">방문일자</label>
          <input className="border p-2 rounded-md w-full" type="date" />
        </div>

        {/* 🚗 사진 업로드 추가 */}
        <div className="flex flex-col">
          <label className="font-semibold">차량 사진 첨부</label>
          <input type="file" accept="image/*" onChange={handleImageUpload} className="border p-2 rounded-md" />

          {/* 이미지 미리보기 */}
          {image && (
            <div className="mt-2">
              <img src={image} alt="차량 미리보기" className="w-full h-auto rounded-md shadow-md" />
            </div>
          )}
        </div>

        <button type="submit" className="mt-4 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
          제출하기
        </button>
      </form>
    </div>
  );
};

export default EstimateForm;
