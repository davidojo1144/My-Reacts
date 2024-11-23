import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import router from './Router/Router'

const routers = createBrowserRouter([...router])

function App() {

  return (
    <>
      <RouterProvider router={routers}/>
    </>
  )
}

export default App
