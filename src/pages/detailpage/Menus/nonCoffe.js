import React, { useState } from "react";
import styles from "./Menu.module.css";

const mainpage = () => {
  // 초기 상태에서는 "음료" 메뉴만 보이도록 설정
  const [selectedMenu, setSelectedMenu] = useState("drinks");

  return (
    <div className={styles.Menu}>
        <div className={styles.MenuLi}>
            <div className={styles.MenuItem}>
                <img src="/images/noncoffe2.jpg" />
                <p className={styles.MenuName}>자두샤벳 에이드</p>
                <p className={styles.Price}>4,500</p>
            </div>
            <div id={styles.center} className={styles.MenuItem}>
                <img src="/images/coffe2.jpg" />
                <p className={styles.MenuName}>얼그레이 레몬티</p>
                <p className={styles.Price}>5,000</p>
            </div>
            <div className={styles.MenuItem}>
                <img src="/images/coffe3.jpg" />
                <p className={styles.MenuName}>후르츠 펀치</p>
                <p className={styles.Price}>5,500</p>
            </div>
        </div>

    </div>
  );
};

export default mainpage;
