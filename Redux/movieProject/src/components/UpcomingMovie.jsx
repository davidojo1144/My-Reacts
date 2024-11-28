import React from "react";
import { useGetUpcomingMoviesQuery } from "../service/MovieApi";
import Card from "../reuseables/Card"


const UpcomingMovie = () =>{

    const {data} = useGetUpcomingMoviesQuery();
    console.log(data);


    return (
        <>
        <Card data = {data}/>
       </>
    );
}

export default UpcomingMovie
