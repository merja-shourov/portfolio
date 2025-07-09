import React from 'react'
import SkillButton from './SkillButton'
import ClickButton from './ClickButton'

const ProjectCard = () => {
    return (
        <div className='project-card px-30 py-10 my-10 flex justify-center items-center '>
            <div className="project-image w-[40%]">
                <div className="img-box w-[400px] h-[300px] bg-[url(./assets/bg-image.png)] bg-cover bg-[#BB2649] ">
                    <img className='w-[100%] h-[100%] relative top-10 left-10 border-r-3 border-b-3 border-[#BB2649]' src="#" alt="project-img" />
                </div>
            </div>

            <div className="project-desc w-[60%] py-10 px-5">
                <h2 className='title text-3xl font-bold mb-5 hover:text-[var(--primary-text)] duration-300'>Personal Website</h2>
                <p className='details text-md text-[var(--secoundery-text)]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic eligendi quisquam ipsum quam. Odit, incidunt ea? Animi deserunt dolorem hic?</p>
                <div className="skills flex flex-row justify-start items-center flex-wrap gap-2 mt-5 mb-10">
                    <SkillButton skillName={"React"} />
                    <SkillButton skillName={"NodeJs"} />
                    <SkillButton skillName={"MongoDB"} />
                    <SkillButton skillName={"HTML/CSS"} />
                </div>

                <ClickButton buttonName={"View Project"}  link={"#"}/>
            </div>
        </div>
    )
}

export default ProjectCard