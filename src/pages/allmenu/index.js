// Allmenu.js

import React from "react";
import style from "./Allmenu.module.css";
import { useRouter } from "next/router";

const Allmenu = ({ onClose }) => {
  const router = useRouter();

  // X를 클릭하면 부모 컴포넌트로 onClose 함수를 호출하여 상태를 업데이트합니다.
  const handleXClick = () => {
    onClose();
  };
  const handleNavigate = (route) => {
    router.push(route); // 프로그래밍 방식으로 페이지 이동
  };

  return (
    <div className={style.AllMenu}>
        <div className={style.BackImg}>
            <img src="/images/AB.jpg" />
        </div>
      <div className={style.CloseHeader}>
        <p onClick={handleXClick}>X</p>
      </div>
      <div className={style.SelectMenu}>
        <li onClick={() => handleNavigate("/detailpage/about")}>About</li>
        <li onClick={() => handleNavigate("/detailpage/cafes")}>Cafes</li>
        <li onClick={() => handleNavigate("/detailpage/contact")}>Contact</li>
        <li onClick={() => handleNavigate("/detailpage/menu")}>Menu</li>
      </div>
      {/* 내용 추가 */}
    </div>
  );
};

export default Allmenu;
