import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center p-5 shadow-md bg-white px-8 md:px-16 relative w-full">
      {/* 로고 */}
      <div className="flex items-center gap-4">
        <Link to="/">
          <div className="cursor-pointer">
            <h1 className="text-4xl font-extrabold text-[#000000] leading-tight">
              카프렌드
            </h1>
            <p className="text-lg text-[#000000]">10년타기정비센터</p>
          </div>
        </Link>
      </div>

      {/* 모바일 메뉴 버튼 */}
      <div className="md:hidden z-50">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* 네비게이션 메뉴 */}
      <nav
        className={`absolute top-0 right-0 h-screen w-2/3 bg-white shadow-lg p-5 transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:relative md:h-auto md:w-auto md:shadow-none md:p-0 md:flex md:items-center md:translate-x-0`}
      >
        <ul className="flex flex-col md:flex-row gap-8 text-lg text-center md:text-left">
          <li>
            <Link
              to="/technology"
              className="px-5 py-3 font-bold text-gray-800 hover:text-blue-600 transition duration-300 ease-in-out"
            >
              기술소개
            </Link>
          </li>
          <li>
            <Link
              to="/qna"
              className="px-5 py-3 font-bold text-gray-800 hover:text-blue-600 transition duration-300 ease-in-out"
            >
              Q&A
            </Link>
          </li>
          <li>
            <Link
              to="/guide"
              className="px-5 py-3 font-bold text-gray-800 hover:text-blue-600 transition duration-300 ease-in-out"
            >
              이용안내
            </Link>
          </li>
          <li>
            <Link
              to="/profile"
              className="px-5 py-3 font-bold text-gray-800 hover:text-blue-600 transition duration-300 ease-in-out"
            >
              내정보
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
