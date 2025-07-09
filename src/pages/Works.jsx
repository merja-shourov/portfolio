import React from 'react'
import ProjectCard from '../components/ProjectCard'
import ProjectCardReverse from '../components/ProjectCardReverse'
import ProjectCardX from '../components/ProjectCardX'
const Works = () => {
  return (
    <div className='text-[#fff] bg-[var(--main-bg)]'>
      <h2 className='text-5xl font-bold px-30'>My Works.</h2>
      <div className="all-cards">
        <ProjectCard />
        <ProjectCardReverse />
        <ProjectCard />
        <ProjectCardReverse />
      </div>

      <div className="archive p-30">
        <div className="title mb-20">
          <p className='text-md uppercase font-semibold text-[var(--primary-text)]'>Archive</p>
          <h2 className='text-3xl font-bold mt-2 mb-5'>Other Project</h2>
          <span className='text-sm text-[var(--secoundery-text)]'>A big list of things I've worked on.</span>
        </div>
        <div className="cards">
          <div className="table-header flex flex-start items-center text-sm py-5">
            <div className="project-title  w-[50%] uppercase text-[var(--secoundery-text)] font-bold">Project Title</div>
            <div className="technology w-[40%] uppercase text-[var(--secoundery-text)] font-bold">Technology Used</div>
            <div className="links w-[10%] uppercase text-[var(--secoundery-text)] font-bold">Links</div>
          </div>
          <div className="all-projectCardX">
            <ProjectCardX />
            <ProjectCardX />
            <ProjectCardX />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Works