import React from "react";

const TechnologyPage = () => {
  const technologies = [
    {
      title: "엔진 정비",
      description:
          "엔진 오일 교체, 점화 플러그 교체, 타이밍 벨트 점검 및 교체 등을 포함합니다. 정기적인 점검이 차량 성능을 유지하는 데 필수적입니다.",
    },
    {
      title: "브레이크 시스템",
      description:
          "브레이크 패드 및 디스크 점검, 브레이크 오일 교체 등을 통해 안전한 제동 성능을 유지할 수 있습니다.",
    },
    {
      title: "타이어 및 정렬",
      description:
          "타이어 공기압 점검, 휠 얼라인먼트 조정, 타이어 회전 및 교체 서비스를 제공합니다.",
    },
    {
      title: "전자 시스템",
      description:
          "배터리 점검 및 교체, 전조등 및 후미등 교체, 전자 제어 장치(ECU) 진단 및 수리 등을 포함합니다.",
    },
    {
      title: "차량 에어컨 및 난방",
      description:
          "냉매 가스 충전, 에어컨 필터 교체, 히터 점검 등을 통해 쾌적한 실내 환경을 유지할 수 있습니다.",
    },
    {
      title: "서스펜션 및 하체 정비",
      description:
          "쇼크 업소버, 스티어링 시스템, 로워암 및 기타 하체 부품을 점검 및 교체하여 부드러운 주행감을 제공합니다.",
    },
    {
      title: "배기가스 및 머플러 정비",
      description:
          "배기가스 배출 기준을 충족하도록 배기관 및 촉매 변환기를 점검 및 수리합니다.",
    },
    {
      title: "차량 도장 및 외관 수리",
      description:
          "차량 외부의 긁힘, 찌그러짐 등을 복원하고 도장을 새롭게 해 차량 외관을 유지합니다.",
    },
  ];

  return (
      <div className="min-h-screen bg-white py-16 px-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-14">
          자동차 정비 기술 소개
        </h1>
        <div className="flex flex-col gap-10 max-w-3xl mx-auto">
          {technologies.map((tech, index) => (
              <div
                  key={index}
                  className="pb-6 border-b border-gray-200 shadow-[0_4px_6px_-4px_rgba(0,0,0,0.1)]"
              >
                <h2 className="text-xl font-semibold text-blue-700 mb-2">
                  {tech.title}
                </h2>
                <p className="text-gray-700 leading-relaxed">{tech.description}</p>
              </div>
          ))}
        </div>
      </div>
  );
};

export default TechnologyPage;
