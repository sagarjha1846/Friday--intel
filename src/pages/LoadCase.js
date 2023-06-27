import React from 'react';
import { Helmet } from 'react-helmet';
import '../css/navbar.css';
import { StyledEngineProvider } from '@mui/material/styles';
import Table from '../components/Table';
import '../css/loadcase.css';

const LoadCase = () => {
  return (
    <>
      <Helmet>
        <title>FridayIntel-LoadCase</title>
      </Helmet>

      <section className="loadcase-conatiner">
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
