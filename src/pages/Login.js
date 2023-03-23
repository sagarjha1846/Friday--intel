import React, { useState } from 'react';
import '../css/login.css';
import nightImage from '../images/night.png';
import dayImage from '../images/day.png';
import light from '../images/logo.png';
import user from '../images/user.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import dark from "../images/darklogo.jpeg"
import dark from '../images/svg/darklogo.svg';

// function handleclick(){
//     Navigate("/caseBlog")
// }

const Login = () => {
  const [mode, setMode] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [logoo, setLogoo] = useState(light);
  const Navigate = useNavigate();
  function handleforgetpassword() {
    Navigate('/forgot-password');
  }
  async function loggingIn(event) {
    console.warn(email, password);

    try {
      const response = await axios.post(
        'https://fridayintel.io/api-dev/login.php',
        {
          username: email,
          password: password,
        },
      );

      if (response.data.Login === 'Success') {
        // <Navigate to="/products" />
        Navigate('/home');
      }
      if (response.data.Login === 'Failed') {
        setError('Wrong Username or Password! Enter valid credentials.');
      }
    } catch (error) {
      setError('Wrong Username or Password! Enter valid credentials.');
    }

    const arrowSvg = document.querySelector('.login-svg');
    arrowSvg?.classList.add('login-animation');
    const apiCall = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('foo');
      }, 3000);
    });

    apiCall.then(() => {
      arrowSvg?.classList.toggle('login-animation');
      arrowSvg.style.display = 'none';
      const checkMark = document.querySelector('.check-mark');
      checkMark.style.display = 'revert';
    });
  }

  function themeChange(event) {
    setMode(!mode);

    const htmlElement = document.querySelector('html');
    // set theme button background
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
    // const logotheme = document.getElementsByClassName(".inactive")
    // // eslint-disable-next-line no-unused-expressions
    // logotheme.classList.remove("inactive")

    let value = logoo;

    if (value === light) {
      setLogoo(dark);
    } else {
      setLogoo(light);
    }
  }

  return (
    <div className="App">
      <main>
        <nav className="navbar-login">
          <section className="logo">
            <img
              className="active-login"
              src={logoo}
              alt="friday-intel logo "
            />
            {/* <img className='active inactive' src={darklogo} alt="dark logo"/> */}
          </section>
          <section className="theme-toggle">
            <div className="switch-container">
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
                      fillRule="evenodd"
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
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M28.0505 19.3437L28.0501 19.3453C28.0501 19.3453 27.1561 22.555 24.783 24.894C24.783 24.894 22.409 27.2338 19.1853 28.0809C19.1853 28.0809 15.9616 28.9281 12.744 28.0576C12.744 28.0576 9.52653 27.1871 7.16961 24.8302C7.16961 24.8302 4.81269 22.4733 3.94223 19.2558C3.94223 19.2558 3.07176 16.0383 3.91888 12.8145C3.91888 12.8145 4.766 9.59078 7.10577 7.21684C7.10577 7.21684 9.44554 4.8429 12.6567 3.94913C12.9122 3.87801 13.1855 3.91131 13.4164 4.04169C13.6474 4.17207 13.8171 4.38886 13.8882 4.64437C13.9372 4.82043 13.937 5.00655 13.8877 5.18251C13.8877 5.18251 13.1201 7.91966 13.8399 10.6697C13.8399 10.6697 14.5598 13.4198 16.5699 15.4299C16.5699 15.4299 18.58 17.4401 21.3301 18.1599C21.3301 18.1599 24.0802 18.8797 26.8173 18.1122C26.9877 18.0644 27.1678 18.0627 27.3391 18.1072L27.3555 18.1116C27.6923 18.2054 27.9558 18.4683 28.0502 18.805C28.098 18.9754 28.0997 19.1555 28.0551 19.3268L28.0505 19.3437ZM23.3791 23.4696C23.3791 23.4696 24.7546 22.1139 25.5385 20.4098C25.5385 20.4098 23.1851 20.7128 20.8236 20.0947C20.8236 20.0947 17.5491 19.2376 15.1557 16.8442C15.1557 16.8442 12.7622 14.4507 11.9051 11.1762C11.9051 11.1762 11.287 8.81473 11.59 6.46129C11.59 6.46129 9.88595 7.24522 8.5302 8.62076C8.5302 8.62076 6.56479 10.6149 5.85321 13.3228C5.85321 13.3228 5.14163 16.0308 5.87282 18.7335C5.87282 18.7335 6.60401 21.4362 8.58383 23.416C8.58383 23.416 10.5636 25.3958 13.2663 26.127C13.2663 26.127 15.9691 26.8582 18.677 26.1466C18.677 26.1466 21.3849 25.435 23.3791 23.4696Z"
                      fill="#ffffff"
                    />
                  </svg>
                </i>
              </label>
            </div>
          </section>
        </nav>

        <section className="form-login">
          <h3 className="welcome-back">Welcome back</h3>
          <h4 className="login-credentials-heading">
            Please enter your login credentials.
          </h4>
          <p className="email-address">Email address</p>
          <input
            className="input input-1"
            placeholder="name@company.com"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="password">Password</p>
          <input
            className="input-2 input"
            placeholder="*********"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br></br>
          {error && <div className="login-error"> {error} </div>}
          <span className="login-checkbox">
            {/* <div className="remember-me">
                        <input  className='remember-checkbox' type='checkbox' /> 
                        <span>Remember me</span>
                    </div> */}
            <div className="remember-me">
              <input className="remember-checkbox" type="checkbox" />
              <div className="checkmark"></div>Remember me
            </div>
            <span onClick={handleforgetpassword} className="forgot-password">
              Forgot password
            </span>
          </span>

          <button className="login-button-slide" onClick={loggingIn}>
            Sign In
            <div className="iconbtn">
              <svg
                height="24"
                width="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </button>
          <p className="contact-us">
            Don't have an account ? <a href="#contact"> Contact Us</a>
          </p>
        </section>
        <footer className="footer-login">
          &copy; 2023-24 Friday Intel LLP
        </footer>
      </main>
      <aside className="user-img">
        <img src={user} alt="user " className="user-image" />
      </aside>
    </div>
  );
};

export default Login;
