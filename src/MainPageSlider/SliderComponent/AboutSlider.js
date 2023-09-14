import React from "react";
import styles from './SliderCompont.module.css';
import { useRouter } from "next/router";

const AboutSlider = () =>{
    const router = useRouter();

    const handleNavigate = (route) => {
        router.push(route); // 프로그래밍 방식으로 페이지 이동
      };
    
    return(
        <div className={styles.Slider}>
            <img src="images/AB.jpg"/>
            <div className={styles.CenterBtn}>
                <button onClick={() => handleNavigate("/detailpage/about")}>우리에 대해서</button>
            </div>
        </div>
    )
}
export default AboutSlider;