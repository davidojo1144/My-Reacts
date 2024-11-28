import React from "react";
import style from "../styles/Header.module.css"

const Header = ()=>{
    return(
        <div className={style.mainContainer}>
            <h1 className={style.movie}>MOVIES</h1>
            <div className={style.secondContainer}>
                <input className={style.myinput} placeholder="Search..."></input>
                <button className={style.btn}>Click Me</button>
            </div>
        </div>
    )
}

export default Header