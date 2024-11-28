import React from "react";
import { useGetTopRatedMoviesQuery } from "../service/MovieApi";
import Card from "../reuseables/Card"


const TopRatedMovie = () =>{

    const {data} = useGetTopRatedMoviesQuery();
   // console.log(data);


    return (
        <>
        <Card data = {data}/>
       </>
    );
}

export default TopRatedMovie
