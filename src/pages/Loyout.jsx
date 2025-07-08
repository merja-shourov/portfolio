import React from 'react'
import Sidebar from '../components/Sidebar'
import Home from './Home'
import { Outlet } from 'react-router-dom'
import Mail from '../components/Mail'
import SocialIcons from '../components/SocialIcons'
import Footer from '../components/Footer'
const Loyout = () => {
    return (
        <>
            <div className="sidebar fixed top-0 left-0">
                <Sidebar />
            </div>
            <div className="social-icons fixed top-0 right-0">
                <SocialIcons />
            </div>
            <div className="main-area h-[100vh] w-[calc(100vw-150px)]  ml-[100px] mr-[50px] bg-[var(--main-bg)]">
                <Mail />
                <Outlet />
                <Footer />
            </div>
        </>
    )
}

export default Loyout