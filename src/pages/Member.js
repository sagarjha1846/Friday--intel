/* eslint-disable no-unused-vars */
import React from 'react';
import { Helmet } from 'react-helmet';
import '../css/member.css';
import { BsTelephone } from 'react-icons/bs';
import { MdAlternateEmail } from 'react-icons/md';
import Box from '@mui/joy/Box';
import CircularProgress from '@mui/joy/CircularProgress';
import { useState } from 'react';
import { useEffect } from 'react';
import { ReactComponent as User } from '../images/svg/usercheck.svg';

function Table({ data }) {
  return (
    <table className="GeneratedTable">
      <thead>
        <tr>
          <th>Date</th>
          <th>Invoice No.</th>
          <th>₹ Total</th>
          <th>Payment Method</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.column1}</td>
            <td>{row.column2}</td>
            <td>{row.column3}</td>
            <td>{row.column4}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const Member = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10,
      );
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const data = [
    {
      column1: '20-11-2022',
      column2: 'CID001',
      column3: '20,00,000',
      column4: 'Cheque - 666666...',
    },
    {
      column1: '20-12-2022',
      column2: 'CID002',
      column3: '20,00,000',
      column4: 'Cheque - 666666...',
    },
    {
      column1: '20-01-2023',
      column2: 'CID003',
      column3: '20,00,000',
      column4: 'Cheque - 666666...',
    },
    {
      column1: '20-02-2023',
      column2: 'CID004',
      column3: '20,00,000',
      column4: 'Cheque - 666666...',
    },
    // More rows...
  ];
  return (
    <>
      <Helmet>
        <title>FridayIntel-Member</title>
      </Helmet>

      <main className="member-main-container">
        <div>
          <div className="member_deatils_container">
            <section className="account-container">
              <h1 className="account-heading">Your Account</h1>
              <p className="account-description">
                Manage your account & subscription
              </p>
            </section>
            <section className="member_details">
              <article>
                <User />
              </article>

              <article className="agency_description">
                <h3>Unit Charlie</h3>
                <h4>Kangaroo Agency</h4>
              </article>

              <article className="member_contact">
                <h4>
                  <MdAlternateEmail /> john.doe@fridayintel.io
                </h4>
                <h4>
                  <BsTelephone /> +91 99999 99999
                </h4>
              </article>
            </section>
          </div>
          <section className="transaction-details">
            <article className="subscription_details">
              <h3>TRANSACTION HISTORY</h3>
              {/* <div>
              <h6>Annually </h6>
              <p>(27 days remaining)</p>
            </div> */}
              <button>Renew Activation</button>
              {/* <a href="#cancel subscription">Cancel Subscription</a> */}
            </article>
            <article>
              {/* <table className="GeneratedTable">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Invoice No.</th>
                  <th>₹ Total</th>
                  <th>Payment Method</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>20-11-2022</td>
                  <td>CID001</td>
                  <td>20,00,000</td>
                  <td>Cheque - 666666</td>
                </tr>
                <tr>
                  <td>20-12-2022</td>
                  <td>CID002</td>
                  <td>20,00,000</td>
                  <td>Cheque - 666666</td>
                </tr>
                <tr>
                  <td>20-01-2023</td>
                  <td>CID003</td>
                  <td>20,00,000</td>
                  <td>Cheque - 666666</td>
                </tr>
                <tr>
                  <td>20-02-2023</td>
                  <td>CID004</td>
                  <td>20,00,000</td>
                  <td>Cheque - 666666</td>
                </tr>
              </tbody>
            </table> */}
              <Table data={data} />
            </article>
          </section>
        </div>
        <div className="right-query-links ">
          <section className="query-limit relative">
            <h2>QUERY LIMIT</h2>
            <div>
              <h3>Package : </h3>
              <span>GOLD</span>
            </div>

            <span className="query-limit-number absolute right-[100] top-[500px]">
              <p>
                Available
                <p>100000</p>
                from <span>1000000</span>
              </p>
            </span>
            <Box
              sx={{
                display: 'flex',
                gap: 2,
                alignItems: 'center',
                flexWrap: 'wrap',
              }}
            >
              {/* <CircularProgress determinate value={25} /> */}
              {/* <CircularProgress determinate value={50} /> */}
              <CircularProgress
                color="primary"
                sx={{
                  '--CircularProgress-size': '250px',
                  '--CircularProgress-trackThickness': '10px',
                  '--CircularProgress-progressThickness': '15px',
                }}
                determinate
                value={75}
              />
              {/* <CircularProgress determinate value={100} /> */}
              {/* <CircularProgress determinate value={progress} /> */}
            </Box>
          </section>
          <section className="quick-links">
            <h2>QUICK LINKS</h2>
            <div className="links-profile">
              <ul>Website</ul>
              <ul>Helpdesk</ul>
              <ul>Dashboard</ul>
            </div>
          </section>
        </div>
      </main>
      <footer className="footer-member ">
        &copy; 2023-24 Friday Intel LLP
      </footer>
    </>
  );
};

export default Member;
