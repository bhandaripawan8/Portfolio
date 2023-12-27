import React from 'react'
import './Testimonials.css'
import testimonials1 from '../../assets/testimonials1.png'
import testimonials2 from '../../assets/testimonials1.png'
import testimonials3 from '../../assets/testimonials1.png'
import testimonials4 from '../../assets/testimonials1.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination'; 
import 'swiper/css/navigation'; // Import Swiper navigation styles
import 'swiper/css'; // Import Swiper styles
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

const Testimonials = () => {

  const data = [
    {
      id: 1,
      avatar: testimonials1,
      name: 'Jeremy',
      review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum dolor eveniet necessitatibus, quisquam dolores repellat esse? A eum aut error, maiores eveniet quis, voluptates harum consectetur aperiam quod, ad ex ipsa. Rerum sint tempore voluptatum eaque non dolores debitis accusantium corrupti possimus facilis? Ullam nisi libero molestiae doloremque a! Minima.'
    },
    {
      id: 2,
      avatar: testimonials2,
      name: 'Andy Kok',
      review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum dolor eveniet necessitatibus, quisquam dolores repellat esse? A eum aut error, maiores eveniet quis, voluptates harum consectetur aperiam quod, ad ex ipsa. Rerum sint tempore voluptatum eaque non dolores debitis accusantium corrupti possimus facilis? Ullam nisi libero molestiae doloremque a! Minima.'
    },
    {
      id: 3,
      avatar: testimonials3,
      name: 'Sri',
      review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum dolor eveniet necessitatibus, quisquam dolores repellat esse? A eum aut error, maiores eveniet quis, voluptates harum consectetur aperiam quod, ad ex ipsa. Rerum sint tempore voluptatum eaque non dolores debitis accusantium corrupti possimus facilis? Ullam nisi libero molestiae doloremque a! Minima.'
    },
    {
      id: 4,
      avatar: testimonials4,
      name: 'Rajendra',
      review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum dolor eveniet necessitatibus, quisquam dolores repellat esse? A eum aut error, maiores eveniet quis, voluptates harum consectetur aperiam quod, ad ex ipsa. Rerum sint tempore voluptatum eaque non dolores debitis accusantium corrupti possimus facilis? Ullam nisi libero molestiae doloremque a! Minima.'
    },
  ]


  return (
    <section id='testimonials'>
        <h5>Review from clients</h5>
        <h2>Testimonials</h2>

        <div className="container testimonials_container">

          <Swiper 
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                direction="horizontal" // Set the direction to horizontal
                spaceBetween={40} // Adjust the space between slides
                slidesPerView={1} // Adjust the number of slides visible at once
                pagination={{ clickable: true }}
                // Navigation
                // className="swiper-wrapper"
                 scrollbar={{draggable:true}}
              >
              {
              data.map(({avatar,name,review, id})=>{
                return(
                <SwiperSlide key={id} className='testimonials'>
                  <div className="client_avatar">
                    <img src={avatar} alt="firstTestimonials" />
                  </div>
                  <h5 className='client_name'>{name}</h5>
                    <small className='client_review'>{review}</small>
                </SwiperSlide>
                )
              })
            }
            </Swiper>
        </div>
    </section>
  )
}

export default Testimonials