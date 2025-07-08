import React from 'react'

const Mail = () => {

  return (
    <div className='flex justify-center items-center text-[#ff396d] gap-3 py-5  bg-[var(--main-bg)]'>
        <div className='w-[100px] h-[1px] bg-[#fff] rounded-sm'></div>
        <a href='mailto: merjashourov@gmail.com' className='border-transparent border-b-2  hover:border-[#ff396d] hover:border-b-2'> merjashourov@gmail.com </a>
        <div className='w-[100px] h-[1px] bg-[#fff] rounded-sm'></div>
    </div>
  )
}

export default Mail