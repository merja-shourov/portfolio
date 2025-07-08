import React from 'react'

import { FiGithub } from "react-icons/fi";
import { FiExternalLink } from "react-icons/fi";
import Button from './Button'

const Card = () => {
    return (
        <>
            <div className="card bg-[#301A1F] px-5 py-10 rounded-t-lg w-[32%] duration-400 hover:mb-[12px] hover:mt-[-12px]">
                
                <div className="social-links flex flex-start gap-3 text-xl text-[var(--secoundery-text)]">
                    <a href="#" className='hover:text-[var(--primary-text)] duration-300'><FiGithub /></a>
                    <a href="#" className='hover:text-[var(--primary-text)] duration-300'><FiExternalLink /></a>
                </div>
                <div className="desc">
                    <h2 className='text-[26px] font-semibold my-5'>Projct Management App</h2>
                    <p className='text-[var(--secoundery-text)] text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, nisi!</p>
                </div>
                <div className="buttons flex justfy-start items-center gap-2 flex-wrap mt-10">
                    <Button buttonName={"MongoDB"} />
                    <Button buttonName={"React"} />
                    <Button buttonName={"NodeJS"} />
                    <Button buttonName={"ExpressJS"} />
                    <Button buttonName={"GraphQl"} />
                </div>
            </div>

        </>
    )
}

export default Card