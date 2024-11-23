 import Login from "../auth/Login"
 import SignUp from "../auth/SignUp"
 import BookListPage from  "../components/BookListPage"

 
 const router =[
  {
    path: "/Login",
    element: <Login/>
  },

  {
    path: "/SignUp",
    element: <SignUp/>
  },

  {
    path:"/bookList",
    element:<BookListPage/>
  }

 ]

 export default router