import React from "react";
import style from "./HeaderCss.module.css";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  const handleNavigate = (route) => {
    router.push(route); // 프로그래밍 방식으로 페이지 이동
  };

  return (
    <div className={style.Header}>
      <div className={style.TopHeader}>

        <ul className={style.Content}>
        <li onClick={() => handleNavigate("/")} className={style.Logo}>M O R E  :  O U G H</li>
          <li className={style.t}onClick={() => handleNavigate("/detailpage/about")}>ABOUT</li>
          <li className={style.t} onClick={() => handleNavigate("/detailpage/cafes")}>CAFES</li>
          <li className={style.t} onClick={() => handleNavigate("/detailpage/contact")}>CONTACT</li>
          <li className={style.t} onClick={() => handleNavigate("/detailpage/menu")}>MENU</li>
          <li className={style.AllMenu}>-</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
