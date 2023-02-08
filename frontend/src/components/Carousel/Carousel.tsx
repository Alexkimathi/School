
import React , {useState} from 'react';
import "./Carousel.css"
import {images}from "../Carousel/CarouselData"

import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

function Carousel() {

  const [currImg, setCurrImg] = useState(0)
  return (
    <div className='carousel'>
      <div className="inner" 
      style={{backgroundImage: `url(${images[currImg].img})`}}>
        <div className='left' onClick={()=>{
          currImg > 0 && setCurrImg(currImg - 1)
        }}>
        <MdOutlineArrowBackIosNew />
       
        </div>
        <div className='center'></div>
        <div className='right' onClick={()=>{
          currImg < images.length -1 && setCurrImg(currImg + 1)
        }}>
        <MdOutlineArrowForwardIos />
         
        </div>
       
       
       

        
         
      </div>


    </div>
  )
}

export default Carousel