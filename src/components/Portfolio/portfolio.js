import React from 'react'
import './portfolio.css'
import music from './music.PNG'
import tic from './tic tac toe.png'
import stopwatch from './stopwatch.PNG'


const Portfolio = () => {
    return (
        <div>
            <section id='portfolio' className='col-lg-6'>
                <h1 className='heading'>My Portfolio</h1>
                <p className='desc'>I take pride in paying attention to the smallest details and making
                    sure that my work is pixel perfect. I am excited to my bring my skills and experience to
                    help businesses achieve their goals and create a strong online presence</p>
                <div className='portfolioImgs col-lg-12 mt-5' >
                    <a href='https://areebanasim.github.io/music-player/' target='-blank'> <img className='portfolioImg' src={music} alt='Music WEbsite' /></a>
                    <a href='https://areebanasim.github.io/tic-tac-toe-game/' target='-blank'><img className='portfolioImg' src={tic} alt='Tic Tac Toe game' /></a>
                    <a href='https://areebanasim.github.io/stop-watch/' target='-blank'><img className='portfolioImg' src={stopwatch} alt='Stop Watch' /></a>
                </div>
            </section>
        </div>
    )
}

export default Portfolio
