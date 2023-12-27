
import React from 'react'
import './Services.css'
import { TiTick } from "react-icons/ti";

const Services = () => {
  return (
    <section id='Services'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container service_container">
        {/* start of ui/ux design */}
          <article className='service'>
            <div className="service_head">
                 <h3>UI/UX Design</h3>
            </div>

            <ul className='service_list'>
              <li>
              <TiTick className='service_list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing. </p>
              </li>
              <li>
              <TiTick className='service_list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing. </p>
              </li>
              <li>
              <TiTick className='service_list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing. </p>
              </li>
              <li>
              <TiTick className='service_list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing. </p>
              </li>
              <li>
              <TiTick className='service_list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing. </p>
              </li>
            </ul>
          </article>
          {/* start of web development */}
          <article className='service'>
            <div className="service_head">
                 <h3>Web Development</h3>
            </div>

            <ul className='service_list'>
              <li>
              <TiTick className='service_list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing. </p>
              </li>
              <li>
              <TiTick className='service_list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing. </p>
              </li>
              <li>
              <TiTick className='service_list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing. </p>
              </li>
              <li>
              <TiTick className='service_list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing. </p>
              </li>
              <li>
              <TiTick className='service_list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing. </p>
              </li>
            </ul>
          </article>
          {/* start of power platform */}
          <article className='service'>
            <div className="service_head">
                 <h3>Power Platform Development</h3>
            </div>

            <ul className='service_list'>
              <li>
              <TiTick className='service_list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing. </p>
              </li>
              <li>
              <TiTick className='service_list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing. </p>
              </li>
              <li>
              <TiTick className='service_list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing. </p>
              </li>
              <li>
              <TiTick className='service_list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing. </p>
              </li>
              <li>
              <TiTick className='service_list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing. </p>
              </li>
            </ul>
          </article>
      </div>
    </section>
  )
}

export default Services