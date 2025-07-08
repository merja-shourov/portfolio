import React from 'react'
import { FaHome } from "react-icons/fa";
import { CiCircleInfo } from "react-icons/ci";
import { AiFillAppstore } from "react-icons/ai";
import { MdAddIcCall } from "react-icons/md";
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='sidebar w-[100px] h-screen bg-[#BB2649] text-white flex flex-col justify-between border-r-1'>
            <div className="logo w-[full] h-[100px]  flex flex-col justify-center items-center">
                <h2 className='text-[20px] font-bold'>Merja.</h2>
            </div>
            <ul className='text-lg border-white'>
                <NavLink to='/' ><li className='flex justify-center items-center flex-col border-[#BB2649] border-x-4 p-4 hover:bg-[#C54664] hover:border-l-4 hover:border-[white]'> <FaHome  className='text-3xl'/>Home</li></NavLink>
                <NavLink to="works">
                    <li className='flex justify-center items-center flex-col border-[#BB2649] border-x-4 p-4 hover:bg-[#C54664] hover:border-l-4 hover:border-[white]'><AiFillAppstore className='text-3xl' />Works</li>
                </NavLink>

                <NavLink  to="contact">
                    <li className='flex justify-center items-center flex-col border-[#BB2649] border-x-4 p-4 hover:bg-[#C54664] hover:border-l-4 hover:border-[white]' ><MdAddIcCall  className='text-3xl' />Contact</li>
                </NavLink>

                <NavLink to="about">
                    <li className='flex justify-center items-center flex-col border-[#BB2649] border-x-4 p-4 hover:bg-[#C54664] hover:border-l-4 hover:border-[white]'> <CiCircleInfo className='text-3xl' />About</li>
                </NavLink>
             
            </ul>
            <div className="resume-button text-center w-[100%] h-[100px]">
                <a href='#' className='bg-[#C54664] border-[white] border-1 shadow-lg uppercase text-sm rounded-sm hover:bg-[#BB2649] px-2 py-1 '> Resume </a>
            </div>
        </div>
    )
}

export default Sidebar