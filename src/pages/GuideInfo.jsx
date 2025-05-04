import React from 'react';

const GuideInfo = () => {
    return (
        <div className="max-w-3xl mx-auto p-8 bg-gray-100 shadow-xl rounded-lg">
            <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center border-b pb-2">이용 안내</h2>

            <section className="mb-8 p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-gray-700 mb-4 border-b pb-2">견적 요청 과정</h3>
                <ul className="list-decimal list-inside text-gray-600 space-y-3">
                    <li><strong className="text-blue-600">견적 요청하기</strong>: 메인 페이지에서 <span className="bg-blue-100 px-2 py-1 rounded">"견적 요청하기"</span> 버튼을 클릭하세요.</li>
                    <li><strong className="text-blue-600">내 차량 정보 입력</strong>: 차량의 모델, 연식 등을 입력한 후 <span className="bg-green-100 px-2 py-1 rounded">"견적 요청"</span>을 선택하세요.</li>
                    <li><strong className="text-blue-600">내 정보 입력</strong>: <span className="bg-yellow-100 px-2 py-1 rounded">"내 정보"</span> 페이지에서 전화번호 또는 인증번호를 입력하세요.</li>
                    <li><strong className="text-blue-600">견적 확인</strong>: 입력한 정보를 바탕으로 차량 견적 내용을 확인할 수 있습니다.</li>
                </ul>
            </section>

            <section className="mb-8 p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-gray-700 mb-4 border-b pb-2">고객 상담 센터</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-3">
                    <li><strong className="text-gray-800">상담 가능 시간</strong>: <span className="bg-gray-200 px-2 py-1 rounded">AM 10:00 ~ PM 18:00</span></li>
                    <li><strong className="text-gray-800">점심 시간</strong>: <span className="bg-gray-200 px-2 py-1 rounded">PM 12:30 ~ PM 13:30</span></li>
                    <li><strong className="text-gray-800">전화번호</strong>: <span className="text-blue-500 font-medium">02-1234-5678</span></li>
                    <li><strong className="text-gray-800">이메일</strong>: <span className="text-blue-500 font-medium">help@loyalmarket.com</span></li>
                </ul>
            </section>
        </div>
    );
};

export default GuideInfo;