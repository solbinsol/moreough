import React from "react";
import styles from './SliderCompont.module.css';
import Footer from "@/Footer/Footer";
const CafeSlider = () =>{
    return(
        <div className={styles.Slider}>
            <img src="images/Menu.jpeg"/>
            <div className={styles.CenterBtn}>
                <button>More:Ough Menu</button>
            </div>
        </div>
    )
}
export default CafeSlider;