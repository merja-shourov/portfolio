import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-between  font-semibold  px-30 py-5 border-t-1 text-md text-[var(--secoundery-text)] bg-[var(--main-bg)]'>
        <span> &copy; 2025 <a href='#' className='hover:text-[var(--primary-text)]'> Merja Shourov</a></span>
        <span>Last Updated - July 2025</span>
    </div>
  )
}

export default Footer