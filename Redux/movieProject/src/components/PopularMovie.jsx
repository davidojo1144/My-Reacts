import React from "react";
import { useGetPopularMoviesQuery } from "../service/MovieApi";
import Card from "../reuseables/Card"


const PopularMovie = () =>{

    const {data} = useGetPopularMoviesQuery();
    //console.log(data);


    return (
        <>
        <Card data = {data}/>
       </>
    );
}

export default PopularMovie