/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import '../css/navbar.css';
import Navbar from '../components/Navbar';
import { StyledEngineProvider } from '@mui/material/styles';
import Table from '../components/Table';
import { useNavigate } from 'react-router-dom';
import '../css/loadcase.css';
import constants from '../constant/routesConstant';
import axios from 'axios';

const LoadCase = () => {
  const { ROUTES, backendURL } = constants;
  useEffect(() => {
    axios
      .get(`${backendURL}/caselist.php`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <section className="loadcase-conatiner">
        <section className="cases">
          <article
            className="case_cards_loadcase newcase-loadcase"
            onClick={() => navigate(ROUTES.newCase)}
          >
            {/* <img src={img} alt='img' className='hover-img'/> */}
            <h2 className="case_title_home">New Case</h2>
            <div className="case_arrow">
              <svg
                className="case_arrow"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20 0.5C20 0.5 23.9663 0.5 27.5907 2.03302C27.5907 2.03302 31.0904 3.51327 33.7886 6.21142C33.7886 6.21142 36.4867 8.90957 37.967 12.4093C37.967 12.4093 39.5 16.0337 39.5 20C39.5 20 39.5 23.9663 37.967 27.5907C37.967 27.5907 36.4867 31.0904 33.7886 33.7886C33.7886 33.7886 31.0904 36.4867 27.5907 37.967C27.5907 37.967 23.9663 39.5 20 39.5C20 39.5 16.0337 39.5 12.4093 37.967C12.4093 37.967 8.90957 36.4867 6.21142 33.7886C6.21142 33.7886 3.51326 31.0904 2.03302 27.5907C2.03302 27.5907 0.5 23.9663 0.5 20C0.5 20 0.5 16.0337 2.03302 12.4093C2.03302 12.4093 3.51327 8.90957 6.21142 6.21142C6.21142 6.21142 8.90957 3.51327 12.4093 2.03302C12.4093 2.03302 16.0337 0.5 20 0.5ZM20 3.5C20 3.5 16.6421 3.5 13.5779 4.79603C13.5779 4.79603 10.6171 6.04834 8.33274 8.33274C8.33274 8.33274 6.04834 10.6171 4.79604 13.5779C4.79604 13.5779 3.5 16.6421 3.5 20C3.5 20 3.5 23.3579 4.79604 26.4221C4.79604 26.4221 6.04834 29.3829 8.33274 31.6673C8.33274 31.6673 10.6171 33.9517 13.5779 35.204C13.5779 35.204 16.6421 36.5 20 36.5C20 36.5 23.3579 36.5 26.4221 35.204C26.4221 35.204 29.3829 33.9517 31.6673 31.6673C31.6673 31.6673 33.9517 29.3829 35.204 26.4221C35.204 26.4221 36.5 23.3579 36.5 20C36.5 20 36.5 16.6421 35.204 13.5779C35.204 13.5779 33.9517 10.6171 31.6673 8.33274C31.6673 8.33274 29.3829 6.04834 26.4221 4.79604C26.4221 4.79604 23.3579 3.5 20 3.5Z"
                  fill="#1C1C1C"
                />
                <path
                  d="M22.2043 12.583C21.923 12.3017 21.5415 12.1437 21.1437 12.1437C20.7459 12.1437 20.3643 12.3017 20.083 12.583C19.8017 12.8643 19.6437 13.2459 19.6437 13.6437C19.6437 14.0415 19.8017 14.423 20.083 14.7043L25.3786 19.9999L20.0836 25.295C19.8023 25.5763 19.6437 25.9584 19.6437 26.3562C19.6437 26.754 19.8017 27.1355 20.083 27.4168C20.3643 27.6981 20.7459 27.8562 21.1437 27.8562C21.5415 27.8562 21.923 27.6981 22.2043 27.4168L28.5606 21.0606C29.1464 20.4748 29.1464 19.5251 28.5606 18.9393L22.2043 12.583ZM12.5 21.5H27.5C28.3284 21.5 29 20.8284 29 20C29 19.1716 28.3284 18.5 27.5 18.5H12.5C11.6716 18.5 11 19.1716 11 20C11 20.8284 11.6716 21.5 12.5 21.5Z"
                  fill="#1C1C1C"
                />
              </svg>
            </div>
          </article>
          <article
            className="case_cards_loadcase"
            onClick={() => navigate(ROUTES.loadCase)}
          >
            <h2 className="case_title_home">Load Case</h2>
            <div className="case_arrow">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20 0.5C20 0.5 23.9663 0.5 27.5907 2.03302C27.5907 2.03302 31.0904 3.51327 33.7886 6.21142C33.7886 6.21142 36.4867 8.90957 37.967 12.4093C37.967 12.4093 39.5 16.0337 39.5 20C39.5 20 39.5 23.9663 37.967 27.5907C37.967 27.5907 36.4867 31.0904 33.7886 33.7886C33.7886 33.7886 31.0904 36.4867 27.5907 37.967C27.5907 37.967 23.9663 39.5 20 39.5C20 39.5 16.0337 39.5 12.4093 37.967C12.4093 37.967 8.90957 36.4867 6.21142 33.7886C6.21142 33.7886 3.51326 31.0904 2.03302 27.5907C2.03302 27.5907 0.5 23.9663 0.5 20C0.5 20 0.5 16.0337 2.03302 12.4093C2.03302 12.4093 3.51327 8.90957 6.21142 6.21142C6.21142 6.21142 8.90957 3.51327 12.4093 2.03302C12.4093 2.03302 16.0337 0.5 20 0.5ZM20 3.5C20 3.5 16.6421 3.5 13.5779 4.79603C13.5779 4.79603 10.6171 6.04834 8.33274 8.33274C8.33274 8.33274 6.04834 10.6171 4.79604 13.5779C4.79604 13.5779 3.5 16.6421 3.5 20C3.5 20 3.5 23.3579 4.79604 26.4221C4.79604 26.4221 6.04834 29.3829 8.33274 31.6673C8.33274 31.6673 10.6171 33.9517 13.5779 35.204C13.5779 35.204 16.6421 36.5 20 36.5C20 36.5 23.3579 36.5 26.4221 35.204C26.4221 35.204 29.3829 33.9517 31.6673 31.6673C31.6673 31.6673 33.9517 29.3829 35.204 26.4221C35.204 26.4221 36.5 23.3579 36.5 20C36.5 20 36.5 16.6421 35.204 13.5779C35.204 13.5779 33.9517 10.6171 31.6673 8.33274C31.6673 8.33274 29.3829 6.04834 26.4221 4.79604C26.4221 4.79604 23.3579 3.5 20 3.5Z"
                  fill="#1C1C1C"
                />
                <path
                  d="M22.2043 12.583C21.923 12.3017 21.5415 12.1437 21.1437 12.1437C20.7459 12.1437 20.3643 12.3017 20.083 12.583C19.8017 12.8643 19.6437 13.2459 19.6437 13.6437C19.6437 14.0415 19.8017 14.423 20.083 14.7043L25.3786 19.9999L20.0836 25.295C19.8023 25.5763 19.6437 25.9584 19.6437 26.3562C19.6437 26.754 19.8017 27.1355 20.083 27.4168C20.3643 27.6981 20.7459 27.8562 21.1437 27.8562C21.5415 27.8562 21.923 27.6981 22.2043 27.4168L28.5606 21.0606C29.1464 20.4748 29.1464 19.5251 28.5606 18.9393L22.2043 12.583ZM12.5 21.5H27.5C28.3284 21.5 29 20.8284 29 20C29 19.1716 28.3284 18.5 27.5 18.5H12.5C11.6716 18.5 11 19.1716 11 20C11 20.8284 11.6716 21.5 12.5 21.5Z"
                  fill="#1C1C1C"
                />
              </svg>
            </div>
          </article>
          <article
            className="case_cards_loadcase"
            onClick={() => navigate(ROUTES.readCase)}
          >
            <h2 className="case_title_home readcase-loadcase">Read Case</h2>
            <div className="case_arrow">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20 0.5C20 0.5 23.9663 0.5 27.5907 2.03302C27.5907 2.03302 31.0904 3.51327 33.7886 6.21142C33.7886 6.21142 36.4867 8.90957 37.967 12.4093C37.967 12.4093 39.5 16.0337 39.5 20C39.5 20 39.5 23.9663 37.967 27.5907C37.967 27.5907 36.4867 31.0904 33.7886 33.7886C33.7886 33.7886 31.0904 36.4867 27.5907 37.967C27.5907 37.967 23.9663 39.5 20 39.5C20 39.5 16.0337 39.5 12.4093 37.967C12.4093 37.967 8.90957 36.4867 6.21142 33.7886C6.21142 33.7886 3.51326 31.0904 2.03302 27.5907C2.03302 27.5907 0.5 23.9663 0.5 20C0.5 20 0.5 16.0337 2.03302 12.4093C2.03302 12.4093 3.51327 8.90957 6.21142 6.21142C6.21142 6.21142 8.90957 3.51327 12.4093 2.03302C12.4093 2.03302 16.0337 0.5 20 0.5ZM20 3.5C20 3.5 16.6421 3.5 13.5779 4.79603C13.5779 4.79603 10.6171 6.04834 8.33274 8.33274C8.33274 8.33274 6.04834 10.6171 4.79604 13.5779C4.79604 13.5779 3.5 16.6421 3.5 20C3.5 20 3.5 23.3579 4.79604 26.4221C4.79604 26.4221 6.04834 29.3829 8.33274 31.6673C8.33274 31.6673 10.6171 33.9517 13.5779 35.204C13.5779 35.204 16.6421 36.5 20 36.5C20 36.5 23.3579 36.5 26.4221 35.204C26.4221 35.204 29.3829 33.9517 31.6673 31.6673C31.6673 31.6673 33.9517 29.3829 35.204 26.4221C35.204 26.4221 36.5 23.3579 36.5 20C36.5 20 36.5 16.6421 35.204 13.5779C35.204 13.5779 33.9517 10.6171 31.6673 8.33274C31.6673 8.33274 29.3829 6.04834 26.4221 4.79604C26.4221 4.79604 23.3579 3.5 20 3.5Z"
                  fill="#1C1C1C"
                />
                <path
                  d="M22.2043 12.583C21.923 12.3017 21.5415 12.1437 21.1437 12.1437C20.7459 12.1437 20.3643 12.3017 20.083 12.583C19.8017 12.8643 19.6437 13.2459 19.6437 13.6437C19.6437 14.0415 19.8017 14.423 20.083 14.7043L25.3786 19.9999L20.0836 25.295C19.8023 25.5763 19.6437 25.9584 19.6437 26.3562C19.6437 26.754 19.8017 27.1355 20.083 27.4168C20.3643 27.6981 20.7459 27.8562 21.1437 27.8562C21.5415 27.8562 21.923 27.6981 22.2043 27.4168L28.5606 21.0606C29.1464 20.4748 29.1464 19.5251 28.5606 18.9393L22.2043 12.583ZM12.5 21.5H27.5C28.3284 21.5 29 20.8284 29 20C29 19.1716 28.3284 18.5 27.5 18.5H12.5C11.6716 18.5 11 19.1716 11 20C11 20.8284 11.6716 21.5 12.5 21.5Z"
                  fill="#1C1C1C"
                />
              </svg>
            </div>
          </article>
        </section>
        <section className="loadcase-table">
          <StyledEngineProvider injectFirst>
            <Table />
          </StyledEngineProvider>
        </section>
      </section>
    </>
  );
};

export default LoadCase;
