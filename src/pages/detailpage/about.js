import React from "react";
import Header from "../../Header/Heder";
import styles from "./DetailCss.module.css";
import Footer from "../../Footer/Footer";

const mainpage = () =>{

  return(
    <div className={styles.dpg}>
      <Header></Header>
      <div className={styles.About}>
        <div  className={styles.ImgBox}>
            <img src="/images/AboutPagee.jpeg" />
            <p>수원 행궁동은 참 매력적인 장소입니다.</p>
<p>
서울에서 1시간 거리에 위치한 이곳은 다양한 문화재와, 세월의 흔적이 묻어있는 오래된 마을이 공존하고 있습니다.</p>
<p>정지영커피로스터즈는 바로 이 행궁동에서 시작한 커피 브랜드입니다.</p>
<p/>
<p>
우리는 아이러브뉴욕과 웰컴투제주를 동경하는 많은 사람들을 보면서,
</p>
<p>
내가 나고 자란 지역에 대한 애정이야 말로 스스로의 자존감과 자부심을 높이는 일이라는 것을 깨달았습니다.
</p>
<p>
누군가에게는 여행지가 되고, 또 다른 누군가에게는 삶의 터전이 되는 이곳에서,
</p>
<p>
정지영커피로스터즈는 호기심 어린 눈으로 찾아올 누군가를 위해 매일 커피를 내립니다.
</p>
<p>
커피 한 잔을 통해 낯선 곳에서의 경계심을 허물고 정지영커피만의 분위기를 느껴보세요.
</p>
<br/><br/>
<div className={styles.EnP}>
<p>
Suwon is a truly charming space. Located an hour away from Seoul, </p><p>there is Haenggung-dong, where historical cultural assets that show traces of time and the appearance of a town and the city coexist.</p><p>
JungJiyoung Coffee Roasters is a local brand that suggests Suwon's local culture located in Haenggung-dong.</p><p>
As we saw the many people who longed for I Love New York and Welcome to Jeju,</p><p> we realized that love for the region where I was born and raised is the only way to increase our self-esteem and self-esteem.</p><p> In this place that becomes a travel destination for some and a place of life for others, JungJiyoung Coffee Roasters brews </p><p>coffee every day for those who will come with a curious eye.</p><p>
With a cup of coffee,</p><p> break down the walls of your mind armed with caution in an unfamiliar place and feel the local atmosphere.</p>
<button><span className={styles.Ko}>매장안내</span><span className={styles.En}>Go</span></button>
</div>
        </div>

      </div>
      <Footer/>

    </div>
  )
}

export default mainpage;