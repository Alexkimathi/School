import React from "react";
import "./about.css";
import pic2 from "../../img/Uni.jpg";
import pic3 from "../../img/un.jpg";
import pic4 from "../../img/shool.jpg";

function About() {
  return (
    <section className="section-about">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">About-Us</h2>
      </div>

      <div className="row">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary u-margin-bottom-small">VISION</h3>
          <p className="paragraph">
            To be a world class polytechnic for sustainable development.
            Excel in Skills and Technology And to be a center f excellence in Technical and vocational Education And
            Training(TVET)
          </p>

          <h3 className="heading-tertiary u-margin-bottom-small">MISSION</h3>
          <p className="paragraph">
            To provide trainees with globally competitive education and
            training, research skills; and provision of consultancy services for
            sustainable development.
          </p>
          <a href="/" className="btn-text">
            Learn more &rarr;
          </a>
        </div>
        <div className="col-1-of-2">
          <div className="composition">
            <img
              src={pic2}
              alt="p-1"
              className="composition__photo composition__photo--p1"
            />
            <img
              src={pic3}
              alt="p-2"
              className="composition__photo composition__photo--p2"
            />
            <img
              src={pic4}
              alt="p-3"
              className="composition__photo composition__photo--p3"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
