/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from 'react';
import '../css/navbar.css';
import DrawerInfo from './DrawerInfo';
import { CiSearch } from 'react-icons/ci';
import Notication from './Notication';
import Profile from './Profile';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import '../css/newcase.css';
import { themeChange } from '../utils';
import constants from '../constant/routesConstant';
import { ReactComponent as FIEYE } from '../images/svg/fiEyeLogo.svg';
import { ReactComponent as FILogo } from '../images/svg/fridayLogo.svg';
import { ReactComponent as Logo } from '../images/svg/firdayIntel.svg';
import { ReactComponent as BookMark } from '../images/svg/bookmarkIcon.svg';
import { ReactComponent as Sun } from '../images/svg/sun.svg';
import { ReactComponent as Bell } from '../images/svg/bell.svg';
import { ReactComponent as User } from '../images/svg/user.svg';
import { ReactComponent as Star } from '../images/svg/star.svg';
import { ReactComponent as SunShine } from '../images/svg/sunshine.svg';
import { ReactComponent as Moon } from '../images/svg/moon.svg';
import nightImage from '../images/night.png';
import dayImage from '../images/day.png';
import dark from '../images/svg/darklogo.svg';
import light from '../images/logo.png';
import { httpCall } from '../axios/httpService';

const Navbar = ({
  caseName,
  setNodeInfo,
  setNodeInfoList,
  nodeInfoList,
  setNodes,
  setIsLoading,
  mode,
  setMode,
  activeButton,
  setActiveButton,
  search,
  setSearch,
  setRansomeData,
  profileDetail,
}) => {
  const [logoo, setLogoo] = useState(light);
  const { ROUTES } = constants;


  const profileRef = useRef(null);
  const notificationRef = useRef(null);

  const handleButtonClick = (button) => {
    setActiveButton((prevButton) => (prevButton === button ? null : button));
  };

  const handleOk = () => { };

  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (location.pathname.split('/')[1] === `${ROUTES.newCase.split('/')[1]}`) {
      setIsLoading(true);

      const loadCanvasData = await httpCall(
        `canvas.php?query=${search}`,
        'GET',
        {},
        {},
      );

      const loadRansomData = await httpCall(
        `ransomesearch.php?group=${search}`,
        'GET',
        {},
        {},
      );

      Promise.all([loadCanvasData, loadRansomData])
        .then((res) => {
          console.log(res);
          setNodeInfo({ query: search, data: res[0] });
          setNodeInfoList([...nodeInfoList, { query: search, data: res[0] }]);
          setNodes((prev) => [
            ...prev,
            {
              id: search,
              type: 'default',
              data: { label: search },
              position: { x: Math.random() * 500, y: Math.random() * 500 },
            },
          ]);
          setRansomeData(res[1]);
          setSearch('');
          setIsLoading(false);

          setIsLoading(false);
        })
        .catch((err) => {
          setIsLoading(false);
          console.log(err);
        });
    } else {
    }
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target) &&
        activeButton === 'openprofile'
      ) {
        setActiveButton(null);
      }

      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target) &&
        activeButton === 'notification'
      ) {
        setActiveButton(null);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [activeButton]);

  return (
    <nav className="nav_bar">
      {location.pathname === '/member' ? (
        <nav className="navbar-member">
          <section className="member-profile">
            <h2 className="member_profile-name">Profile </h2>
            <span>/</span>
            <h4 className="member-friday_intel">Friday Intel</h4>
          </section>
          <section className="theme-notification"></section>
          <section className="theme-toggle-notification">
            <div className="switch-container-member">
              <input
                type="checkbox"
                id="switch"
                onClick={(event) =>
                  themeChange({
                    event,
                    setMode,
                    mode,
                    nightImage,
                    dayImage,
                    setLogoo,
                    logoo,
                    light,
                    dark,
                  })
                }
              />
              <label
                htmlFor="switch"
                id="theme-label"
                style={{
                  backgroundImage: `url(${!mode ? nightImage : dayImage})`,
                  backgroundSize: 'cover',
                }}
              >
                <i className="fas fa-sun">
                  <SunShine />
                </i>
                <i className="fas fa-moon">
                  <Moon />
                </i>
              </label>
            </div>
            <div className="member-noti-icon">
              <button
                className="btn-icon"
                onClick={() => handleButtonClick('notification')}
              >
                <Bell style={{ fill: 'var(--primary-color)' }} />
              </button>
              {activeButton === 'notification' && (
                <Notication className="notification-component" />
              )}
            </div>
          </section>
        </nav>
      ) : (
        <>
          <section className="logo_box">
            {location.pathname.split('/')[1] ===
              `${ROUTES.newCase.split('/')[1]}` ? (
              <div className="case-dashboard">
                <div>
                  <button className="btn-icon bookmark" onClick={handleOk}>
                    <Star style={{ fill: 'var(--primary-color)' }} />
                  </button>
                </div>
                <div className="dashboard-cases">
                  <Link to={ROUTES.home}>
                    <h3 className="dashboard-title">Dashboard&#160;/</h3>
                  </Link>
                  <h3 className="case-no">{caseName}</h3>
                </div>
              </div>
            ) : (
              <Logo style={{ fill: 'var(--primary-color)' }} />
            )}
          </section>
          <section className="notification_btn">
            <div>
              <button
                className="btn-icon"
                onClick={() => handleButtonClick('opendrawer')}
              >
                <BookMark style={{ fill: 'var(--primary-color)' }} />
              </button>
              {activeButton === 'opendrawer' && <DrawerInfo />}
            </div>
            <form onSubmit={handleSubmit} className="searchbar-box">
            {mode ? (
      <FILogo
      />
    ) : (
      <FIEYE style={{ fill: 'var(--primary-color)' }} />
    )}
              <input
                type="text"
                className="search-bar-NC"
                onChange={handleChange}
                placeholder="Search Keywords, TOR, URL, etc..."
                value={search}
              />
              <CiSearch className="searchbar-logo" />
            </form>
            <div>
              <button
                className="btn-icon"
                onClick={(event) => themeChange({ event, setMode, mode })}
              >
                <Sun style={{ fill: 'var(--primary-color)' }} />
              </button>
            </div>
            <div>
              <button
                className="btn-icon"
                onClick={(event) => {
                  event.stopPropagation(); // Prevent event propagation
                  handleButtonClick('notification');
                }}
              >
                <Bell style={{ fill: 'var(--primary-color)' }} />
              </button>
              {activeButton === 'notification' && (
                <div ref={notificationRef}>
                  <Notication />
                </div>
              )}
            </div>
            <div  onClick={(event) => {
                  event.stopPropagation(); // Prevent event propagation
                  handleButtonClick('openprofile');
                }}>
              <button className="btn-icon member-notification">
                <User style={{ fill: 'var(--primary-color)' }} />
              </button>
              {activeButton === 'openprofile' && (
                <div ref={profileRef}>
                  <Profile profileDetail={profileDetail} />
                </div>
              )}
            </div>
          </section>
        </>
      )}
    </nav>
  );
};

export default Navbar;
