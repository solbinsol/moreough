import React from "react";
import Header from "../../Header/Heder";
import styles from "./Contact.module.css";
import Footer from "../../Footer/Footer";

const mainpage = () =>{

  return(
    <div className={styles.dpg}>
      <Header></Header>
      <div className={styles.About}>
        <div  className={styles.ImgBox}>
            <img src="/images/AB.jpg" />
            <div className={styles.ppp}>
            <p>
                Instagram. @more.ough
            </p>
            <p>E-mail. qkaejwnj@naver.com</p>
            <p>Tel. 010-6286-7011</p>
            </div>
        </div>
      </div>
      <Footer/>

    </div>
  )
}

export default mainpage;