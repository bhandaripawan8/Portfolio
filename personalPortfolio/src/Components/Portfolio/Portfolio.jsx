import React from 'react'
import './Portfolio.css'
import Portfolio1 from '../../assets/portfolio1.png'
import Portfolio2 from '../../assets/portfolio2.png'
import Portfolio3 from '../../assets/portfolio3.png'


const Portfolio = () => {

  
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        <article className='portfolio_item'>
            <div className="portfolio_item-image">
              <img src={Portfolio1} alt="first-project"className='portfolio_item-img'/>
            </div>
              <h3>This is a portfolio item Title</h3>
              <div className="portfolio_item-cte">
                <a href="https://github.com" className='btn btn-primary'>Project 1</a>
                <a href="https://github.com" className='btn btn-primary'>Live Demo</a>
              </div>
        </article>
        <article className='portfolio_item'>
            <div className="portfolio_item-image">
              <img src={Portfolio1} alt="first-project" className='portfolio_item-img'/>
            </div>
              <h3>This is a portfolio item Title</h3>
              <div className="portfolio_item-cte">
                <a href="https://github.com" className='btn btn-primary'>Project 1</a>
                <a href="https://github.com" className='btn btn-primary'>Live Demo</a>
              </div>
        </article>
        <article className='portfolio_item'>
            <div className="portfolio_item-image">
              <img src={Portfolio1} alt="first-project" className='portfolio_item-img'/>
            </div>
              <h3>This is a portfolio item Title</h3>
              <div className="portfolio_item-cte">
                <a href="https://github.com" className='btn btn-primary'>Project 1</a>
                <a href="https://github.com" className='btn btn-primary'>Live Demo</a>
              </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio