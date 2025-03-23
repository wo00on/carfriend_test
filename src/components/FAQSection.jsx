import { FaWrench, FaUserShield, FaClipboardCheck, FaCar } from "react-icons/fa";
import { BiCamera } from "react-icons/bi";

const FAQSection = () => {
  const cardData = [
    {
      icon: <BiCamera className="text-blue-500 text-6xl opacity-80" />,
      title: "내 차 수리비는 얼마일까?",
      description: (
        <>
          사진을 올리면 <span className="text-black font-bold text-lg">견적</span>이 도착합니다.
        </>
      ),
    },
    {
      icon: <FaUserShield className="text-green-500 text-6xl opacity-80" />,
      title: "누가 수리할까?",
      description: (
        <>
          국가에서 검증된 <span className="text-black font-bold text-lg">기능장</span>이 안내해드립니다.
        </>
      ),
    },
    {
      icon: <FaClipboardCheck className="text-yellow-500 text-6xl opacity-80" />,
      title: "어떻게 수리해야 할까?",
      description: (
        <>
          <span className="text-black font-bold text-lg">수리 절차</span>와{" "}
          <span className="text-black font-bold text-lg">주의사항</span>을 안내해드립니다.
        </>
      ),
    },
    {
      icon: <FaCar className="text-red-500 text-6xl opacity-80" />,
      title: "수리 후에는 어떻게 해야 할까?",
      description: (
        <>
          <span className="text-black font-bold text-lg">차량 점검</span>과{" "}
          <span className="text-black font-bold text-lg">유지보수</span> 방법을 제공합니다.
        </>
      ),
    },
  ];

  return (
    <section className="py-30 px-4 md:px-16 lg:px-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="p-10 rounded-3xl h-auto flex flex-col items-center bg-white shadow-xl 
            hover:shadow-2xl hover:scale-105 hover:translate-y-2 transition-all duration-300 cursor-pointer"
          >
            {/* 아이콘 */}
            <div className="mb-3">{card.icon}</div>
            {/* 제목 */}
            <h3 className="text-2xl font-bold text-center">{card.title}</h3>
            {/* 설명 */}
            <p className="text-gray-700 text-base text-center mt-2">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;