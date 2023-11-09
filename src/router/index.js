import { createBrowserRouter } from "react-router-dom"

import Login from "../pages/Login"
import GeekLayout from "../pages/Layout"

const router = createBrowserRouter([
    {
        path:'/',
        element:<GeekLayout />
    },
    {
        path:'/login',
        element:<Login />
    }
])

export default router