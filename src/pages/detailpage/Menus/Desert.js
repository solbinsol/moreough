import React, { useState } from "react";
import styles from "./Menu.module.css";

const mainpage = () => {
  // 초기 상태에서는 "음료" 메뉴만 보이도록 설정
  const [selectedMenu, setSelectedMenu] = useState("drinks");

  return (
    <div className={styles.Menu}>
        <div className={styles.MenuLi}>
            <div className={styles.MenuItem}>
                <img src="/images/desert.jpg" />
                <p className={styles.MenuName}>바스크 치즈케이크</p>
                <p className={styles.Price}>4,500</p>
            </div>
            <div id={styles.center} className={styles.MenuItem}>
                <img src="/images/dersert2.jpg" />
                <p className={styles.MenuName}>피스타치오롤</p>
                <p className={styles.Price}>5,000</p>
            </div>
            <div className={styles.MenuItem}>
                <img src="/images/desert3.jpg" />
                <p className={styles.MenuName}>오렌지 타르트</p>
                <p className={styles.Price}>5,500</p>
            </div>
        </div>

    </div>
  );
};

export default mainpage;
