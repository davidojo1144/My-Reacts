import React from "react";
import {useGetNowPlayingMoviesQuery } from "../service/MovieApi";
import Card from "../reuseables/Card"


const NowPlayingMovie = () =>{

    const {data} = useGetNowPlayingMoviesQuery();
   // console.log(data);


    return (
       <>
        <Card data = {data}/>
       </>
    )
}

export default NowPlayingMovie
