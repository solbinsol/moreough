import React,{useEffect} from "react";
import Header from "../Header/Heder";
import VerticalSlider from "../MainPageSlider/Slider";
import styles from "./MainPage.module.css";
import Footer from "../Footer/Footer";
const mainpage = () =>{
  useEffect(() => {
    // 페이지 진입 시 스크롤 활성화
    document.body.style.overflowY = 'hidden';

    // 페이지 떠날 때 스크롤 다시 숨김
    return () => {
      document.body.style.overflowY = 'auto';
    };
  }, []);

  return(
    <div className={styles.MP}>
      <Header></Header>
      <VerticalSlider></VerticalSlider>

    </div>
  )
}

export default mainpage;