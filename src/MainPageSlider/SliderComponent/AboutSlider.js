import React from "react";
import styles from './SliderCompont.module.css';

const AboutSlider = () =>{
    return(
        <div className={styles.Slider}>
            <img src="images/AB.jpg"/>
            <div className={styles.CenterBtn}>
                <button>우리에 대해서</button>
            </div>
        </div>
    )
}
export default AboutSlider;