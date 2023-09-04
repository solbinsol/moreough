import React from "react";
import styles from './SliderCompont.module.css';

const CafeSlider = () =>{
    return(
        <div className={styles.Slider}>
            <img src="images/cart.jpg"/>
            <div className={styles.CenterBtn}>
                <button>온라인 스토어</button>
            </div>
        </div>
    )
}
export default CafeSlider;