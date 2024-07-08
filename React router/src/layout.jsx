import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from './components/Header/header.jsx'
import Footer from './components/Footer/footer.jsx'


function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout