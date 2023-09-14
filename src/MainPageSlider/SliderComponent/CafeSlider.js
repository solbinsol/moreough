import React from "react";
import styles from './SliderCompont.module.css';
import { useRouter } from "next/router";

const CafeSlider = () =>{
    const router = useRouter();

    const handleNavigate = (route) => {
        router.push(route); // 프로그래밍 방식으로 페이지 이동
      };
    
    return(
        <div className={styles.Slider}>
            <img src="images/cart.jpg"/>
            <div className={styles.CenterBtn}>
                <button  onClick={() => handleNavigate("/detailpage/cafes")}><p>온라인 스토어</p></button>
            </div>
        </div>
    )
}
export default CafeSlider;