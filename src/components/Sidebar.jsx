import React from 'react'
import { FaHome } from "react-icons/fa";
import { CiCircleInfo } from "react-icons/ci";
import { AiFillAppstore } from "react-icons/ai";
import { MdAddIcCall } from "react-icons/md";
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='sidebar w-[100px] h-screen bg-[#BB2649] text-white flex flex-col justify-between'>
            <div className="logo w-[full] h-[100px]  flex flex-col justify-center items-center">
                <h2 className='text-[20px] font-bold'>Merja.</h2>
            </div>
            <ul className='text-sm border-white'>
                <NavLink to='/' ><li className='flex justify-center items-center flex-col border-[#BB2649] border-x-4 p-4 hover:bg-[#C54664] hover:border-l-4 hover:border-[white]'> <FaHome />Home</li></NavLink>
                <NavLink to="works">
                    <li className='flex justify-center items-center flex-col border-[#BB2649] border-x-4 p-4 hover:bg-[#C54664] hover:border-l-4 hover:border-[white]'><AiFillAppstore />Works</li>
                </NavLink>

                <NavLink  to="contact">
                    <li className='flex justify-center items-center flex-col border-[#BB2649] border-x-4 p-4 hover:bg-[#C54664] hover:border-l-4 hover:border-[white]' ><MdAddIcCall />Contact</li>
                </NavLink>

                <NavLink to="about">
                    <li className='flex justify-center items-center flex-col border-[#BB2649] border-x-4 p-4 hover:bg-[#C54664] hover:border-l-4 hover:border-[white]'> <CiCircleInfo />About</li>
                </NavLink>
             
            </ul>
            <div className="resume-button text-center w-[100%] h-[100px] text-sm">
                <button className='bg-[#C54664] border-[white] border-2 shadow-lg rounded-sm hover:bg-[#BB2649] font-bold p-2'> Resume </button>
            </div>
        </div>
    )
}

export default Sidebar