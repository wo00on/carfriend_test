import React from "react";

const Footer = () => {
  return (
    <footer className="text-center p-4 bg-gray-100 mt-10">
      <p className="text-sm text-gray-600">© 2025 카프렌드. All rights reserved.</p>
      <div className="flex justify-center gap-4 mt-2">
        <a href="#">사용자 이용약관</a>
        <a href="#">개인정보처리방침</a>
        <a href="#">고객센터</a>
      </div>
    </footer>
  );
};

export default Footer;
