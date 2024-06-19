import React from 'react'
import './about.css'
import education from './education1.png'
import experience from './experience1.png'
import skills from './skills4.png'
import pic from './about1.png'
const About = () => {
  return (
    <div>
      <section id='about'>
        <h1 className='about-me'>About Me</h1>
        <img src={pic} alt='' className='aboutImg' />
        <div className='aboutBars'>
          <div className='aboutBar'>
            <img src={education} alt='Education'className='aboutBarimg'></img>
            <div className='aboutText'>
              <h3>Education</h3>
              <ul className='hidden'>
                <li>Intermediate from <b>Degree College for Women in Computer Science </b> (2021)</li>
                <li>Bachelor in <b>Electronic Engineering</b> from <b>Ned University</b> (2021-2025)</li>
                <li>Certified Course in <b>Web Developement</b></li>
              </ul>
              
            </div>
            </div>
          <div className='aboutBar'>
            <img src={experience} alt='Experience'className='aboutBarimg'></img>
            <div className='aboutText'>
              <h3>Experience</h3>
              <ul className='hidden'>
                <li>Internship at <b>SYNC INTERNS</b> as a web developer</li>
                <li>Internship at <b>PRODIGY INFOTECH</b> as a web developer</li>
              </ul>
             
            </div>
            </div>
          <div className='aboutBar'>
            <img src={skills} alt='Skills'className='aboutBarimg'></img>
            <div className='aboutText'>
              <h3>Skills</h3>
              <ul className='hidden'>
                <li>HTML CSS, JAVASCRIPT</li>
                <li>React JS</li>
                <li>WordPress</li>
                <li>Arduino</li>
                <li>C++</li>
              </ul>
              
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default About
