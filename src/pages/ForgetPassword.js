import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/forgetpage.css";

import ToggleSwitch from "../components/ToggleSwitch";
import ROUTES from "../constant/routesConstant";
import dayImage from "../images/day.png";
import forgetpassimg from "../images/forgetpass.jpeg";
import light from "../images/logo.png";
import nightImage from "../images/night.png";
import dark from '../images/svg/darklogo.svg'

const ForgetPassword = () => {
  const [mode, setMode] = useState(true);
  const [logoo,setLogoo]=useState(light);
  const navigate = useNavigate();

  // function loggingIn(event) {
  //   const arrowSvg = document.querySelector(".login-svg");
  //   arrowSvg?.classList.add("login-animation");
  //   const apiCall = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve("foo");
  //     }, 3000);
  //   });

  //   apiCall.then(() => {
  //     arrowSvg?.classList.toggle("login-animation");
  //     arrowSvg.style.display = "none";
  //     const checkMark = document.querySelector(".check-mark");
  //     checkMark.style.display = "revert";
  //   });
  // }

  function themeChange(event) {
    setMode(!mode);

    const htmlElement = document.querySelector("html");
    const label = document.querySelector("#theme-label");
    label.style.background = `url(${mode ? nightImage : dayImage})`;

    const PRIMARY =
      getComputedStyle(htmlElement).getPropertyValue("--primary-color");
    const SECONDARY =
      getComputedStyle(htmlElement).getPropertyValue("--secondary-color");

    htmlElement.style.setProperty("--primary-color", SECONDARY);
    htmlElement.style.setProperty("--secondary-color", PRIMARY);
    htmlElement.style.setProperty("--primary-color-1", SECONDARY);

    label.style.backgroundSize = "cover";
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
        <navbar className="navbar-forgotpage">
          <section className="logo">
            <img src={logoo} alt="friday-intel logo " />
          </section>
          <ToggleSwitch onClick={themeChange} />
        </navbar>

        <section className="form">
          <h3 className="Forgot-Password">Forgot Password</h3>
          <h4 className="login-credentials-heading">
            Please enter registered Email/Mobile to request password.
          </h4>
          <p className="email-address">Email address</p>
          <input
            className="input-fp"
            placeholder="name@company.com"
            type="text"
          />
          <br></br>
          <button className="login-button-slide-fp">
                        Reset Password
                        <div className="iconbtn">
                        <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor">
                            </path>
                        </svg>
                        </div>
                    </button>                   

          <p className="contact-uss">
            Wanna try again?{" "}
            <span onClick={() => navigate(ROUTES.login)}> Log in</span>
          </p>
        </section>
        <div className="copy_right_text">&copy; 2022-23 Friday Intel LLP</div>
      </main>
      <aside className="user-img">
        <img src={forgetpassimg} alt="user " className="user-image" />
      </aside>
    </div>
  );
};

export default ForgetPassword;