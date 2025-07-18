import React from 'react'

const About = () => {
  return (
    <div className='p-30 text-white bg-[var(--main-bg)]'>
      <h2 className='text-5xl font-bold mb-30'>About Me.</h2>

      <div className="section-profile flex flex-row justify-center my-20">
        <div className="icon w-[30%]">
          <div className="icon-box  bg-[var(--primary-text)] rounded-sm w-[150px] h-[150px] bg-center bg-[url(./assets/bg-image.png)]">
            <div className="image w-[150px] h-[150px] bg-black text-white relative top-10 left-10 rounded-sm p-5 text-[var(--secoundery-text)]">
              <svg id="icon-user" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" role="img"><title>Profile</title><path d="M83.3333 87.5V79.1667C83.3333 74.7464 81.5773 70.5072 78.4517 67.3816C75.3261 64.256 71.0869 62.5 66.6666 62.5H33.3333C28.913 62.5 24.6738 64.256 21.5482 67.3816C18.4226 70.5072 16.6666 74.7464 16.6666 79.1667V87.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M50 45.8333C59.2048 45.8333 66.6667 38.3714 66.6667 29.1667C66.6667 19.9619 59.2048 12.5 50 12.5C40.7953 12.5 33.3334 19.9619 33.3334 29.1667C33.3334 38.3714 40.7953 45.8333 50 45.8333Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </div>
          </div>
        </div>
        <div className="detail w-[70%]">
          <p className='text-sm font-bold text-[#FF396D] '>O1</p>
          <h2 className=' text-3xl font-bold mb-10 mt-2'>Profile</h2>
          <p className=' text-l text-[var(--secoundery-text)] '>I’m a third-year undergraduate student and passionate full-stack developer with experience inbuilding dynamic web applications.I enjoy creating seamless user expeiences and solving complex problems through code.</p>
        </div>
      </div>

      <div className="section-skill flex flex-row justify-start my-20">
        <div className="icon w-[30%]">
          <div className="icon-box w-[150px] h-[150px] bg-center bg-[var(--primary-text)] bg-[url(./assets/bg-image.png)]">
            <div className="image w-[150px] h-[150px] bg-[black] text-white relative top-10 left-10  p-5 text-[var(--secoundery-text)]">
              <svg id="icon-layout" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" role="img"><title>Skills</title><path d="M79.1667 12.5H20.8333C16.231 12.5 12.5 16.231 12.5 20.8333V79.1667C12.5 83.769 16.231 87.5 20.8333 87.5H79.1667C83.769 87.5 87.5 83.769 87.5 79.1667V20.8333C87.5 16.231 83.769 12.5 79.1667 12.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12.5 37.5H87.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M37.5 87.5V37.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </div>
          </div>
        </div>
        <div className="detail w-[70%]">
          <p className='text-sm font-bold text-[#FF396D] '>O2</p>
          <h2 className=' text-3xl font-bold mb-10 mt-2'>Skills</h2>
          <div className="all-skill">
            <ul className='list-[square] px-10'>
              <li>Html/CSS</li>
              <li>Tailwind</li>
              <li>ReactJS</li>
              <li>NodeJS</li>
              <li>MongoDB</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="section-experience"></div>
    </div>

  )
}

export default About