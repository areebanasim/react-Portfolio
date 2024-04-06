import React from 'react'
import './intro.css';
import cv from './resume.png'
import image from './about1.png'
const Intro = () => {
    return (
        <div>
            <section id="header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6" id="size">
                            <h3>Hello I am </h3>
                            <h1><span className='areeba'> Areeba</span></h1>
                            <h1><span id="element">Frontend Web Developer</span></h1>
                            <p className='para'>I am passionate Web Developer with experience in creating user friendly website</p>
                            <div><a href={cv} download="CV"><button type="submit"
                                className="btn btn-success download-btn " id="downloadBtn">Download CV</button></a>
                                <a href='https://github.com/areebanasim' target='-blank'><button type='submit' className='btn btn-success' id='github'>Visit Github</button></a>
                            </div>
                        </div>
                        <div className="col-lg-6 mt-5"><img id="image" src={image} height="70%" width="70%" alt="" /></div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Intro
