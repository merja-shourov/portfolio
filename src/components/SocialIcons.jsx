import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { SiCodeforces } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import { FaFacebookSquare } from "react-icons/fa";



const SocialIcons = () => {
    return (
        <div className="social-icons bg-[var(--main-bg)] flex flex-col justify-center gap-5 h-[100vh] w-[50px]">
            
            <div className="icons w-[50px] h-[calc(100vh-200px)] flex flex-col items-center justify-end text-white text-xl bg-[var(--main-bg)]" >
                <a href="#" className='hover:mr-[10px] hover:text-[var(--primary-text)] duration-300 p-2' > <FaFacebookSquare /> </a>
                <a href="#" className='hover:mr-[10px] hover:text-[var(--primary-text)] duration-300 p-2' > <FaLinkedinIn /> </a>
                <a href="#" className='hover:mr-[10px] hover:text-[var(--primary-text)] duration-300 p-2'>  <FiGithub /></a>
                <a href="#" className='hover:mr-[10px] hover:text-[var(--primary-text)] duration-300 p-2'> <SiCodeforces /> </a>
                <a href="#" className='hover:mr-[10px] hover:text-[var(--primary-text)] duration-300 p-2'> <SiLeetcode /> </a>
            </div>
            <div className="bg-gray w-[50px] h-[200px] flex flex-col justify-start items-center">
               <div className="line w-[3px] h-[200px] bg-[var(--primary-text)]"></div>
            </div>
        </div>

    )
}

export default SocialIcons