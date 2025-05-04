import React, { useState } from "react";

const EstimateResultViewer = () => {
    const [query, setQuery] = useState("");  // 전화번호 또는 인증코드 입력
    const [result, setResult] = useState(null);  // 견적 결과
    const [error, setError] = useState("");  // 에러 메시지

    const handleSearch = async () => {
        if (!query) {
            setError("전화번호 또는 인증코드를 입력해주세요.");
            return;
        }

        try {
            setError("");
            setResult(null);

            // API 호출 예시 (실제 API 경로로 수정 필요)
            const response = await fetch(`/api/estimates?query=${encodeURIComponent(query)}`);
            if (!response.ok) throw new Error("결과를 찾을 수 없습니다.");
            const data = await response.json();
            setResult(data);
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-6">
            <h2 className="text-2xl font-bold mb-4 text-center">견적 결과 조회</h2>

            <div className="flex flex-col gap-3 mb-6">
                <input
                    type="text"
                    placeholder="전화번호 또는 인증코드 입력"
                    className="border p-3 rounded-md w-full"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button
                    onClick={handleSearch}
                    className="bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition"
                >
                    조회하기
                </button>
                {error && <p className="text-red-500 text-sm">{error}</p>}
            </div>

            {result && (
                <div className="bg-white rounded-md shadow-lg p-5 border-t-4 border-blue-500">
                    <h3 className="text-lg font-semibold mb-3">요청 정보</h3>
                    <ul className="text-sm text-gray-700 space-y-1">
                        <li><strong>이름:</strong> {result.name}</li>
                        <li><strong>전화번호:</strong> {result.phone}</li>
                        <li><strong>차 종류:</strong> {result.carType}</li>
                        <li><strong>차 번호:</strong> {result.carNumber}</li>
                        <li><strong>수리내용:</strong> {result.description}</li>
                        <li><strong>방문일자:</strong> {result.date}</li>
                    </ul>

                    {result.image && (
                        <img
                            src={result.image}
                            alt="차량 이미지"
                            className="mt-4 rounded-md w-full max-h-64 object-cover"
                        />
                    )}

                    <hr className="my-4" />

                    <h3 className="text-lg font-semibold mb-2">견적 결과</h3>
                    <p className="text-gray-800">
                        {result.estimate || "아직 견적 결과가 등록되지 않았습니다."}
                    </p>
                </div>
            )}
        </div>
    );
};

export default EstimateResultViewer;
