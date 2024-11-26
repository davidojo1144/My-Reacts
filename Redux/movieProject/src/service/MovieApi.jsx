import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const BASEURL = import.meta.env.VITE-APP_BASE_URL
const APIKEY = import.meta.env.VITE_APP_API_KEY

export const MoviesApi = createApi({
    reducerPath: "MovieApi",
    baseQuery: fetchBaseQuery({baseUrl:`${BASEURL}`}),
    endpoints:(builder)=>({
        getPopularMovies:builder.query({
            query:()=>(`${BASEURL}/movie/popular?api_key=${APIKEY}`)
        }),
        getUpcomingMovies:builder.query({
            query:()=>(`${BASEURL}/movie/upcoming?api_key=${APIKEY}`)
        }),
        getNowPlayingMovies:builder.query({
            query:()=>(`${BASEURL}/movie/now_playing?api_key=${APIKEY}`)
        }),
        getTopRatedMovies:builder.query({
            query:()=>(`${BASEURL}/movie/top_rated?api_key=${APIKEY}`)
        })
    })
})


export const {useGetPopularMoviesQuery, useGetUpcomingMoviesQuery,useGetNowPlayingMoviesQuery, useGetTopRatedMoviesQuery} = MoviesApi
