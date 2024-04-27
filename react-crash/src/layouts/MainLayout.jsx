import React from 'react'
// where route your are on this page is gonna come from the outlet
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from '../components/Navbar'

const MainLayout = () => {
  return (
    <>
     <Navbar/>
     <Outlet />
     <ToastContainer />
    </>
   
  )
}

export default MainLayout
