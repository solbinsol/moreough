import React from "react";
import Header from "../../Header/Heder";
import styles from "./Cafes.module.css";
import Footer from "@/Footer/Footer";
const mainpage = () =>{

  return(
    <div className={styles.dpg}>
      <Header></Header>
      <div className={styles.Cafes}>
        <div  className={styles.LImgBox}>
            <img src="/images/Cafes.jpeg" />     
        </div>    
        <div className={styles.Rcontent}>
        <div  className={styles.RImgBox}>
          <img src="/images/Cafess.jpeg" />    
        <div className={styles.Cafe}>
          <h2>CAFES</h2>
          <p>경기 평택시 원평2로27번길 21 1층 모어프</p>
          <p>평일 / 주말 11:00 ~ 20:30</p>
          <p>1F - 로스팅룸 , 카페공간</p>
          <br/>
          <p>핸드드립, 단체석, 포장, 무선 인터넷, 남/녀 화장실 구분, 국민지원금</p>
          </div>
        </div>  
        </div>

      </div>
      <Footer></Footer>

    </div>
  )
}

export default mainpage;