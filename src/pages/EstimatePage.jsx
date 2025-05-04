import React from "react";
import EstimateForm from "../components/EstimateForm";
import EstimateResultViewer from "../components/EstimateResultViewer";

const EstimatePage = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-10">
            <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold mb-4">차량 견적 요청 및 조회</h2>

                {/* 견적 요청 폼 컴포넌트 */}
                <EstimateForm />

                <hr className="my-6" />

                {/* 견적 결과 조회 컴포넌트 */}
                <EstimateResultViewer />
            </div>
        </div>
    );
};

export default EstimatePage;
