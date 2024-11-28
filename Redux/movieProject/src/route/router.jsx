import Layout from "../layout/Layout"
import SignUp from "../auth/SignUp"
import Login from "../auth/Login"
import PopularMovie from "../components/PopularMovie";
import UpcomingMovie from "../components/UpcomingMovie";
import NowPlayingMovie from "../components/NowPlayingMovie";
import TopRatedMovie from "../components/TopRatedMovie";

const ROUTES = [
    {
        path: "/",
        element: <SignUp/>
    },

    {
        path: "/login",
        element: <Login/>
    },

    {
        path: "/movie",
        element: <Layout/>,
        children:[
            {
                path: "/movie/popular",
                element: <PopularMovie/>

            },
            {
                path: "/movie/upcoming",
                element: <UpcomingMovie/>

            },
            {
                path: "/movie/nowplaying",
                element: <NowPlayingMovie/>

            },
            {
                path: "/movie/toprated",
                element: <TopRatedMovie/>

            }

        ]

    }

]

export default ROUTES;