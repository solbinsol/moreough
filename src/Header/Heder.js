// Header.js

import React, { useState } from "react";
import style from "./HeaderCss.module.css";
import { useRouter } from "next/router";
import Allmenu from "../pages/allmenu";

const Header = () => {
  
  const router = useRouter();
  const [showNewComponent, setShowNewComponent] = useState(false); // 상태 추가

  const handleNavigate = (route) => {
    router.push(route); // 프로그래밍 방식으로 페이지 이동
  };

  const handleAllMenuClick = () => {
    // AllMenu를 클릭하면 새로운 컴포넌트를 표시하도록 상태를 업데이트합니다.
    setShowNewComponent(true);
  };

  const handleCloseAllMenu = () => {
    // Allmenu 컴포넌트를 닫을 때 호출되는 함수
    setShowNewComponent(false);
  };

  return (
    <div className={style.Header}>
      <div className={style.TopHeader}>
        <ul className={style.Content}>
          <li onClick={() => handleNavigate("/")} className={style.Logo}>M O R E  :  O U G H</li>
          <li className={style.t} onClick={() => handleNavigate("/detailpage/about")}>ABOUT</li>
          <li className={style.t} onClick={() => handleNavigate("/detailpage/cafes")}>CAFES</li>
          <li className={style.t} onClick={() => handleNavigate("/detailpage/contact")}>CONTACT</li>
          <li className={style.t} onClick={() => handleNavigate("/detailpage/menu")}>MENU</li>
          <li className={style.AllMenu} onClick={handleAllMenuClick}>-</li>
        </ul>
      </div>

      {/* showNewComponent 상태가 true일 때만 Allmenu 컴포넌트를 표시합니다. */}
      {showNewComponent && <Allmenu onClose={handleCloseAllMenu} />}
    </div>
  );
};

export default Header;
