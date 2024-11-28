import React from "react";
import style from "../styles/SideBar.module.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";




const SideBar = ()=>{

    // const navigate = useNavigate()

    // const page = ["popular", "upcoming", "nowplaying", "toprated"]

    // const handleClick =(event)=> {
    //     page.filter((page)=>{
    //         if(page.includes(event.target.value)) {
    //             navigate(`./${page}`)
    //         }
    //     })
    //     console.log(event.target.value)
    // }



    // const handleClick = ()=>{
    //     navigate("./popular")
    // }

    // const handleUpcomingClick = ()=>{
    //     navigate("./upcoming")
    // }

    // const handleNowPlayingClick = ()=>{
    //     navigate("./nowplaying")
    // }

    // const handleTopRatedClick = ()=>{
    //     navigate("./toprated")
    // }
        
    
    return(
        <div className={style.main}>
            <div className={style.sideBarContainer}>
                <Link to ={"/movie/popular"}><button className={style.mybtn}><p>Popular</p></button></Link>
                <Link to = {"/movie/upcoming"}><button className={style.mybtn}><p>Upcoming</p></button></Link>
                <Link to = {"/movie/nowplaying"}><button className={style.mybtn}><p>Nowplaying</p></button></Link>
                <Link to = {"/movie/toprated"}><button className={style.mybtn}><p>TopRated</p></button></Link>
            </div>
        </div>
    )
}

export default SideBar