import React from 'react'

const SkillButton = ({skillName}) => {
  return (
    <button className='px-4 py-2 bg-[#451C25] rounded-sm hover:bg-[#301A1F] text-sm text-[var(--secoundery-text)] duration-300'>{skillName}</button>
  )
}

export default SkillButton