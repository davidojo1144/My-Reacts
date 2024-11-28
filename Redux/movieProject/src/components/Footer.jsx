import React from "react";
import style from "../styles/Footer.module.css"

const Footer = ()=>{
    return(
        <div className={style.generalContainer}>
            <div>
                <div className={style.footer}><p>USEFUL LINKS</p></div>
                    <ul>
                        <li><p>About</p></li>
                        <li><p>Services</p></li>
                        <li><p>Contact</p></li>
                        <li><p>shop</p></li>
                        <li><p>Blog</p></li>
                    </ul>
            </div>
        </div>
        
    )
}

export default Footer