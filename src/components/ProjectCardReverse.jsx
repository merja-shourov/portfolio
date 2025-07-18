import React from 'react'
import SkillButton from './SkillButton'
import ClickButton from './ClickButton'


const ProjectCardReverse = ({title, desc }) => {
    return (
        <div className='project-card px-30 py-20 bg-[var(--main-bg)] flex justify-center items-center gap-10'>

            <div className="project-desc w-[60%] py-10 px-5 text-right">
                <h2 className='title text-4xl font-bold mb-5 hover:text-[var(--primary-text)] duration-300'>{title}</h2>
                <p className='details text-md text-[var(--secoundery-text)]'>{desc}</p>
                <div className="skills flex  justify-end items-center flex-wrap gap-2 mt-5 mb-10">
                    <SkillButton skillName={"React"} />
                    <SkillButton skillName={"NodeJs"} />
                    <SkillButton skillName={"MongoDB"} />
                    <SkillButton skillName={"HTML/CSS"} />
                </div>

                <ClickButton buttonName={"View Project"} link={"#"} />
            </div>

            <div className="project-image w-[40%] flex justify-center items-center ">
                <div className="img-box w-[400px] h-[300px] bg-[url(./assets/bg-image.png)] bg-cover bg-[#BB2649] ">
                    <img className='w-[100%] h-[100%] relative top-10 right-10 border-l-3 border-b-3 border-[#BB2649]' src="#" alt="project-img" />
                </div>
            </div>
        </div>
    )
}

export default ProjectCardReverse