import React from 'react'

const ClickButton = ({buttonName, link}) => {
  return (
    <a href={link} className='px-5 py-3 bg-[#301A1F] text-[var(--secoundery-text)] text-md border-2 border-[#BA2649] rounded-sm hover:bg-[#451C25] duration-300'>{buttonName}</a>
  )
}

export default ClickButton