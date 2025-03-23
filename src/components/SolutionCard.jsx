const SolutionCard = () => {
    const solutions = [
      {
        title: "부품 교체 서비스",
        description:
          "1. 자동차의 성능을 유지하기 위해 필요한 각종 부품을 교체\n\n2. 정품 부품만 사용하여 신뢰성을 보장\n\n3. 정기적인 부품 교체로 차량 수명 연장 및 안전성 향상",
        image: "/images/mechanic2.jpg",
      },
      {
        title: "정밀한 차량 검사",
        description:
          "1. 최신 장비를 활용한 정밀 진단 진행\n\n2. 잠재적인 문제를 사전에 예방\n\n3. 주행 중 갑작스러운 고장 방지",
        image: "/images/mechanic1.png",
      },
      {
        title: "기능장 전문 점검",
        description:
          "1. 자동차 기능장이 직접 점검 수행\n\n2. 차량의 최상의 상태 유지 지원\n\n3. 숙련된 전문가의 정밀 점검 제공",
        image: "/images/기능장.png",
      },
      {
        title: "첨단 정비 솔루션",
        description:
          "1. 최신 자동차 정비 기술 적용\n\n2. 친환경 유지보수 연구 진행\n\n3. 배출가스 감소 및 연료 효율 극대화",
        image: [
          "/images/tier1.png",
          "/images/tier2.png",
          "/images/tier3.png",
          "/images/tier4.png",
        ],
        isGrid: true,
      },
    ];
  
    return (
        <div className="py-40 px-0 bg-white rounded-lg space-y-30 max-w-7xl mx-auto min-h-screen">
          {solutions.map(({ title, description, image, isGrid }, index) => (
            <div
              key={title}
              className={`flex flex-col md:flex-row items-center gap-16 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
          >
            {/* 이미지 섹션 */}
            <div className="w-full shadow-lg md:w-1/2 relative">
              {isGrid ? (
                <div className="relative w-full  h-[500px]">
                  <img
                    src={image[0]}
                    alt="tier1"
                    className="absolute top-0 left-0 w-[50%] h-[50%] rounded-lg shadow-lg"
                  />
                  <img
                    src={image[1]}
                    alt="tier2"
                    className="absolute top-[25%] left-[52%] w-[50%] h-[50%] rounded-lg shadow-lg"
                  />
                  <img
                    src={image[2]}
                    alt="tier3"
                    className="absolute top-[55%] left-[0%] w-[50%] h-[50%] rounded-lg shadow-lg"
                  />
                  <img
                    src={image[3]}
                    alt="tier4"
                    className="absolute top-[80%] left-[52%] w-[50%] h-[50%] rounded-lg shadow-lg"
                  />
                </div>
              ) : (
                <img
                  src={image}
                  alt={title}
                  className="w-full h-auto rounded-lg shadow-lg object-cover"
                />
              )}
            </div>
  
            {/* 텍스트 내용 */}
            <div className="w-full md:w-1/2 space-y-8">
              <p className="text-gray-500 uppercase text-lg tracking-wide">SOLUTION</p>
              <h3 className="text-5xl font-bold">{title}</h3>
              <p className="text-xl text-gray-600 leading-normal whitespace-pre-line">{description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default SolutionCard;
