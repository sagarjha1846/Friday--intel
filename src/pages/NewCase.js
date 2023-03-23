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
import { AiOutlineDelete } from 'react-icons/ai';
import { BiBuildings } from 'react-icons/bi';
import { BiPhoneCall } from 'react-icons/bi';
import { FiEdit } from 'react-icons/fi';

const NewCase = () => {
  const { ROUTES } = constants;
  const [mode, setMode] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [isactiv, setIsactiv] = useState(false);
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

  const activity = () => {
    setIsactiv(!isactiv);
  };

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
          <button className="activity-icon btn-icon" onClick={activity}>
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
          </button>
          {isactiv && (
            <div className="active">
              <div className="active-data">
                <article>
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

                <article>
                  <h2>Activites</h2>
                  <p> Edited the details of project X</p>
                  <p>Changed the status of project Y </p>
                  <p>Submitted a bug</p>
                  <h4 className="delete-btn">
                    <span className="noti-icon">
                      <AiOutlineDelete />
                    </span>
                    Delete activity
                  </h4>
                </article>
              </div>
              <div className="tri"></div>
            </div>
          )}
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
                <span className="noti-data">
                  <h2>Notification</h2>
                  <article>
                    <BiBuildings />
                    You have a bug that needs to......
                  </article>
                  <article>
                    <BiBuildings />
                    You have bug that needs to.......
                  </article>
                  <article>Welcome to friday intel</article>
                  <h4 className="delete-btn">
                    <span className="noti-icon">
                      <AiOutlineDelete />
                    </span>
                    Delete Notification
                  </h4>
                </span>
                <div className="shape"></div>
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
              {' '}
              <span className="pro-icon">
                <BiBuildings />
              </span>
              Kangaroo agency
            </p>
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
          <div className="shape2"></div>
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
