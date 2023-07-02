import React, { useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import constants from '../constant/routesConstant';
import '../css/home.css';
import { Form } from 'antd';
import ModalView from '../components/Modal';
import { Helmet } from 'react-helmet';
import LoadCase from './LoadCase';
import { PrivateRoute } from '../store/PrivateRoute';
import ReadCase from './ReadCase';
import { ReactComponent as Arrow } from '../images/svg/arrow.svg';
import Page404 from './Page404';

const Home = ({ caseName, setCaseName, search }) => {
  const location = useLocation();
  const [activeArticle, setActiveArticle] = useState(location.pathname);
  const [form] = Form.useForm();
  const [openModal, setOpenModal] = useState(false);
  const { ROUTES } = constants;
  const navigate = useNavigate();

  const handleLoadNewCase = () => {
    setActiveArticle(ROUTES.newCase);
    setOpenModal(true);
  };

  const menu = [
    {
      title: 'New Case',
      key: 'newCase',
      action: handleLoadNewCase,
    },
    {
      title: 'Load Case',
      key: 'loadCase',
      action: () => {
        navigate(ROUTES.loadCase);
        setActiveArticle(ROUTES.loadCase);
      },
    },
    {
      title: 'Read Case',
      key: 'readCase',
      action: () => {
        navigate(ROUTES.readCase);
        setActiveArticle(ROUTES.readCase);
      },
    },
  ];

  return (
    <>
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
      <div className="flex w-full ">
        <section className="cases">
          {menu.map((el) => (
            <article
              key={el.key}
              className={`case_cards  ${
                activeArticle === ROUTES[el.key] ? 'actives' : ' '
              }`}
              onClick={el.action}
            >
              <h2 className={`case_title_home`}>{el.title}</h2>
              <Arrow />
            </article>
          ))}
        </section>

        <Routes>
          <Route element={<PrivateRoute />}>
            <Route
              path={ROUTES.home}
              element={
                <section className="p-10 w-full flex flex-col">
                  {search ? (
                    <>
                      <div className=" !w-[100%] overflow-x-hidden">
                        <h1 className=" text-4xl">Load case</h1>
                        <div className=" w-full overflow-hidden">
                          <LoadCase search={search} />
                        </div>
                      </div>

                      <div>
                        <h1 className=" text-4xl">Read case</h1>
                        <ReadCase search={search} />
                      </div>
                    </>
                  ) : null}
                </section>
              }
            ></Route>

            <Route
              path={ROUTES.loadCase}
              element={<LoadCase search={search} />}
            ></Route>
          </Route>
          <Route element={<PrivateRoute />}>
            <Route
              path={ROUTES.readCase}
              element={<ReadCase search={search} />}
            ></Route>
          </Route>
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </>
  );
};

export default Home;
