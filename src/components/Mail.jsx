import React from 'react'

const Mail = () => {

  return (
    <div className='flex justify-center items-center text-[#ff396d] gap-3 py-4 border-b-1'>
        <div className='w-[100px] h-[2px] bg-[#333446] rounded-sm'></div>
        <a href='mailto: merjashourov@gmail.com' className='border-transparent border-b-2  hover:border-[#ff396d] hover:border-b-2'> merjashourov@gmail.com </a>
        <div className='w-[100px] h-[2px] bg-[#333446] rounded-sm'></div>
    </div>
  )
}

export default Mail