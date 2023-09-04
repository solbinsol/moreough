import react from "react";
import style from "./FooterCss.module.css";

const Footer = () =>{
    return(
        <div className={style.Footer}>
            <img src="/images/instagram.png"/>
            <h1 className={style.Logo}>MORE:OUGH</h1>
            <p><span className={style.point}>more:ough</span> 대표 김예빈</p>
            <p>주소 경기 평택시 원평2로27번길 21 1층 모어프</p>
            <p>사업자등록번호[6833000419]</p>
            <p>통신판매업신고2017-수원팔달-0435[사업자정보확인] 전화070-7537-0091 팩스</p>
            <p>개인정보보호책임자정지영(jungjiyoungcoffee@gmail.com)</p>
            <p className={style.Fb}>© more:ough. All rights reserved.</p>
        </div>
    )
}

export default Footer;