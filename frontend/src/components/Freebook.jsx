import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
import list from '../../public/list.json'
import Cards from './Cards';

const Freebook = () => {
    const freebooks = list.filter((data)=>data.category === "free");
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
 
  return (
    <>
    <div>
        <h1 className='font-bold pb-2 text-xl'>free offered courses</h1>
        <p>checkout free books available in the store! <br/>you can buy any free book listed here no charges just relax and enjoy !!</p>
      
    </div>
    <div>
    <Slider {...settings}>
       {freebooks.map((item)=>(
        <Cards item={item} key={item}/>
       ))}
      </Slider>
    </div>
    </>
    
  )
}

export default Freebook
