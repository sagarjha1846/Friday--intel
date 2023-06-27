import React from 'react';
import { Helmet } from 'react-helmet';
import '../css/navbar.css';
import '../css/loadcase.css';
import '../css/readcase.css';
import play from '../images/play.jpg';
import caseimg_1 from '../images/ReadcaseImg-1.jpeg';
import caseimg_2 from '../images/ReadcaseImg-2.jpeg';

export const Card = (props) => {
  return (
    <div className="card">
      <div className="card-img-holder">
        <img src={props.src} alt={props.alt} />
      </div>
      <div className="caption">
        <img className="play-img" src={play} alt="play" />

        <div className="blog-time ">John Doe . 4 Feb 2022</div>
        <h3 className="blog-title">Nea feature avaialbe on Zalter</h3>

        <span className="description">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </span>
        <div className="options">
          <button className="btn">Security</button>
          <button className="btn-2">Back-End</button>
        </div>
      </div>
    </div>
  );
};

const ReadCase = () => {
  return (
    <>
      <Helmet>
        <title>FridayIntel-ReadCase</title>
      </Helmet>

      <section className="readcase-container">
        <main className="cards-section">
          <section className="readcase-cards">
            <Card src={caseimg_1} alt="Image 1" />
            <Card src={caseimg_2} alt="Image 2" />
            <Card src={caseimg_1} alt="Image 1" />
            <Card src={caseimg_2} alt="Image 2" />
          </section>
        </main>
      </section>
    </>
  );
};

export default ReadCase;
