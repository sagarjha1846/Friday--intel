import React, { useCallback, useRef, useState } from 'react';
import { addEdge, useEdgesState, useNodesState } from 'reactflow';
import { toPng } from 'html-to-image';
import Footer from '../components/Footer-newcase';
import CanvasArea from '../components/CanvasArea';
import NodeList from '../components/NodeList';
import SideNav from '../components/Sidebar';
import Tool from '../components/Tool';
// import {AiOutlineCloseCircle} from "react-icons/ai";

import '../css/newcase.css';
import { getLayoutElements } from '../utils';
// import ROUTES from '../constant/routesConstant';
import { useNavigate } from 'react-router-dom';
// import { Navigate } from "react-router-dom";
// import Footer from "../components/Footer";
import star from '../images/svg/star.svg';
import bookmark from '../images/svg/questMark.svg';
import fridaySearch from '../images/svg/search-logo.svg';
import sun from '../images/svg/sun.svg';
import bell from '../images/svg/bell.svg';
import user from '../images/svg/userSolid.svg';
import DrawerInfo from '../components/DrawerInfo';
import constants from '../constant/routesConstant';
import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlineLogout } from 'react-icons/ai';
import { RiDeleteBinLine } from 'react-icons/ri';
// import { BiBuildings } from 'react-icons/bi';
import { BiPhoneCall } from 'react-icons/bi';
import { FiEdit } from 'react-icons/fi';
// import {HiOutlineSignal} from 'react-icons/hi'

