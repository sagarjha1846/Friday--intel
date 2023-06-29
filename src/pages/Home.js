import React, { useState } from 'react';
// import { Helmet } from 'react-helmet';
import { Route, Routes, useNavigate } from 'react-router-dom';
import constants from '../constant/routesConstant';
import '../css/home.css';
import { Form } from 'antd';
import ModalView from '../components/Modal';
import { Helmet } from 'react-helmet';
import LoadCase from './LoadCase';
import { PrivateRoute } from '../store/PrivateRoute';
import ReadCase from './ReadCase';
import { ReactComponent as Arrow } from '../images/svg/arrow.svg';

const Home = ({ caseName, setCaseName }) => {
  const [activeArticle, setActiveArticle] = useState('');
  const [form] = Form.useForm();
  const [openModal, setOpenModal] = useState(false);
  const { ROUTES } = constants;
  const navigate = useNavigate();

  const handleLoadNewCase = () => {
    setOpenModal(true);
  };
  
  const handleArticleClick = (articleId) => {
    setActiveArticle(articleId);
  };

  return (
    <div className='home-main'>
      <Helmet>
        <title>FridayIntel-Home</title>
      </Helmet>

      <ModalView
        setOpenModal={setOpenModal}
        openModal={openModal}
        form={form}
        caseName={caseName}
        setCaseName={setCaseName}
      />
      <div className="flex">
        <section className="cases">
          <article className={`case_cards ${activeArticle === 'newCase' ? 'actives' : ''}`} onClick={handleLoadNewCase}>
            {/* <img src={img} alt='img' className='hover-img'/> */}
            <h2 className="case_title_home">New Case</h2>
            <Arrow />
          </article>
          <article
            className={`case_cards ${activeArticle === 'loadCase' ? 'actives' : ''}`}
            onClick={() => {
              handleArticleClick('loadCase');
              navigate(ROUTES.loadCase);
            }}
          >
            <h2 className="case_title_home">Load Case</h2>
            <Arrow />
          </article>
          <article
           className={`case_cards ${activeArticle === 'readCase' ? 'actives' : ''}`}
           onClick={() => {
             handleArticleClick('readCase');
             navigate(ROUTES.readCase);
           }}
          >
            <h2 className="case_title_home">Read Case</h2>
            <Arrow />
          </article>
        </section>
        <>
          <Routes>
            <Route element={<PrivateRoute />}>
              <Route path={ROUTES.loadCase} element={<LoadCase />}></Route>
            </Route>
            <Route element={<PrivateRoute />}>
              <Route path={ROUTES.readCase} element={<ReadCase />}></Route>
            </Route>
          </Routes>
        </>
      </div>
    </div>
  );
};

export default Home;
