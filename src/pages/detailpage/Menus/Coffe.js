import React, { useState } from "react";
import styles from "./Menu.module.css";

const mainpage = () => {
  // 초기 상태에서는 "음료" 메뉴만 보이도록 설정
  const [selectedMenu, setSelectedMenu] = useState("drinks");

  return (
    <div className={styles.Menu}>
        <div className={styles.MenuLi}>
            <div className={styles.MenuItem}>
                <img src="/images/coffe5.jpg" />
                <div className={styles.MenuP}>
                <p className={styles.MenuName}>아메리카노</p>
                <p className={styles.Price}>4,000</p>
                </div>
            </div>
            <div id={styles.center} className={styles.MenuItem}>
                <img src="/images/coffe4.jpg" />
                <div className={styles.MenuP}>

                <p className={styles.MenuName}>시그니쳐 라떼</p>
                <p className={styles.Price}>5,000</p>
                </div>
            </div>
            <div className={styles.MenuItem}>
  

                <img src="/images/coffe1.jpg" />
                <div className={styles.MenuP}>
                <p className={styles.MenuName}>율무크림라떼</p>
                <p className={styles.Price}>4,500</p>
                </div>
            </div>
        </div>

    </div>
  );
};

export default mainpage;
