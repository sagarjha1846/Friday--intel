import React from 'react';
import { Helmet } from 'react-helmet';
import '../css/navbar.css';
import Table from '../components/Table';
import '../css/loadcase.css';

const LoadCase = () => {
  return (
    <div className=" w-full overflow-hidden">
      <Helmet>
        <title>FridayIntel-LoadCase</title>
      </Helmet>
      <div className=" w-full p-10">
        <Table />
      </div>
    </div>
  );
};

export default LoadCase;
