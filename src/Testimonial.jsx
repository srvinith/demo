import React from 'react'
import img1 from './assets/images/testi-img.jpeg'

const Testimonial = () => {
  return (
    <div className="carousel-container">

      <div className="container">
        <center>
          <h2 className='slider-title' data-aos='fade-up' data-aos-delay='400'>WHY INVEST IN AN EV CHARGER?</h2>
          <p className="px-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda et laborum vitae dolorum minima officiis eum vero, aspernatur, iure eligendi quisquam esse ducimus similique, fuga neque quod aperiam amet tempore.</p>

        </center>
        <div className="testi-con">
          <img src={img1} alt="img1" />
          <div className="second-con">
            <h3>Sampath Kumar</h3>
            <p>Good initiate and I'm really impressed with their work</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
