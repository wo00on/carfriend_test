import { FaWrench, FaUserShield, FaClipboardCheck, FaCar, FaMapMarkerAlt, FaPhone, FaClock, FaParking, FaDirections, FaCommentDots } from "react-icons/fa";
import { BiCamera } from "react-icons/bi";
import { useEffect } from "react";

const NaverMap = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=d61ao7lt8s`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      const map = new window.naver.maps.Map("map", {
        center: new window.naver.maps.LatLng(36.968502, 127.940106),
        zoom: 15,
        mapTypeControl: true,
      });

      const marker = new window.naver.maps.Marker({
        position: new window.naver.maps.LatLng(36.968502, 127.940106),
        map,
        title: "카프랜드 (충북 충주시 봉현로 319)",
      });

      const infoWindow = new window.naver.maps.InfoWindow({
        content: `<div style="padding:10px; font-size:16px; font-weight: bold;">
                    <strong>카프랜드</strong><br />
                    충북 충주시 봉현로 319<br />
                    <a href="https://map.naver.com/p/search/%EC%B6%A9%EC%A3%BC%20%EC%B9%B4%ED%94%84%EB%9E%9C%EB%93%9C" 
                       target="_blank" style="color:blue; font-weight: bold;">네이버 지도에서 보기</a>
                  </div>`,
      });

      window.naver.maps.Event.addListener(marker, "click", function () {
        infoWindow.open(map, marker);
      });
    };
  }, []);

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center py-30 bg-white px-4 md:px-10">
      <div className="w-full max-w-6xl bg-white rounded-lg shadow-md p-6 md:p-8 flex flex-col lg:flex-row gap-6 lg:gap-10">
        {/* 왼쪽 정보 섹션 */}
        <div className="w-full lg:w-2/5 flex flex-col gap-6 text-gray-800">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">찾아오시는 길</h2>
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-blue-500 text-2xl" />
            <p className="text-lg md:text-xl font-bold">충북 충주시 봉현로 319</p>
          </div>
          <div className="flex items-center gap-4">
            <FaPhone className="text-green-500 text-2xl" />
            <p className="text-lg md:text-xl font-bold">043-123-4567</p>
          </div>
          <div className="flex items-center gap-4">
            <FaClock className="text-yellow-500 text-2xl" />
            <p className="text-lg md:text-xl font-bold">평일 09:00 - 18:00 / 토요일 10:00 - 16:00</p>
          </div>
          <div className="flex items-center gap-4">
            <FaParking className="text-red-500 text-2xl" />
            <p className="text-lg md:text-xl font-bold">주차 가능</p>
          </div>
          <div className="flex gap-4 mt-4 flex-wrap">
            <a
              href="https://map.naver.com"
              target="_blank"
              className="flex items-center gap-3 bg-blue-600 text-white px-5 py-2.5 rounded-lg text-lg md:text-xl font-bold hover:bg-blue-700"
            >
              <FaDirections /> 길찾기
            </a>
            <a
              href="https://pf.kakao.com"
              target="_blank"
              className="flex items-center gap-3 bg-green-500 text-white px-5 py-2.5 rounded-lg text-lg md:text-xl font-bold hover:bg-green-600"
            >
              <FaCommentDots /> 카카오톡 상담
            </a>
          </div>
        </div>
        {/* 오른쪽 지도 섹션 */}
        <div className="w-full lg:w-3/5">
          <div id="map" className="w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-lg shadow-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default NaverMap;
