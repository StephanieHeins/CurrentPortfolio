import React from 'react';
import Headshot1 from '../../images/Headshot1.jpg';

export default function About() {
  return (
    <div>

    <div className="container my-3">
      <div className="row">
        <div className="col-md">
          <img 
            className="img-responsive rounded center-block d-block mx-auto"
            style={{width: 350}}
            src={Headshot1}
            alt="Headshot"
            />
        </div>
        <div className="col-md">
          <div className="card">
            <div className="card-title py-4 px-4 h4 bg-dark text-info">
              Stephanie Heins
            </div>
            <div className="card-body px-4">
              After working support in IT for years and studying cybersecurity and digital forensics,
              I've expanded into the realm of development. Since completing University of Washington's 
              full-stack web development bootcamp program, I'm hoping to further my career and 
              education in the field.
            </div>
            <div className="card-body px-4">
              In web development, I'm able to combine my passion for art/design, and experience with
              technology. Eventually, I'd like to learn more about AI, VR/AR, and game development. 
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
  );
}