const NewCase = () => {
  const { ROUTES } = constants;
  const [mode, setMode] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  // const [isactiv, setIsactiv] = useState(false);
  const [isshow, setIsshow] = useState(false);
  // const [isshowDiv, setIsshowDiv] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const navigate = useNavigate();
  const searchRef = useRef();
  const [nodeInfo, setNodeInfo] = useState({ list: [], name: '' });
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [canvasFunc, setCanvasFunc] = useState();
  const [isChecked, setIsChecked] = useState({});
  const [search, setSearch] = useState('');

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  const onInit = (reactFlowInstance) => setCanvasFunc(reactFlowInstance);

  const onLayout = useCallback(
    (direction) => {
      const { nodes: layoutNodes, edges: layoutEdges } = getLayoutElements(
        nodes,
        edges,
        direction,
      );

      setNodes([...layoutNodes]);
      setEdges([...layoutEdges]);
    },
    [nodes, edges, setNodes, setEdges],
  );

  const opendrawer = () => {
    setIsOpen(!isOpen);
  };

  const notification = () => {
    setIsshow(!isshow);
  };

  // const handleClose = () => {
  //   setIsshowDiv(false);
  // };

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  // const activity = () => {
  //   setIsactiv(!isactiv);
  // };

  function themeChange(event) {
    setMode(!mode);

    const htmlElement = document.querySelector('html');
    // set theme button background
    const label = document.querySelector('#theme-label');
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
  }

  return (
    <>
      <nav className="nav_bar">
        <section className="logo_box">
          <div className="case-dashboard">
            <div>
              <button className="btn-icon bookmark">
                <img src={star} alt="star" />
              </button>
            </div>
            <div className="dashboard-cases">
              <h3 className="dashboard-title">DASHBOARD / </h3>
              <h3 className="case-no"> Case 1</h3>
            </div>
          </div>
        </section>
        <section className="notification_btn">
          <div>
            <button className="btn-icon" onClick={opendrawer}>
              <img src={bookmark} alt="bookmark" />
            </button>
            {/* HELP BUTTON DATA--------------------------------------------------------------------------------- */}
            {isOpen && <DrawerInfo />}
          </div>
          <div className="searchbar-box">
            <img src={fridaySearch} alt="star" className="searchbar-logo" />
            <input
              type="text"
              className="search-bar-NC"
              onKeyUp={(e) => {
                searchRef.current = e.target.value;
                if (e.code === 'Enter') {
                  setNodes((prev) => [
                    ...prev,
                    {
                      id: e.target.value,
                      type: 'custom',
                      data: { label: e.target.value },
                      position: { x: 250, y: 0 },
                    },
                  ]);
                  setSearch('');
                }
              }}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search Keywords, TOR, URL, etc..."
              value={search}
            />
          </div>
          {/* <button className="activity-icon btn-icon" onClick={activity}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="30px"
              width="30px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 8v5h5v-2h-3V8z"></path>
              <path d="M21.292 8.497a8.957 8.957 0 0 0-1.928-2.862 9.004 9.004 0 0 0-4.55-2.452 9.09 9.09 0 0 0-3.626 0 8.965 8.965 0 0 0-4.552 2.453 9.048 9.048 0 0 0-1.928 2.86A8.963 8.963 0 0 0 4 12l.001.025H2L5 16l3-3.975H6.001L6 12a6.957 6.957 0 0 1 1.195-3.913 7.066 7.066 0 0 1 1.891-1.892 7.034 7.034 0 0 1 2.503-1.054 7.003 7.003 0 0 1 8.269 5.445 7.117 7.117 0 0 1 0 2.824 6.936 6.936 0 0 1-1.054 2.503c-.25.371-.537.72-.854 1.036a7.058 7.058 0 0 1-2.225 1.501 6.98 6.98 0 0 1-1.313.408 7.117 7.117 0 0 1-2.823 0 6.957 6.957 0 0 1-2.501-1.053 7.066 7.066 0 0 1-1.037-.855l-1.414 1.414A8.985 8.985 0 0 0 13 21a9.05 9.05 0 0 0 3.503-.707 9.009 9.009 0 0 0 3.959-3.26A8.968 8.968 0 0 0 22 12a8.928 8.928 0 0 0-.708-3.503z"></path>
            </svg>
          </button> */}
          {/* {isactiv && (
            <div className="active">
              <div className="active-data">
                <article className='history'>
                  <h2>Revision History</h2>
                  <p>
                    <BiBuildings />
                    You have a bug that needs to......
                  </p>
                  <p>
                    <BiBuildings />
                    You have bug that needs to.......
                  </p>
                  <p>
                    <BiBuildings />
                    Welcome to friday intel
                  </p>
                </article>

                <article className='activity'>
                  <h2>Activites</h2>
                  <p> <BiBuildings />Edited the details of project X</p>
                  <p><BiBuildings />Changed the status of project Y </p>
                  <p><BiBuildings />Submitted a bug</p>
                  <p><BiBuildings />Modified A data in page x</p>
                  <p><BiBuildings />Deleted a page in project X</p>
                  <h4 className="delete-activity-btn">
                    <span className="noti-icon">
                      <AiOutlineDelete />
                    </span>
                    Delete activity
                  </h4>
                </article>
              </div>
              <div className="tri"></div>
            </div>
          )} */}
          <div>
            <button className="btn-icon" onClick={themeChange}>
              <img src={sun} alt="sun" />
            </button>
          </div>
          <div>
            <button className="btn-icon" onClick={notification}>
              <img src={bell} alt="bell" />
            </button>
            {/* NOTIFICATION BUTTON DATA---------------------------------------------------------------- */}
            {isshow && (
              <span className="noti">
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
                          fill-rule="evenodd"
                          clip-rule="evenodd"
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
                          fill-rule="evenodd"
                          clip-rule="evenodd"
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
                          fill-rule="evenodd"
                          clip-rule="evenodd"
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
          <div
            onClick={() => navigate(ROUTES.member)}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <button className="btn-icon member-icon hover-member">
              <img src={user} alt="user" />
            </button>
          </div>
        </section>
      </nav>
      {/* PROFILE HOVER ICON-------------------------------------------------------------------- */}
      {isHovering && (
        <span className="pro">
          <div className="pro-data">
            <h2>UNIT CHARLIE</h2>

            <p>
              <span className="pro-icon">
                <AiOutlineMail />
              </span>{' '}
              jhon.doe@fridayintek.io &nbsp; &nbsp;
              <span>
                {' '}
                <FiEdit />
              </span>
            </p>
            <p>
              {' '}
              <span className="pro-icon">
                <svg
                  width="24"
                  height="27"
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.5 13.3332C23.5 20.1572 18.3214 25.6332 12 25.6332C5.67863 25.6332 0.5 20.1572 0.5 13.3332C0.5 6.50921 5.67863 1.0332 12 1.0332C18.3214 1.0332 23.5 6.50921 23.5 13.3332Z"
                    fill="var(--primary-color)"
                    fill-opacity="0.7"
                    stroke="var(--primary-color)"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="11.5"
                    fill="white"
                    stroke="var(--primary-color)"
                  />
                  <path
                    d="M17.0688 12.2668C17.0688 14.9178 14.9197 17.0668 12.2688 17.0668C9.61777 17.0668 7.46875 14.9178 7.46875 12.2668C7.46875 9.61583 9.61777 7.4668 12.2688 7.4668C14.9197 7.4668 17.0688 9.61583 17.0688 12.2668Z"
                    fill="var(--primary-color)"
                    fill-opacity="0.1"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.2672 9.8667C12.2672 9.8667 13.2613 9.8667 13.9642 10.5696C13.9642 10.5696 14.6672 11.2726 14.6672 12.2667C14.6672 12.2667 14.6672 13.2608 13.9642 13.9638C13.9642 13.9638 13.2613 14.6667 12.2672 14.6667C12.2672 14.6667 11.2731 14.6667 10.5701 13.9638C10.5701 13.9638 9.86719 13.2608 9.86719 12.2667C9.86719 12.2667 9.86719 11.2726 10.5701 10.5696C10.5701 10.5696 11.2731 9.8667 12.2672 9.8667ZM12.2672 10.6667C12.2672 10.6667 11.6044 10.6667 11.1358 11.1353C11.1358 11.1353 10.6672 11.604 10.6672 12.2667C10.6672 12.2667 10.6672 12.9294 11.1358 13.3981C11.1358 13.3981 11.6044 13.8667 12.2672 13.8667C12.2672 13.8667 12.9299 13.8667 13.3986 13.3981C13.3986 13.3981 13.8672 12.9294 13.8672 12.2667C13.8672 12.2667 13.8672 11.604 13.3986 11.1353C13.3986 11.1353 12.9299 10.6667 12.2672 10.6667Z"
                    fill="#1C1C1C"
                  />
                  <path
                    d="M14.6673 12.2665V10.2665C14.6673 10.0456 14.4882 9.86651 14.2673 9.86651C14.0464 9.86651 13.8673 10.0456 13.8673 10.2665V12.2665C13.8673 13.2724 14.2526 13.8921 14.2526 13.8921C14.7341 14.6665 15.6673 14.6665 15.6673 14.6665C16.6005 14.6665 17.082 13.8921 17.082 13.8921C17.4673 13.2724 17.4673 12.2665 17.4673 12.2665C17.4668 10.4787 16.3672 9.0691 16.3672 9.0691C15.2675 7.65954 13.5336 7.22418 13.5336 7.22418C11.7996 6.78883 10.1646 7.51174 10.1646 7.51174C8.52947 8.23466 7.6846 9.81018 7.6846 9.81018C6.83972 11.3857 7.14228 13.1477 7.14228 13.1477C7.44484 14.9097 8.76691 16.1131 8.76691 16.1131C10.089 17.3165 11.8716 17.4526 11.8716 17.4526C13.6539 17.5886 15.1432 16.6 15.1432 16.6L15.1435 16.5998C15.2552 16.5256 15.3223 16.4005 15.3223 16.2665L15.3223 16.2637C15.3217 16.1859 15.2985 16.11 15.2555 16.0453C15.1814 15.9336 15.0563 15.8665 14.9223 15.8665L14.9194 15.8665C14.8417 15.8671 14.7658 15.8903 14.701 15.9333C13.4408 16.77 11.9324 16.6549 11.9324 16.6549C10.4241 16.5398 9.30543 15.5215 9.30543 15.5215C8.18675 14.5032 7.93074 13.0123 7.93074 13.0123C7.67473 11.5214 8.38962 10.1883 8.38962 10.1883C9.10452 8.85512 10.488 8.24342 10.488 8.24342C11.8716 7.63172 13.3388 8.0001 13.3388 8.0001C14.8059 8.36848 15.7364 9.56118 15.7364 9.56118C16.6669 10.7539 16.6673 12.2665 16.6673 12.2665C16.6673 13.044 16.4026 13.4697 16.4026 13.4697C16.1558 13.8665 15.6673 13.8665 15.6673 13.8665C15.1787 13.8665 14.932 13.4697 14.932 13.4697C14.6673 13.044 14.6673 12.2665 14.6673 12.2665Z"
                    fill="#1C1C1C"
                  />
                </svg>
              </span>
              Kangaroo agency
            </p>
            <hr />
            <p>
              {' '}
              <span className="pro-icon">
                <BiPhoneCall />
              </span>{' '}
              &nbsp; +919999999999
            </p>
            <button className="member-btn">Membership info</button>
            <p className="logout-btn">
              <span className="pro-icon">
                <AiOutlineLogout /> log out
              </span>
            </p>
          </div>
          <div className="pro-triangle"></div>
        </span>
      )}

      <div className="container">
        <div className="sideNavSection">
          <SideNav
            setNodeInfo={setNodeInfo}
            nodeInfo={nodeInfo}
            searchRef={searchRef.current}
          />
          {nodeInfo.list.length ? (
            <NodeList
              searchRef={searchRef.current}
              nodes={nodes}
              nodeList={nodeInfo}
              setNodes={setNodes}
              setEdges={setEdges}
              isChecked={isChecked}
              setIsChecked={setIsChecked}
            />
          ) : null}
        </div>
        <div className="canvasSection">
          <CanvasArea
            nodes={nodes}
            edges={edges}
            onInit={onInit}
            onConnect={onConnect}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
          />
        </div>
        <div className="toolSection-container">
          <div className="toolSection">
            <Tool
              onLayout={onLayout}
              canvasFunc={canvasFunc}
              toPng={toPng}
              nodes={nodes}
            />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default NewCase;
