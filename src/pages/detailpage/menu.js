import React, { useState } from "react";
import Header from "../../Header/Heder";
import styles from "./Menu.module.css";
import Footer from "../../Footer/Footer";
import Coffe from "./Menus/Coffe";
import NonCoffee from "./Menus/nonCoffe";
import Desert from "./Menus/Desert";

const mainpage = () => {
  // 초기 상태에서는 "음료" 메뉴만 보이도록 설정
  const [selectedMenu, setSelectedMenu] = useState("drinks");

  return (
    <div className={styles.dpg}>
      <div className={styles.HB}>
        <Header></Header>
      </div>
      <div className={styles.Menus}>
        <h1>Menu</h1>
        
        {/* 네비게이션 추가 */}
        <nav className={styles.Navigation}>
          <ul>
            <li onClick={() => setSelectedMenu("drinks")}>Coffe</li>
            <li onClick={() => setSelectedMenu("noncoffee")}>None Coffe</li>
            <li onClick={() => setSelectedMenu("desserts")}>Desert</li>
          </ul>
        </nav>
        
        {/* 컨텐츠 부분 */}
        <div className={styles.Content}>
          {selectedMenu === "drinks" && <Coffe></Coffe>}
          {selectedMenu === "noncoffee" && <NonCoffee></NonCoffee>}
          {selectedMenu === "desserts" && <Desert></Desert>}
        </div>
      </div>
      <Footer></Footer>

    </div>


  );
};

export default mainpage;
