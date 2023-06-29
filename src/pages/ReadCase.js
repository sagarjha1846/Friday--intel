import React from 'react';
import { Helmet } from 'react-helmet';
import '../css/navbar.css';
import '../css/loadcase.css';
import '../css/readcase.css';
import play from '../images/play.jpg';
import caseimg_1 from '../images/ReadcaseImg-1.jpeg';
import caseimg_2 from '../images/ReadcaseImg-2.jpeg';

const caseStudies = [
  {
    author: 'John Doe',
    publishDate: '4 Feb 2022',
    title: 'Nea feature avaialbe on Zalter',
    desc: ' It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    tags: ['Security', 'Back-End'],
    src: caseimg_1,
  },
  {
    author: 'John Doe',
    publishDate: '4 Feb 2022',
    title: 'Nea feature avaialbe on Zalter',
    desc: ' It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    tags: ['Security', 'Back-End'],
    src: caseimg_2,
  },
  {
    author: 'John Doe',
    publishDate: '4 Feb 2022',
    title: 'Nea feature avaialbe on Zalter',
    desc: ' It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    tags: ['Security', 'Back-End'],
    src: caseimg_1,
  },
  {
    author: 'John Doe',
    publishDate: '4 Feb 2022',
    title: 'Nea feature avaialbe on Zalter',
    desc: ' It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    tags: ['Security', 'Back-End'],
    src: caseimg_1,
  },
  {
    author: 'John Doe',
    publishDate: '4 Feb 2022',
    title: 'Nea feature avaialbe on Zalter',
    desc: 'voluptates id labore sit magnam inventore minus sapiente doloribus maiores perferendis quae quo quasi.',
    tags: ['Security', 'Back-End'],
    src: caseimg_2,
  },
  {
    author: 'John Doe',
    publishDate: '4 Feb 2022',
    title: 'Lorem ipsum dolor',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat expedita asperiores officiis laborum dolorem non animi, ',
    tags: ['Security', 'Back-End'],
    src: caseimg_1,
  },
];

export const Card = ({ caseStudies }) => {
  return (
    <>
      {caseStudies.map((el) => (
        <div className="card">
          <div className="card-img-holder">
            <img src={el.src} alt={el.src} />
          </div>
          <div className="caption">
            <img className="play-img" src={play} alt="play" />

            <div className="blog-time ">
              {el.author} . {el.publishDate}
            </div>
            <h3 className="blog-title">{el.title}</h3>

            <span className="description">{el.desc}</span>
            <div className="options">
              {el.tags.map((items) => (
                <button className="btn">{items}</button>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

const ReadCase = ({ search }) => {
  return (
    <>
      <Helmet>
        <title>FridayIntel-ReadCase</title>
      </Helmet>

      <section className="readcase-container">
        <main className="cards-section">
          <section className="readcase-cards">
            <Card
              caseStudies={caseStudies.filter((el) =>
                el.title
                  .toLocaleLowerCase()
                  .includes(search.toLocaleLowerCase()),
              )}
            />
          </section>
        </main>
      </section>
    </>
  );
};

export default ReadCase;
