import React from 'react';
import { Helmet } from 'react-helmet';
import '../css/navbar.css';
import Table from '../components/Table';
import '../css/loadcase.css';

const LoadCase = ({ search }) => {
  return (
    <>
      <Helmet>
        <title>FridayIntel-LoadCase</title>
      </Helmet>

      <section className="readcase-container p-10 ">
        <Table search={search} />
      </section>
    </>
  );
};

export default LoadCase;
