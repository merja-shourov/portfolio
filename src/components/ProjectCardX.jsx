import React from 'react'

import { FiGithub } from "react-icons/fi";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

import SkillButton from './SkillButton'

const ProjectCardX = () => {
  return (
    <div className='flex flex-row justify-start items-center py-5 px-5 bg-[#1c1c1c] hover:bg-[#301A1F] border-b-1'>
        <div className="title w-[50%] text-[var(--secoundery-text)] font-semibold">Porject Manager App</div>
        <div className="technology-used w-[40%] flex gap-5 items-center justify-start flex-wrap">
            <SkillButton skillName={"React"} />
            <SkillButton skillName={"Html"} />
            <SkillButton skillName={"Css"} />
            <SkillButton skillName={"JavaScript"} />
        </div>
        <div className="links w-[10%] flex justify-start items-center gap-3 text-xl text-[var(--secoundery-text )]">
            <a href="#"><FiGithub className='hover:text-[var(--primary-text)] duratin-200' /> </a>
            <a href="#"> <FiExternalLink className='hover:text-[var(--primary-text)] duration-200' /></a>
        </div>
    </div>
  )
}

export default ProjectCardX