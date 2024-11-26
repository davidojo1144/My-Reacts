import Layout from "../layout/Layout"
import SignUp from "../auth/SignUp"
import Login from "../auth/Login"

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

        ]

    }

]

export default ROUTES;