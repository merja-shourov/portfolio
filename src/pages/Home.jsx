import React from 'react'
import Mail from '../components/Mail'
import { FiGithub } from "react-icons/fi";
import { FiExternalLink } from "react-icons/fi";
import Card from '../components/Card';

import ClickButton from '../components/ClickButton';
const Home = () => {
  return (
    <div className='bg-[#181818] text-white'>

      <div className='flex justify-center items-center bg-[#181818]'>
        <div className="image w-[50%] h-[calc(100vh-100px)]  flex justify-center items-center">
          <div className="img-box w-[400px] h-[400px] bg-[url(./assets/bg-image.png)] bg-cover bg-[#BB2649] absolute">
            <img className='h-[100%]  border-[#BB2649] border-r-2 border-b-2 w-[100%] object-cover relative top-10 left-10' src="https://t3.ftcdn.net/jpg/06/01/17/18/360_F_601171827_GwbDHEuhisbGFXRfIpXFhtf7wAvsbLut.jpg" alt="merja" />
          </div>
        </div>
        <div className="detail w-[50%] p-5">
          <span className='uppercase text-sm text-[#ff396d] font-bold'>Hi, My name is</span>
          <h2 className='text-[72px] font-bold'>Merja Shourov</h2>
          <h4 className='text-3xl text-[#ff396d] font-semibold'>Ful-Stack Developer (<span className='text-[var(--secoundery-text)]'>MERN</span>)</h4>
          <p className='text-md text-gray-400 mt-10 mb-5'>I’m a third-year undergraduate student and passionate full-stack developer with expe
            ience inbuilding dynamic web applications.I enjoy creating seamless user expeiences and solving complex problems through code. Eager to lean and grow in the tech industy.</p>
          <button className='px-5 py-3 border-1 duration-300 border-[#ff396e]  bg-[#451C25] text-[#fff]  rounded-sm  text-sm shadow-md hover:bg-[#301A1F]'>View my works</button>
        </div>
      </div>

      {/* feature area */}
      <div className="featured-area px-30 py-20">
        <div className="section-details mb-20">
          <span className='uppercase text-l text-[#ff396d] font-semibold'>Featured Works</span>
          <h1 className='text-[40px] font-bold'>My Valauabe Craft</h1>  
        </div>
        {/* works */}
        {/* porject-1 */}
        <div className="porject-1 flex justify-between items-center mb-40">

          <div id="project-image" className='w-[40%]  flex justify-start items-center'>
            <div className="image-box w-[300px] h-[300px] bg-[url(./assets/bg-image.png)] bg-cover bg-[#BB2649] absolute">
              <img className='w-[100%] h-[100%] relative top-10 left-10  border-[#ff396d] border-r-2 border-b-2' src="/src/assets/images/portfolio.png" alt="" />
            </div>
          </div>

          <div id="project-description" className='w-[60%]'>
            <h2 className='text-[56px] font-bold hover:text-[#ff396d] duration-300'>Personal Website</h2>
            <p className='text-md text-gray-200 my-4'>I'm Merja Shourov, a Undergraguate Student & Full-Stack developer. This is my official personal website for portfolio.</p>

            <div className="technology flex items-center gap-3 mb-10">
              <button className='px-4 py-2 bg-[#301A1F] rounded-sm hover:bg-[#BA2649] duration-300'>React</button>
              <button className='px-4 py-2 bg-[#301A1F] rounded-sm hover:bg-[#BA2649] duration-300'>Tailwind</button>
              <button className='px-4 py-2 bg-[#301A1F] rounded-sm hover:bg-[#BA2649] duration-300'>HTML</button>
            </div>
            <a href="https://merja-shouorov.varcel.app" className='px-5 py-3 bg-[#301A1F] text-xl border border-[#BA2649] rounded-sm hover:bg-[#451C25] duration-300'>View Porjects</a>
          </div>
        </div>

        {/* project-2 */}
        <div className="porject-2 flex  justify-between items-center mb-40">

          <div id="project-description" className='p-5 w-[60%] text-right'>
            <h2 className='text-[56px] font-bold hover:text-[#ff396d] duration-300'>Personal Website</h2>
            <p className='text-md text-gray-200 my-4'>I'm Merja Shourov, a Undergraguate Student & Full-Stack developer. This is my official personal website for portfolio</p>

            <div className="technology flex justify-end items-center gap-3 mb-10">
              <button className='px-4 py-2 bg-[#301A1F] rounded-sm hover:bg-[#BA2649] duration-300'>React</button>
              <button className='px-4 py-2 bg-[#301A1F] rounded-sm hover:bg-[#BA2649] duration-300'>Tailwind</button>
              <button className='px-4 py-2 bg-[#301A1F] rounded-sm hover:bg-[#BA2649] duration-300'>JavaScript</button>
            </div>
            <a href="#" className='px-5 py-3 bg-[#301A1F] text-xl border border-[#BA2649] rounded-sm hover:bg-[#451C25] duration-300'>View Porjects</a>
          </div>

          <div id="project-image" className='w-[40%] p-10 flex justify-end items-center'>
            <div className="image-box w-[300px] h-[300px] bg-[url(./assets/bg-image.png)] bg-cover bg-[#BB2649] absolute">
              <img className='w-[100%] h-[100%] relative top-10 left-10  border-[#ff396d] border-r-2 border-b-2' src="" alt="" />
            </div>
          </div>
        </div>



        <div className="section-details my-10">
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