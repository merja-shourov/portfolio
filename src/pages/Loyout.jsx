import React from 'react'
import Sidebar from '../components/Sidebar'
import Home from './Home'
import { Outlet } from 'react-router-dom'
import Mail from '../components/Mail'


const Loyout = () => {
    return (
        <>
            <div className="sidebar fixed top-0 left-0">
                <Sidebar />
            </div>
            <div className="main-area h-[100vh] w-[calc(100vw-200px)]  ml-[100px] mr-[100px]">
                <Mail />
                <Outlet />
            </div>
        </>
    )
}

export default Loyout