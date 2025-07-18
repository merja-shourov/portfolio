import React from 'react'
import Mail from '../components/Mail'
import { FiGithub } from "react-icons/fi";
import { FiExternalLink } from "react-icons/fi";
import Card from '../components/Card';
import { Link } from 'react-router-dom';
import ClickButton from '../components/ClickButton';
import ProjectCardReverse from '../components/ProjectCardReverse'
import ProjectCard from '../components/ProjectCard'


const Home = () => {
  return (
    <div className='bg-[#181818] text-white font-primary'>

      <div className='flex justify-center items-center bg-[#181818]'>
        <div className="image w-[40%] h-[calc(100vh-100px)]  flex justify-center items-center">
          <div className="img-box w-[300px] h-[400px] bg-[url(./assets/bg-image.png)] bg-contain bg-top  bg-[#BB2649] absolute">
            <img className='h-[100%]  border-[#BB2649] border-r-2 border-b-2 w-[100%] rounded-sm object-cover relative top-10 left-10' src="./src/assets/images/portfolio-image.png" alt="merja" />
          </div>
        </div>
        <div className="detail w-[60%] p-5">
          <span className='uppercase text-sm text-[#ff396d] font-bold'>Hi, My name is</span>
          <h2 className='text-[72px] font-bold'>Merja Shourov</h2>
          <h4 className='text-3xl text-[#ff396d] font-semibold'>Ful-Stack Developer (<span className='text-[var(--secoundery-text)]'>MERN</span>)</h4>
          <p className='text-xl text-[var(--secoundery-text)] mt-10 mb-10 '>I’m a third-year undergraduate student and passionate full-stack developer with experience inbuilding dynamic web applications.I enjoy creating seamless user expeiences and solving complex problems through code.</p>
          <Link to={"/works"} className='px-5 py-3 border-1 duration-300 border-[#ff396e]  bg-[#451C25] text-[#fff]  rounded-sm  text-sm shadow-md hover:bg-[#301A1F]'>View my works</Link>
        </div>
      </div>

      {/* feature area */}
      <div className="featured-area">
        <div className="section-details px-30 mb-20">
          <span className='uppercase text-l text-[#ff396d] font-semibold'>Featured Works</span>
          <h1 className='text-[40px] font-bold'>My Valauabe Craft</h1>
        </div>

        {/* porject-1 */}

        <ProjectCard title={"Personal Project"} desc={"I'm Merja Shourov, a Undergraguate Student & Full-Stack developer. This is my official personal website for portfolio."} />
        {/* project-2 */}
        <ProjectCardReverse title={"Personal Project"} desc={"I'm Merja Shourov, a Undergraguate Student & Full-Stack developer. This is my official personal website for portfolio."} />



        <div className="section-details my-10 px-30 py-20">
          <span className='uppercase text-l text-[#ff396d] font-semibold'>Other Works</span>
          <h1 className='text-[40px] font-bold'>Some Meaningful Projects</h1>

          {/* Cards */}
          <div className="cards flex flex-row gap-4 flex-wrap justify-eventualy my-10">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>


      {/* Get In Touch  */}
      <div className="Contact pb-30 px-30 w-[60%]">
        <span className='uppercase text-l text-[#ff396d] font-semibold'>Get In Touch</span>
        <h1 className='text-[40px] font-bold '>I'd love to hear from you.</h1>

        <p className='text-md  text-[var(--secoundery-text)] my-10'>I'm currently looking for new opportunities. Send me a message by fancy saying hi if you need my help or would like to chat. I'll try my best to get back to you!</p>

        <a href="#" className='text-md px-5 py-3 border-[var(--primary-text)] border-2 font-semibold bg-[#301A1F] hover:bg-[#451C25] text-[var(--secoundery-text)] rounded-sm'>Say Hello</a>


      </div>
    </div>
  )
}

export default Home