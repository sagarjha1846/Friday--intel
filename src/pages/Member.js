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
import { Table } from 'antd';
import { BiLink } from "react-icons/bi";
import { Link, Navigate } from 'react-router-dom';

function navigateToDashboard() {
  Navigate('/');
}

const Member = ({ profileDetail }) => {
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

  const columns = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Invoice No',
      dataIndex: 'invoice_no',
      key: 'invoice_no',
    },
    {
      title: '₹ Total',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'Payment Method',
      dataIndex: 'method',
      key: 'method',
    },
  ];
  

  if (!profileDetail) {
    // Render dummy data or loading state if profileDetail is not available
    return <div></div>; // or render a dummy member data
  }
  return (
    <>
    <Helmet>
      <title>FridayIntel-Member</title>
    </Helmet>

    <main className="p-2 w-full flex justify-center align-middle content-center items-center self-center">
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
              <h3>{profileDetail[0]?.fullname || 'Dummy Fullname'}</h3>
              <h4>{profileDetail[0]?.agency_name || 'Dummy Agency'}</h4>
            </article>

            <article className="member_contact">
              <h4>
                <MdAlternateEmail /> {profileDetail[0]?.email || 'dummy@example.com'}
              </h4>
              <h4>
                <BsTelephone /> {profileDetail[0]?.phone_no || 'Dummy Phone Number'}
              </h4>
            </article>
          </section>
        </div>
        <section className="transaction-details p-10">
          <article className="subscription_details">
            <h3>TRANSACTION HISTORY</h3>
            {/* <div>
              <h6>Annually </h6>
              <p>(27 days remaining)</p>
            </div> */}
            <button>Renew Activation</button>
            {/* <a href="#cancel subscription">Cancel Subscription</a> */}
          </article>
          <article className="pt-5 w-full">
            <Table
              style={{ width: '100%' }}
              dataSource={profileDetail[1]}
              columns={columns}
              pagination={false}
              className='ant-table-content'
              
            />
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
              <p>{profileDetail[0]?.quries || '0'}</p>
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
          <ul><BiLink color="#00F0FF"/><a
                href="https://fridayintel.com"
                target="_blank"
                rel="noreferrer"
              >
                {' '}
                Website
              </a></ul>
          <ul> <BiLink color="#00F0FF"/><a
                href="https://fridayintel.com/contact"
                target="_blank"
                rel="noreferrer"
              >
                {' '}
                Helpdesk
              </a></ul>
              <Link to="/">
           <ul onClick={navigateToDashboard}><BiLink color="#00F0FF"/> Dashboard</ul>
           </Link>
          </div>
        </section>
      </div>
    </main>

    <footer className="footer-member ">&copy; 2023-24 Friday Intel LLP</footer>
  </>
  );
};

export default Member;
