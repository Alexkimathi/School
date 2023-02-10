import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../Carousel/CarouselData";
import pic from "../../img/Principal.jpg";

import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import About from "../About/About";

function Carousel() {
  const [currImg, setCurrImg] = useState(0);
  return (
    <>
      <div className="carousel">
        <div className="inner"
          style={{ backgroundImage: `url(${images[currImg].img})` }}
        >
          <div
            className="left"
            onClick={() => {
              currImg > 0 && setCurrImg(currImg - 1);
            }}
          >
            <MdOutlineArrowBackIosNew />
          </div>
          <div className="center"></div>
          <div
            className="right"
            onClick={() => {
              currImg < images.length - 1 && setCurrImg(currImg + 1);
            }}
          >
            <MdOutlineArrowForwardIos />
          </div>
        </div>
      </div>
      <div>
        <About />
      </div>
      

      <div className="sect-2">
        <div className="msg">
          <h5>Message from the principal</h5>
          <h1>Welcome to Githongo polytechnic</h1>
        </div>

        <div className="Principal-msg">
          <img src={pic} alt="principal" />
          <p>
            {" "}
            Hello and welcome to Githongo Polytechnic. As an institution, we are
            determined to be an International Center of Excellence in Technical
            and Vocational Educational and Training (TVET) by providing TVET for
            producing dependable and skilled Human Resource for Commerce and
            Industry. We aim at offering manpower that is equipped with all
            necessary types of skill, competency and techniques required by the
            industry. This way the Polytechnic contributes immensely in the
            process of realization of vision 2030 as a social pillar that the
            nation requires in its development agenda.

            <h2>Dr Joy k. Mwenda</h2>
          </p>
         
        </div>
        
      </div>
    </>
  );
}

export default Carousel;
