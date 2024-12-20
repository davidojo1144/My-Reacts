import {Outlet} from "react-router-dom";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import style from "../styles/layout.module.css";


const Layout = ()=>{
    return(
        <>
            <Header/>
            <div className={style.outletContainer}>
                <SideBar className={style.myside}/>
                <Outlet/>
            </div>
            <Footer/>
        </>
    )
}

export default Layout