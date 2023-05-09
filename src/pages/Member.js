import React from 'react';
import { Helmet } from 'react-helmet';
import { useState } from 'react';
import nightImage from '../images/night.png';
import dayImage from '../images/day.png';
import '../css/member.css';
import { BsTelephone } from 'react-icons/bs';
import { MdAlternateEmail } from 'react-icons/md';
import { RiDeleteBinLine } from 'react-icons/ri';
import PopUp from '../components/PopUp';

const Member = () => {
  const [mode, setMode] = useState(true);
  const [isshow, setIsshow] = useState(false);

  const notification = () => {
    setIsshow(!isshow);
  };

  function themeChange(event) {
    setMode(!mode);
    const htmlElement = document.querySelector('html');
    const label = document.querySelector('#theme-label');
    if (mode) {
      label.style.background = `url(${nightImage})`;
    } else {
      label.style.background = `url(${dayImage})`;
    }
    const PRIMARY =
      getComputedStyle(htmlElement).getPropertyValue('--primary-color');
    const SECONDARY =
      getComputedStyle(htmlElement).getPropertyValue('--secondary-color');
    htmlElement.style.setProperty('--primary-color', SECONDARY);
    htmlElement.style.setProperty('--primary-color-1', SECONDARY);
    htmlElement.style.setProperty('--secondary-color', PRIMARY);
    label.style.backgroundSize = 'cover';
  }

  return (
    <>
      <Helmet>
        <title>FridayIntel-Member</title>
      </Helmet>
      <nav className="navbar-member">
        <section className="member-profile">
          <h2 className="member_profile-name">Profile </h2>
          <span>/</span>
          <h4 className="member-friday_intel">Friday Intel</h4>
        </section>
        <section className="theme-notification"></section>
        <section className="theme-toggle-notification">
          <div className="switch-container-member">
            <input type="checkbox" id="switch" onClick={themeChange} />
            <label htmlFor="switch" id="theme-label">
              <i className="fas fa-sun">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.5 16C23.5 20.1421 20.1421 23.5 16 23.5C11.8579 23.5 8.5 20.1421 8.5 16C8.5 11.8579 11.8579 8.5 16 8.5C20.1421 8.5 23.5 11.8579 23.5 16Z"
                    fill="black"
                    fillOpacity="1"
                  />
                  <path
                    clipRule="evenodd"
                    d="M16 7.5C16 7.5 17.7287 7.5 19.3089 8.16838C19.3089 8.16838 20.8345 8.81364 22.0104 9.98959C22.0104 9.98959 23.1864 11.1655 23.8316 12.6911C23.8316 12.6911 24.5 14.2713 24.5 16C24.5 16 24.5 17.7287 23.8316 19.3089C23.8316 19.3089 23.1864 20.8345 22.0104 22.0104C22.0104 22.0104 20.8345 23.1864 19.3089 23.8316C19.3089 23.8316 17.7287 24.5 16 24.5C16 24.5 14.2713 24.5 12.6911 23.8316C12.6911 23.8316 11.1655 23.1864 9.98959 22.0104C9.98959 22.0104 8.81364 20.8345 8.16838 19.3089C8.16838 19.3089 7.5 17.7287 7.5 16C7.5 16 7.5 14.2713 8.16838 12.6911C8.16838 12.6911 8.81364 11.1655 9.98959 9.98959C9.98959 9.98959 11.1655 8.81364 12.6911 8.16838C12.6911 8.16838 14.2713 7.5 16 7.5ZM16 9.5C16 9.5 13.3076 9.5 11.4038 11.4038C11.4038 11.4038 9.5 13.3076 9.5 16C9.5 16 9.5 18.6924 11.4038 20.5962C11.4038 20.5962 13.3076 22.5 16 22.5C16 22.5 18.6924 22.5 20.5962 20.5962C20.5962 20.5962 22.5 18.6924 22.5 16C22.5 16 22.5 13.3076 20.5962 11.4038C20.5962 11.4038 18.6924 9.5 16 9.5Z"
                    fill="#ffffff"
                  />
                  <path
                    d="M17 4.5V2C17 1.44772 16.5523 1 16 1C15.4477 1 15 1.44772 15 2V4.5C15 5.05228 15.4477 5.5 16 5.5C16.5523 5.5 17 5.05228 17 4.5Z"
                    fill="#1C1C1C"
                  />
                  <path
                    d="M6.8072 5.3929C6.61967 5.20536 6.36531 5.10001 6.1001 5.10001C5.83488 5.10001 5.58053 5.20536 5.39299 5.3929C5.20545 5.58044 5.1001 5.83479 5.1001 6.10001C5.1001 6.36522 5.20545 6.61958 5.39299 6.80711L7.15549 8.56961C7.34303 8.75715 7.59738 8.86251 7.8626 8.86251C8.12781 8.86251 8.38217 8.75715 8.5697 8.56961C8.75724 8.38208 8.8626 8.12772 8.8626 7.86251C8.8626 7.59729 8.75724 7.34294 8.5697 7.1554L6.8072 5.3929Z"
                    fill="#ffffff"
                  />
                  <path
                    d="M4.5 15H2C1.44772 15 1 15.4477 1 16C1 16.5523 1.44772 17 2 17H4.5C5.05228 17 5.5 16.5523 5.5 16C5.5 15.4477 5.05228 15 4.5 15Z"
                    fill="#1C1C1C"
                  />
                  <path
                    d="M5.39299 25.1929C5.20545 25.3804 5.1001 25.6348 5.1001 25.9C5.1001 25.9173 5.10054 25.9345 5.10144 25.9517C5.11423 26.1987 5.21811 26.4322 5.39299 26.6071C5.58053 26.7946 5.83488 26.9 6.1001 26.9C6.36531 26.9 6.61967 26.7946 6.8072 26.6071L8.5697 24.8446C8.75724 24.6571 8.8626 24.4027 8.8626 24.1375C8.8626 23.8723 8.75724 23.6179 8.56971 23.4304C8.38217 23.2429 8.12781 23.1375 7.8626 23.1375C7.84534 23.1375 7.82809 23.1379 7.81086 23.1388C7.56386 23.1516 7.33038 23.2555 7.15549 23.4304L5.39299 25.1929Z"
                    fill="#ffffff"
                  />
                  <path
                    d="M15 27.5V30C15 30.5523 15.4477 31 16 31C16.5523 31 17 30.5523 17 30V27.5C17 26.9477 16.5523 26.5 16 26.5C15.4477 26.5 15 26.9477 15 27.5Z"
                    fill="#1C1C1C"
                  />
                  <path
                    d="M23.4307 24.8447L25.1931 26.6071C25.3806 26.7946 25.635 26.9 25.9002 26.9C26.1654 26.9 26.4198 26.7946 26.6073 26.6071C26.7948 26.4196 26.9002 26.1652 26.9002 25.9C26.9002 25.6348 26.7948 25.3804 26.6073 25.1929L24.8449 23.4305C24.6573 23.2429 24.4029 23.1375 24.1377 23.1375C23.8725 23.1375 23.6181 23.2429 23.4306 23.4304C23.2431 23.6179 23.1377 23.8723 23.1377 24.1375C23.1377 24.4027 23.2431 24.6571 23.4307 24.8447Z"
                    fill="#ffffff"
                  />
                  <path
                    d="M27.5 17H30C30.5523 17 31 16.5523 31 16C31 15.4477 30.5523 15 30 15H27.5C26.9477 15 26.5 15.4477 26.5 16C26.5 16.5523 26.9477 17 27.5 17Z"
                    fill="#1C1C1C"
                  />
                  <path
                    d="M26.6073 6.80711C26.7948 6.61958 26.9002 6.36522 26.9002 6.10001C26.9002 5.83479 26.7948 5.58044 26.6073 5.3929C26.4198 5.20536 26.1654 5.10001 25.9002 5.10001C25.635 5.10001 25.3806 5.20536 25.1931 5.3929L23.4307 7.15528C23.2431 7.34294 23.1377 7.59729 23.1377 7.86251C23.1377 8.12772 23.2431 8.38208 23.4306 8.56961C23.6181 8.75715 23.8725 8.86251 24.1377 8.86251C24.4029 8.86251 24.6573 8.75715 24.8448 8.56961L26.6073 6.80711Z"
                    fill="#ffffff"
                  />
                </svg>
              </i>
              <i className="fas fa-moon">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 32 32"
                  fill="#ffffff"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.0876 19.0751C25.1243 19.6256 23.0498 19.6437 21.0771 19.1273C19.1045 18.611 17.3049 17.5788 15.863 16.1371C14.4214 14.6952 13.3892 12.8957 12.8728 10.923C12.3564 8.95035 12.3745 6.87589 12.925 4.91251C10.9895 5.45132 9.22876 6.4877 7.81836 7.91885C6.40796 9.34976 5.39697 11.1254 4.88647 13.0688C4.37573 15.0119 4.38306 17.0551 4.90796 18.9945C5.43262 20.9342 6.4563 22.7023 7.87695 24.1232C9.29785 25.5439 11.0659 26.5675 13.0056 27.0922C14.9451 27.6171 16.9883 27.6244 18.9314 27.1137C20.8748 26.6032 22.6504 25.5922 24.0813 24.1818C25.5125 22.7714 26.5488 21.0107 27.0876 19.0751Z"
                    fill="#ffffff"
                    fillOpacity="1"
                  />
                  <path
                    d="M28 14V8C28 7.44772 27.5523 7 27 7C26.4477 7 26 7.44772 26 8V14C26 14.5523 26.4477 15 27 15C27.5523 15 28 14.5523 28 14Z"
                    fill="#ffffff"
                  />
                  <path
                    d="M30 10H24C23.4477 10 23 10.4477 23 11C23 11.5523 23.4477 12 24 12H30C30.5523 12 31 11.5523 31 11C31 10.4477 30.5523 10 30 10Z"
                    fill="#ffffff"
                  />
                  <path
                    d="M20 3V7C20 7.55228 20.4477 8 21 8C21.5523 8 22 7.55228 22 7V3C22 2.44772 21.5523 2 21 2C20.4477 2 20 2.44772 20 3Z"
                    fill="#ffffff"
                  />
                  <path
                    d="M23 4H19C18.4477 4 18 4.44772 18 5C18 5.55228 18.4477 6 19 6H23C23.5523 6 24 5.55228 24 5C24 4.44772 23.5523 4 23 4Z"
                    fill="#ffffff"
                  />
                  <path
                    clipRule="evenodd"
                    d="M28.0505 19.3437L28.0501 19.3453C28.0501 19.3453 27.1561 22.555 24.783 24.894C24.783 24.894 22.409 27.2338 19.1853 28.0809C19.1853 28.0809 15.9616 28.9281 12.744 28.0576C12.744 28.0576 9.52653 27.1871 7.16961 24.8302C7.16961 24.8302 4.81269 22.4733 3.94223 19.2558C3.94223 19.2558 3.07176 16.0383 3.91888 12.8145C3.91888 12.8145 4.766 9.59078 7.10577 7.21684C7.10577 7.21684 9.44554 4.8429 12.6567 3.94913C12.9122 3.87801 13.1855 3.91131 13.4164 4.04169C13.6474 4.17207 13.8171 4.38886 13.8882 4.64437C13.9372 4.82043 13.937 5.00655 13.8877 5.18251C13.8877 5.18251 13.1201 7.91966 13.8399 10.6697C13.8399 10.6697 14.5598 13.4198 16.5699 15.4299C16.5699 15.4299 18.58 17.4401 21.3301 18.1599C21.3301 18.1599 24.0802 18.8797 26.8173 18.1122C26.9877 18.0644 27.1678 18.0627 27.3391 18.1072L27.3555 18.1116C27.6923 18.2054 27.9558 18.4683 28.0502 18.805C28.098 18.9754 28.0997 19.1555 28.0551 19.3268L28.0505 19.3437ZM23.3791 23.4696C23.3791 23.4696 24.7546 22.1139 25.5385 20.4098C25.5385 20.4098 23.1851 20.7128 20.8236 20.0947C20.8236 20.0947 17.5491 19.2376 15.1557 16.8442C15.1557 16.8442 12.7622 14.4507 11.9051 11.1762C11.9051 11.1762 11.287 8.81473 11.59 6.46129C11.59 6.46129 9.88595 7.24522 8.5302 8.62076C8.5302 8.62076 6.56479 10.6149 5.85321 13.3228C5.85321 13.3228 5.14163 16.0308 5.87282 18.7335C5.87282 18.7335 6.60401 21.4362 8.58383 23.416C8.58383 23.416 10.5636 25.3958 13.2663 26.127C13.2663 26.127 15.9691 26.8582 18.677 26.1466C18.677 26.1466 21.3849 25.435 23.3791 23.4696Z"
                    fill="#ffffff"
                  />
                </svg>
              </i>
            </label>
          </div>
          <div className="notification-btn">
            <button className="btn-icon" onClick={notification}>
              <svg
                width="23"
                height="23"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.2688 9.75009C5.26752 8.86098 5.4422 7.98033 5.78278 7.15901C6.12335 6.33765 6.62305 5.59181 7.25293 4.9644C7.883 4.33699 8.63098 3.84041 9.45367 3.50327C10.2766 3.16617 11.1578 2.99515 12.047 3.00009C15.7595 3.02824 18.7313 6.11261 18.7313 9.83446V10.5001C18.7313 13.8564 19.4344 15.8064 20.0531 16.8751C20.1188 16.9889 20.1536 17.118 20.1536 17.2495C20.1538 17.3809 20.1194 17.51 20.0538 17.6239C19.9883 17.7379 19.894 17.8326 19.7805 17.8987C19.6667 17.9647 19.5377 17.9996 19.4064 18.0001H4.59387C4.4624 17.9996 4.33331 17.9647 4.21979 17.8987C4.10608 17.8326 4.01178 17.7379 3.94623 17.6239C3.88068 17.51 3.84625 17.3809 3.84644 17.2495C3.84662 17.118 3.88123 16.9889 3.94696 16.8751C4.56567 15.8064 5.2688 13.8564 5.2688 10.5001V9.75009Z"
                  fill="var(--primary-color)"
                  fillOpacity="0.1"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.51879 10.5001V9.75008C4.51879 9.75008 4.51669 8.25437 5.08994 6.87174C5.08994 6.87174 5.66319 5.4891 6.72376 4.43293C6.72376 4.43293 7.78433 3.37676 9.16934 2.80926C9.16934 2.80926 10.5544 2.24176 12.0511 2.25009C12.0511 2.25009 13.573 2.26162 14.9589 2.86961C14.9589 2.86961 16.2922 3.45457 17.3187 4.50894C17.3187 4.50894 18.3411 5.55919 18.9019 6.91345C18.9019 6.91345 19.4813 8.31283 19.4813 9.83445V10.5001C19.4813 10.5001 19.4813 14.3904 20.7022 16.4993C20.7022 16.4993 20.9033 16.8475 20.9037 17.2488C20.9037 17.2488 20.904 17.65 20.704 17.9978C20.704 17.9978 20.504 18.3456 20.1571 18.5471C20.1571 18.5471 19.8102 18.7487 19.4089 18.7501L4.59379 18.7501C4.59379 18.7501 4.18993 18.7487 3.843 18.5471C3.843 18.5471 3.49607 18.3456 3.29608 17.9978C3.29608 17.9978 3.09608 17.65 3.09644 17.2488C3.09644 17.2488 3.09679 16.8475 3.2974 16.5001C3.2974 16.5001 4.51879 14.3904 4.51879 10.5001ZM6.01879 10.5001C6.01879 10.5001 6.01879 14.7933 4.59644 17.2501L19.4036 17.2501C19.4036 17.2501 17.9813 14.7926 17.9813 10.5001V9.83445C17.9813 9.83445 17.9813 7.33991 16.2439 5.55528C16.2439 5.55528 14.5046 3.76872 12.0427 3.75007C12.0427 3.75007 10.8457 3.74341 9.73807 4.19726C9.73807 4.19726 8.63041 4.65112 7.78222 5.49579C7.78222 5.49579 6.93403 6.34046 6.47557 7.44623C6.47557 7.44623 6.01711 8.55199 6.01879 9.75008V10.5001Z"
                  fill="var(--primary-color)"
                />
                <path
                  d="M15.75 18.75V18C15.75 17.5858 15.4142 17.25 15 17.25C14.5858 17.25 14.25 17.5858 14.25 18V18.75C14.25 19.682 13.591 20.341 13.591 20.341C12.932 21 12 21 12 21C11.068 21 10.409 20.341 10.409 20.341C9.75 19.682 9.75 18.75 9.75 18.75V18C9.75 17.5858 9.41421 17.25 9 17.25C8.58579 17.25 8.25 17.5858 8.25 18L8.25 18.75C8.25 20.3033 9.34835 21.4016 9.34835 21.4016C10.4467 22.5 12 22.5 12 22.5C13.5533 22.5 14.6516 21.4017 14.6516 21.4017C15.75 20.3033 15.75 18.75 15.75 18.75Z"
                  fill="var(--primary-color)"
                />
              </svg>
            </button>
            {/* NOTIFICATION BUTTON DATA---------------------------------------------------------------- */}
            {isshow && (
              <span className="notification_member">
                <article className="noti-data">
                  <h2>Notifications</h2>
                  <section className="notification-sections">
                    <p className="notifications">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width="24"
                          height="24"
                          rx="8"
                          fill="var(--primary-color)"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7 10.5C7 10.5 7 9.48308 7.39313 8.55362C7.39313 8.55362 7.77269 7.65624 8.46447 6.96447C8.46447 6.96447 9.15624 6.27269 10.0536 5.89313C10.0536 5.89313 10.9831 5.5 12 5.5C12 5.5 13.0169 5.5 13.9464 5.89313C13.9464 5.89313 14.8438 6.27269 15.5355 6.96447C15.5355 6.96447 16.2273 7.65624 16.6069 8.55362C16.6069 8.55362 17 9.48309 17 10.5V13.5C17 13.5 17 14.5169 16.6069 15.4464C16.6069 15.4464 16.2273 16.3438 15.5355 17.0355C15.5355 17.0355 14.8438 17.7273 13.9464 18.1069C13.9464 18.1069 13.0169 18.5 12 18.5C12 18.5 10.9831 18.5 10.0536 18.1069C10.0536 18.1069 9.15624 17.7273 8.46447 17.0355C8.46447 17.0355 7.77269 16.3438 7.39313 15.4464C7.39313 15.4464 7 14.5169 7 13.5V10.5ZM8 10.5V13.5C8 13.5 8 15.1569 9.17157 16.3284C9.17157 16.3284 10.3431 17.5 12 17.5C12 17.5 13.6569 17.5 14.8284 16.3284C14.8284 16.3284 16 15.1569 16 13.5V10.5C16 10.5 16 8.84315 14.8284 7.67157C14.8284 7.67157 13.6569 6.5 12 6.5C12 6.5 10.3431 6.5 9.17157 7.67157C9.17157 7.67157 8 8.84315 8 10.5Z"
                          fill="var(--secondary-color)"
                        />
                        <path
                          d="M16.5 13H18C18.2761 13 18.5 12.7761 18.5 12.5C18.5 12.2239 18.2761 12 18 12H16.5C16.2239 12 16 12.2239 16 12.5C16 12.7761 16.2239 13 16.5 13Z"
                          fill="var(--secondary-color)"
                        />
                        <path
                          d="M6 13H7.5C7.77614 13 8 12.7761 8 12.5C8 12.2239 7.77614 12 7.5 12H6C5.72386 12 5.5 12.2239 5.5 12.5C5.5 12.7761 5.72386 13 6 13Z"
                          fill="var(--secondary-color)"
                        />
                        <path
                          d="M6 15H7.6125C7.88864 15 8.1125 14.7761 8.1125 14.5C8.1125 14.2239 7.88864 14 7.6125 14H6C5.72386 14 5.5 14.2239 5.5 14.5C5.5 14.7761 5.72386 15 6 15Z"
                          fill="var(--secondary-color)"
                        />
                        <path
                          d="M6 11H18C18.2761 11 18.5 10.7761 18.5 10.5C18.5 10.2239 18.2761 10 18 10H6C5.72386 10 5.5 10.2239 5.5 10.5C5.5 10.7761 5.72386 11 6 11Z"
                          fill="var(--secondary-color)"
                        />
                        <path
                          d="M11.5 12.5V18C11.5 18.2761 11.7239 18.5 12 18.5C12.2761 18.5 12.5 18.2761 12.5 18V12.5C12.5 12.2239 12.2761 12 12 12C11.7239 12 11.5 12.2239 11.5 12.5Z"
                          fill="var(--secondary-color)"
                        />
                        <path
                          d="M16.3875 15H18C18.2762 15 18.5 14.7761 18.5 14.5C18.5 14.2239 18.2762 14 18 14H16.3875C16.1114 14 15.8875 14.2239 15.8875 14.5C15.8875 14.7761 16.1114 15 16.3875 15Z"
                          fill="var(--secondary-color)"
                        />
                        <path
                          d="M7.14945 6.11258L8.63695 7.52508C8.72987 7.61331 8.85311 7.6625 8.98124 7.6625L8.98218 7.6625L8.99417 7.66233C9.12673 7.6589 9.25251 7.60296 9.34382 7.50679C9.43205 7.41388 9.48124 7.29063 9.48124 7.1625L9.48124 7.16156L9.48108 7.14957C9.47765 7.01701 9.4217 6.89124 9.32554 6.79992L7.83804 5.38742C7.74512 5.29919 7.62188 5.25 7.49374 5.25L7.48082 5.25017C7.34825 5.2536 7.22248 5.30954 7.13117 5.40571C7.04294 5.49862 6.99374 5.62187 6.99374 5.75L6.99391 5.76293C6.99734 5.89549 7.05329 6.02126 7.14945 6.11258Z"
                          fill="var(--secondary-color)"
                        />
                        <path
                          d="M16.1495 5.38739L14.6683 6.79364C14.5721 6.88494 14.5161 7.0107 14.5127 7.14327L14.5125 7.15625L14.5126 7.16729C14.5154 7.29156 14.5643 7.41036 14.6499 7.5005C14.7412 7.59668 14.867 7.65264 14.9995 7.65608L15.0125 7.65625L15.0236 7.65613C15.1478 7.65338 15.2666 7.60445 15.3568 7.51886L16.838 6.11261C16.9342 6.02131 16.9902 5.89555 16.9936 5.76298L16.9938 5.75L16.9936 5.73896C16.9909 5.61469 16.942 5.49589 16.8564 5.40575C16.7651 5.30957 16.6393 5.25361 16.5067 5.25017L16.4938 5.25L16.4827 5.25012C16.3584 5.25287 16.2397 5.3018 16.1495 5.38739Z"
                          fill="var(--secondary-color)"
                        />
                      </svg>
                      &#160; You have a bug that needs to......
                    </p>
                    <p className="datestamp">5m ago</p>
                  </section>
                  <section className="notification-sections">
                    <p className="notifications">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width="24"
                          height="24"
                          rx="8"
                          fill="var(--primary-color)"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7 10.5C7 10.5 7 9.48308 7.39313 8.55362C7.39313 8.55362 7.77269 7.65624 8.46447 6.96447C8.46447 6.96447 9.15624 6.27269 10.0536 5.89313C10.0536 5.89313 10.9831 5.5 12 5.5C12 5.5 13.0169 5.5 13.9464 5.89313C13.9464 5.89313 14.8438 6.27269 15.5355 6.96447C15.5355 6.96447 16.2273 7.65624 16.6069 8.55362C16.6069 8.55362 17 9.48309 17 10.5V13.5C17 13.5 17 14.5169 16.6069 15.4464C16.6069 15.4464 16.2273 16.3438 15.5355 17.0355C15.5355 17.0355 14.8438 17.7273 13.9464 18.1069C13.9464 18.1069 13.0169 18.5 12 18.5C12 18.5 10.9831 18.5 10.0536 18.1069C10.0536 18.1069 9.15624 17.7273 8.46447 17.0355C8.46447 17.0355 7.77269 16.3438 7.39313 15.4464C7.39313 15.4464 7 14.5169 7 13.5V10.5ZM8 10.5V13.5C8 13.5 8 15.1569 9.17157 16.3284C9.17157 16.3284 10.3431 17.5 12 17.5C12 17.5 13.6569 17.5 14.8284 16.3284C14.8284 16.3284 16 15.1569 16 13.5V10.5C16 10.5 16 8.84315 14.8284 7.67157C14.8284 7.67157 13.6569 6.5 12 6.5C12 6.5 10.3431 6.5 9.17157 7.67157C9.17157 7.67157 8 8.84315 8 10.5Z"
                          fill="var(--secondary-color)"
                        />
                        <path
                          d="M16.5 13H18C18.2761 13 18.5 12.7761 18.5 12.5C18.5 12.2239 18.2761 12 18 12H16.5C16.2239 12 16 12.2239 16 12.5C16 12.7761 16.2239 13 16.5 13Z"
                          fill="var(--secondary-color)"
                        />
                        <path
                          d="M6 13H7.5C7.77614 13 8 12.7761 8 12.5C8 12.2239 7.77614 12 7.5 12H6C5.72386 12 5.5 12.2239 5.5 12.5C5.5 12.7761 5.72386 13 6 13Z"
                          fill="var(--secondary-color)"
                        />
                        <path
                          d="M6 15H7.6125C7.88864 15 8.1125 14.7761 8.1125 14.5C8.1125 14.2239 7.88864 14 7.6125 14H6C5.72386 14 5.5 14.2239 5.5 14.5C5.5 14.7761 5.72386 15 6 15Z"
                          fill="var(--secondary-color)"
                        />
                        <path
                          d="M6 11H18C18.2761 11 18.5 10.7761 18.5 10.5C18.5 10.2239 18.2761 10 18 10H6C5.72386 10 5.5 10.2239 5.5 10.5C5.5 10.7761 5.72386 11 6 11Z"
                          fill="var(--secondary-color)"
                        />
                        <path
                          d="M11.5 12.5V18C11.5 18.2761 11.7239 18.5 12 18.5C12.2761 18.5 12.5 18.2761 12.5 18V12.5C12.5 12.2239 12.2761 12 12 12C11.7239 12 11.5 12.2239 11.5 12.5Z"
                          fill="var(--secondary-color)"
                        />
                        <path
                          d="M16.3875 15H18C18.2762 15 18.5 14.7761 18.5 14.5C18.5 14.2239 18.2762 14 18 14H16.3875C16.1114 14 15.8875 14.2239 15.8875 14.5C15.8875 14.7761 16.1114 15 16.3875 15Z"
                          fill="var(--secondary-color)"
                        />
                        <path
                          d="M7.14945 6.11258L8.63695 7.52508C8.72987 7.61331 8.85311 7.6625 8.98124 7.6625L8.98218 7.6625L8.99417 7.66233C9.12673 7.6589 9.25251 7.60296 9.34382 7.50679C9.43205 7.41388 9.48124 7.29063 9.48124 7.1625L9.48124 7.16156L9.48108 7.14957C9.47765 7.01701 9.4217 6.89124 9.32554 6.79992L7.83804 5.38742C7.74512 5.29919 7.62188 5.25 7.49374 5.25L7.48082 5.25017C7.34825 5.2536 7.22248 5.30954 7.13117 5.40571C7.04294 5.49862 6.99374 5.62187 6.99374 5.75L6.99391 5.76293C6.99734 5.89549 7.05329 6.02126 7.14945 6.11258Z"
                          fill="var(--secondary-color)"
                        />
                        <path
                          d="M16.1495 5.38739L14.6683 6.79364C14.5721 6.88494 14.5161 7.0107 14.5127 7.14327L14.5125 7.15625L14.5126 7.16729C14.5154 7.29156 14.5643 7.41036 14.6499 7.5005C14.7412 7.59668 14.867 7.65264 14.9995 7.65608L15.0125 7.65625L15.0236 7.65613C15.1478 7.65338 15.2666 7.60445 15.3568 7.51886L16.838 6.11261C16.9342 6.02131 16.9902 5.89555 16.9936 5.76298L16.9938 5.75L16.9936 5.73896C16.9909 5.61469 16.942 5.49589 16.8564 5.40575C16.7651 5.30957 16.6393 5.25361 16.5067 5.25017L16.4938 5.25L16.4827 5.25012C16.3584 5.25287 16.2397 5.3018 16.1495 5.38739Z"
                          fill="var(--secondary-color)"
                        />
                      </svg>
                      &#160; You have bug that needs to.......
                    </p>
                    <p className="datestamp">0:32 AM</p>
                  </section>
                  <section className="notification-sections">
                    <p className="notifications">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width="24"
                          height="24"
                          rx="8"
                          fill="var(--primary-color)"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12.0001 9.49976C12.0001 9.49976 13.0356 9.49976 13.7678 10.232C13.7678 10.232 14.5001 10.9642 14.5001 11.9998C14.5001 11.9998 14.5001 13.0353 13.7678 13.7675C13.7678 13.7675 13.0356 14.4998 12.0001 14.4998C12.0001 14.4998 10.9645 14.4998 10.2323 13.7675C10.2323 13.7675 9.50006 13.0353 9.50006 11.9998C9.50006 11.9998 9.50006 10.9642 10.2323 10.232C10.2323 10.232 10.9645 9.49976 12.0001 9.49976ZM12.0001 10.4998C12.0001 10.4998 11.3787 10.4998 10.9394 10.9391C10.9394 10.9391 10.5001 11.3784 10.5001 11.9998C10.5001 11.9998 10.5001 12.6211 10.9394 13.0604C10.9394 13.0604 11.3787 13.4998 12.0001 13.4998C12.0001 13.4998 12.6214 13.4998 13.0607 13.0604C13.0607 13.0604 13.5001 12.6211 13.5001 11.9998C13.5001 11.9998 13.5001 11.3784 13.0607 10.9391C13.0607 10.9391 12.6214 10.4998 12.0001 10.4998Z"
                          fill="var(--secondary-color)"
                        />
                        <path
                          d="M9.17217 9.17223C9.26593 9.07846 9.31881 8.95109 9.31881 8.81848C9.31881 8.68597 9.2662 8.55888 9.17256 8.46512C9.07879 8.37136 8.95142 8.31848 8.81881 8.31848C8.68629 8.31848 8.5592 8.37108 8.46545 8.46473C7.77418 9.15524 7.39541 10.0559 7.39541 10.0559C6.99994 10.9866 6.99994 11.9997 6.99994 11.9997C6.99994 13.0128 7.39613 13.9453 7.39613 13.9453C7.77418 14.8442 8.46545 15.5347 8.46545 15.5347C8.5592 15.6284 8.6863 15.681 8.81881 15.681C8.95142 15.6809 9.07884 15.6282 9.17256 15.5343C9.2662 15.4406 9.31881 15.3135 9.31881 15.181C9.31873 15.0484 9.26599 14.9209 9.17217 14.8272C8.61984 14.2755 8.31649 13.5542 8.31649 13.5542C7.99994 12.8092 7.99994 11.9997 7.99994 11.9997C7.99994 11.1903 8.31721 10.4436 8.31721 10.4436C8.61985 9.72394 9.17217 9.17223 9.17217 9.17223Z"
                          fill="var(--secondary-color)"
                        />
                        <path
                          d="M15.5349 8.46493C16.226 9.15537 16.604 10.0542 16.604 10.0542C17.0002 10.9866 17.0002 11.9997 17.0002 11.9997C17.0002 13.0128 16.6047 13.9436 16.6047 13.9436C16.2259 14.8442 15.5347 15.5347 15.5347 15.5347C15.4472 15.6221 15.3304 15.674 15.2069 15.6803C15.1984 15.6808 15.1898 15.681 15.1813 15.681C15.0486 15.681 14.9213 15.6282 14.8276 15.5343C14.7397 15.4464 14.6878 15.3289 14.6819 15.2047C14.6815 15.1968 14.6813 15.1889 14.6813 15.181C14.6814 15.0484 14.7341 14.9209 14.8279 14.8272C15.3803 14.2755 15.6829 13.5559 15.6829 13.5559C16.0002 12.8092 16.0002 11.9997 16.0002 11.9997C16.0002 11.1903 15.6836 10.4453 15.6836 10.4453C15.3803 9.72394 14.8279 9.17223 14.8279 9.17223C14.7341 9.07845 14.6813 8.95119 14.6813 8.81848C14.6813 8.68699 14.7331 8.5608 14.8255 8.46722L14.8276 8.46512C14.9104 8.38222 15.0197 8.33103 15.1364 8.3205C15.1512 8.31916 15.1661 8.31849 15.181 8.31848C15.3114 8.31848 15.4369 8.3694 15.5303 8.46038L15.5349 8.46493Z"
                          fill="var(--secondary-color)"
                        />
                        <path
                          d="M7.4036 7.40336L7.40588 7.40106C7.49825 7.30749 7.55005 7.18129 7.55005 7.0498C7.55005 6.91704 7.49724 6.78972 7.40328 6.69593L7.399 6.6917C7.30563 6.60072 7.18042 6.5498 7.05005 6.5498C7.0352 6.54982 7.01991 6.55049 7.00512 6.55183C6.88835 6.56236 6.779 6.6136 6.69617 6.69658C5.66247 7.73227 5.08988 9.07924 5.08988 9.07924C4.5 10.4809 4.5 11.9998 4.5 11.9998C4.5 13.5187 5.0892 14.9188 5.0892 14.9188C5.66229 16.2673 6.69617 17.303 6.69617 17.303C6.78985 17.3969 6.91698 17.4497 7.04959 17.4498C7.05744 17.4498 7.06576 17.4496 7.07361 17.4492C7.19777 17.4434 7.3153 17.3915 7.40328 17.3037C7.49724 17.2099 7.55005 17.0826 7.55005 16.9498C7.55005 16.9413 7.54983 16.9329 7.5494 16.9244C7.54312 16.8009 7.49129 16.6841 7.40393 16.5966C6.50687 15.6979 6.0109 14.5309 6.0109 14.5309C5.5 13.3169 5.5 11.9998 5.5 11.9998C5.5 10.6827 6.01022 9.47037 6.01022 9.47037C6.50678 8.30195 7.4036 7.40336 7.4036 7.40336Z"
                          fill="var(--secondary-color)"
                        />
                        <path
                          d="M17.3043 6.69688L17.3036 6.69625C17.21 6.6026 17.083 6.54993 16.9505 6.5498C16.8181 6.5498 16.6906 6.60236 16.5968 6.69593C16.5031 6.78969 16.4501 6.9172 16.4501 7.0498C16.4501 7.18225 16.5026 7.30929 16.5962 7.40303C17.4932 8.30174 17.9892 9.46875 17.9892 9.46875C18.5001 10.6827 18.5001 11.9998 18.5001 11.9998C18.5001 13.3169 17.9899 14.5292 17.9899 14.5292C17.4932 15.6979 16.5962 16.5966 16.5962 16.5966C16.5026 16.6903 16.4501 16.8174 16.4501 16.9498C16.4502 17.0824 16.503 17.21 16.5968 17.3037C16.6906 17.3973 16.8176 17.4498 16.9501 17.4498C17.0827 17.4497 17.2103 17.3969 17.304 17.303C18.3378 16.2673 18.9102 14.9204 18.9102 14.9204C19.5001 13.5187 19.5001 11.9998 19.5001 11.9998C19.5001 10.4809 18.9109 9.08085 18.9109 9.08085C18.3379 7.73255 17.3043 6.69688 17.3043 6.69688Z"
                          fill="var(--secondary-color)"
                        />
                      </svg>
                      &#160; Welcome to friday intel &#128075;
                    </p>
                    <p className="datestamp">Yesterday 12:39 AM</p>
                  </section>

                  <section className="delete-noti-btn">
                    <span className="noti-icon-delete">
                      <RiDeleteBinLine />
                    </span>
                    <h4 className="clear-noti">Clear Notification</h4>
                  </section>
                </article>
                <div className="noti-triangle"></div>
              </span>
            )}
          </div>
        </section>
      </nav>

      <main>
        <section className="account-container">
          <h1 className="account-heading">Your Account</h1>
          <p className="account-description">
            Manage your account & subscription
          </p>
        </section>
        <section className="member_details">
          <article>
            <svg
              width="78"
              height="78"
              viewBox="0 0 78 78"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="39"
                cy="39"
                r="38"
                fill="black"
                fillOpacity="0.1"
                stroke="url(#paint0_angular_13_13792)"
                strokeWidth="2"
                strokeLinecap="round"
                
              />
              <path
                d="M49.5 33.75C49.5 39.5489 44.7989 44.25 39 44.25C33.2011 44.25 28.5 39.5489 28.5 33.75C28.5 27.9511 33.2011 23.25 39 23.25C44.7989 23.25 49.5 27.9511 49.5 33.75Z"
                fill="black"
                fillOpacity="0.1"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M39 21.9375C39 21.9375 41.4024 21.9375 43.5984 22.8663C43.5984 22.8663 45.7184 23.763 47.3527 25.3973C47.3527 25.3973 48.987 27.0316 49.8837 29.1516C49.8837 29.1516 50.8125 31.3476 50.8125 33.75C50.8125 33.75 50.8125 36.1524 49.8837 38.3484C49.8837 38.3484 48.987 40.4684 47.3527 42.1027C47.3527 42.1027 45.7184 43.737 43.5984 44.6337C43.5984 44.6337 41.4024 45.5625 39 45.5625C39 45.5625 36.5976 45.5625 34.4016 44.6337C34.4016 44.6337 32.2816 43.737 30.6473 42.1027C30.6473 42.1027 29.013 40.4684 28.1163 38.3484C28.1163 38.3484 27.1875 36.1524 27.1875 33.75C27.1875 33.75 27.1875 31.3476 28.1163 29.1516C28.1163 29.1516 29.013 27.0316 30.6473 25.3973C30.6473 25.3973 32.2816 23.763 34.4016 22.8663C34.4016 22.8663 36.5976 21.9375 39 21.9375ZM39 24.5625C39 24.5625 35.1944 24.5625 32.5035 27.2535C32.5035 27.2535 29.8125 29.9444 29.8125 33.75C29.8125 33.75 29.8125 37.5556 32.5035 40.2465C32.5035 40.2465 35.1944 42.9375 39 42.9375C39 42.9375 42.8056 42.9375 45.4965 40.2465C45.4965 40.2465 48.1875 37.5556 48.1875 33.75C48.1875 33.75 48.1875 29.9444 45.4965 27.2535C45.4965 27.2535 42.8056 24.5625 39 24.5625Z"
                fill="var(--primary-color)"
              />
              <path
                d="M47.5319 47.8474C51.4916 50.1337 53.7773 54.0936 53.7773 54.0936C53.9514 54.3951 54.238 54.6151 54.5742 54.7052C54.6851 54.735 54.7993 54.75 54.9141 54.75C54.9278 54.75 54.9416 54.7498 54.9553 54.7493C55.1716 54.7425 55.3828 54.6824 55.5702 54.5742C55.9764 54.3398 56.2266 53.9065 56.2266 53.4375C56.2266 53.4172 56.2261 53.397 56.2252 53.3767C56.2154 53.1672 56.1557 52.963 56.0508 52.7814C53.4133 48.2122 48.8445 45.5741 48.8445 45.5741C44.2757 42.936 39 42.936 39 42.936C33.7243 42.936 29.1555 45.5741 29.1555 45.5741C24.587 48.212 21.9496 52.7806 21.9496 52.7806L21.9492 52.7814C21.8341 52.9809 21.7734 53.2071 21.7734 53.4375L21.7737 53.4613C21.7756 53.568 21.7905 53.6742 21.8182 53.7773C21.9083 54.1135 22.1283 54.4002 22.4298 54.5742C22.6293 54.6894 22.8556 54.75 23.0859 54.75C23.1102 54.75 23.1345 54.7493 23.1588 54.748C23.6011 54.7234 24.0012 54.4773 24.2227 54.0936C26.5084 50.1337 30.4681 47.8474 30.4681 47.8474C34.4277 45.561 39 45.561 39 45.561C43.5723 45.561 47.5319 47.8474 47.5319 47.8474Z"
                fill="var(--primary-color)"
              />
              <circle
                cx="62"
                cy="64"
                r="12.75"
                fill="#00F0FF"
                stroke="white"
                strokeWidth="1.5"
              />
              <path
                d="M62.5 59.9999L66 63.4999L67.6437 61.8562C67.691 61.8097 67.7285 61.7542 67.7541 61.6931C67.7797 61.6319 67.7929 61.5662 67.7929 61.4999C67.7929 61.4337 67.7797 61.368 67.7541 61.3068C67.7285 61.2457 67.691 61.1902 67.6437 61.1437L64.8563 58.3562C64.8097 58.309 64.7543 58.2714 64.6931 58.2458C64.632 58.2202 64.5663 58.207 64.5 58.207C64.4337 58.207 64.368 58.2202 64.3069 58.2458C64.2457 58.2714 64.1903 58.309 64.1437 58.3562L62.5 59.9999Z"
                fill="white"
                fillOpacity="0.1"
              />
              <path
                d="M65.6462 63.8533L65.6464 63.8536C65.7402 63.9473 65.8674 64 66 64C66.1326 64 66.2598 63.9473 66.3536 63.8536C66.4473 63.7598 66.5 63.6326 66.5 63.5C66.5 63.3674 66.4473 63.2402 66.3536 63.1464L66.3533 63.1462L62.8536 59.6465C62.7598 59.5527 62.6326 59.5 62.5 59.5C62.3674 59.5 62.2402 59.5527 62.1464 59.6464C62.0527 59.7402 62 59.8674 62 60C62 60.1326 62.0527 60.2598 62.1464 60.3536L65.6462 63.8533Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M57 69.9999H59.7929L59.7938 69.9999C59.7938 69.9999 59.9907 70.0003 60.173 69.9254C60.173 69.9254 60.3561 69.8502 60.4964 69.7106L67.9973 62.2097C67.9973 62.2097 68.1377 62.0715 68.2153 61.8862C68.2153 61.8862 68.2929 61.7008 68.2929 61.4999C68.2929 61.4999 68.2929 61.299 68.2153 61.1137C68.2153 61.1137 68.1377 60.9284 67.9946 60.7874L65.2098 58.0026C65.2098 58.0026 65.0715 57.8622 64.8862 57.7846C64.8862 57.7846 64.7009 57.707 64.5 57.707C64.5 57.707 64.2991 57.707 64.1138 57.7846C64.1138 57.7846 63.9285 57.8622 63.7875 58.0054L56.2902 65.5026C56.2902 65.5026 56.1497 65.6438 56.0745 65.8269C56.0745 65.8269 55.9993 66.01 56 66.2079L56 68.9999C56 68.9999 56 69.4142 56.2929 69.7071C56.2929 69.7071 56.5858 69.9999 57 69.9999ZM67.2902 61.5026L59.7929 68.9999H57L57 66.2071L64.5 58.707L64.5027 58.7097L67.2929 61.4999L67.2902 61.5026Z"
                fill="white"
              />
              <defs>
                <radialGradient
                  id="paint0_angular_13_13792"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(39 39) rotate(52.6507) scale(37.6311)"
                >
                  <stop stopColor="#00F0FF" />
                  <stop offset="1" stopColor="#FF1CF7" />
                </radialGradient>
              </defs>
            </svg>
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
        <section className="transaction-details">
          <article className="subscription_details">
            <h3>Subscription Validity</h3>
            <div>
              <h6>Annually </h6>
              <p>(27 days remaining)</p>
            </div>
            <button>Renew Activation</button>
            <a href="#cancel subscription">Cancel Subscription</a>
          </article>
          <article>
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
            </table>
          </article>
        </section>
      </main>
<PopUp/>
      <footer className="footer-member ">
        &copy; 2023-24 Friday Intel LLP
      </footer>
    </>
  );
};

export default Member;
