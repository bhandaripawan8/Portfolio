import React from 'react'
import './Portfolio.css'
import Portfolio1 from '../../assets/portfolio1.png'
import Portfolio2 from '../../assets/portfolio2.png'
import Portfolio3 from '../../assets/portfolio3.png'


const Portfolio = () => {

  const portfolio = [
    {
      id: 1,
      Title: "NCC-Airline",
      image: Portfolio1,
      github: 'https://github.com/bhandaripawan8/NCC-Airlines/tree/main/OneDrive%20-%20University%20of%20Gloucestershire/Desktop/react%20ss%20notes/ncc%20airlines',
      demo: 'https://github.com'
    },
    {
      id: 2,
      Title: "Forest",
      image: Portfolio3,
      github: 'https://github.com/bhandaripawan8/forestassignment',
      demo: 'https://github.com'
    },
    {
      id: 3,
      Title: "Tindog",
      image: Portfolio2,
      github: 'https://github.com/bhandaripawan8/tindog',
      demo: 'https://github.com'
    }
  ]

  
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
          {
            portfolio.map(({id, image, Title, github, demo})=>{
              return(
                <article key = {id} className='portfolio_item'>
                <h3>{Title}</h3>
                <div className="portfolio_item-image">
                  <img src={image} alt="first-project"className='portfolio_item-img'/>
                </div>
                  <div className="portfolio_item-cte">
                    <a href={github} className='btn btn-primary'>Github</a>
                    <a href={demo} className='btn btn-primary'>Demo</a>
                  </div>
                </article>
              )
            })
          }
      </div>
    </section>
  )
}

export default Portfolio