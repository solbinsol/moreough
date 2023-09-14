import React from "react";
import styles from './SliderCompont.module.css';
import Footer from "@/Footer/Footer";
import { useRouter } from "next/router";

const CafeSlider = () =>{
    const router = useRouter();

    const handleNavigate = (route) => {
        router.push(route); // 프로그래밍 방식으로 페이지 이동
      };
    
    return(
        <div className={styles.Slider}>
            <img src="images/Menu.jpeg"/>
            <div className={styles.CenterBtn}>
                <button onClick={() => handleNavigate("/detailpage/menu")} >More:Ough Menu</button>
            </div>
        </div>
    )
}
export default CafeSlider;