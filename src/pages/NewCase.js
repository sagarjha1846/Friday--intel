import React, { useCallback, useRef, useState } from 'react';
import { addEdge, useEdgesState, useNodesState } from 'reactflow';
import { toPng } from 'html-to-image';
import Footer from '../components/Footer-newcase';
import CanvasArea from '../components/CanvasArea';
import NodeList from '../components/NodeList';
import SideNav from '../components/Sidebar';
import Tool from '../components/Tool';

import '../css/newcase.css';
import { getLayoutElements } from '../utils';
import ROUTES from '../constant/routesConstant';
import { useNavigate } from 'react-router-dom';
// import { Navigate } from "react-router-dom";
// import Footer from "../components/Footer";
import star from '../images/svg/star.svg';
import bookmark from '../images/svg/questMark.svg';
import fridaySearch from '../images/svg/fridayLogo.svg';
import sun from '../images/svg/sun.svg';
import bell from '../images/svg/bell.svg';
import user from '../images/svg/userSolid.svg';
import DrawerInfo from '../components/DrawerInfo';

const NewCase = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isshow, setIsshow] = useState(false);
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
    [setEdges]
  );

  const onInit = (reactFlowInstance) => setCanvasFunc(reactFlowInstance);

  const onLayout = useCallback(
    (direction) => {
      const { nodes: layoutNodes, edges: layoutEdges } = getLayoutElements(
        nodes,
        edges,
        direction
      );

      setNodes([...layoutNodes]);
      setEdges([...layoutEdges]);
    },
    [nodes, edges, setNodes, setEdges]
  );

  const opendrawer = () => {
    setIsOpen(!isOpen);
  };

  const notification = () => {
    setIsshow(!isshow);
  };
  
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
            {isOpen && <DrawerInfo />}
          </div>
          <div className="searchbar-box">
            <img src={fridaySearch} alt="star" />
            <input
              type="text"
              className="search-bar-NC"
              onKeyUp={(e) => {
                searchRef.current = e.target.value;
                if (e.code === 'Enter') {
                  const targetId = `${Math.floor(Math.random() * 400)}`;
                  setNodes((prev) => [
                    ...prev,
                    {
                      id: prev.length <= 0 ? '1' : targetId,
                      type: 'custom',
                      data: { label: e.target.value },
                      position: { x: 250, y: 0 },
                    },
                  ]);
                  setEdges((prev) => [...prev, { source: '1' }]);
                  setSearch('');
                }
              }}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search Keywords, TOR, URL, etc..."
              value={search}
            />
          </div>
          <div>
            <button className="btn-icon">
              <img src={sun} alt="sun" />
            </button>
          </div>
          <div>
            <button className="btn-icon" onClick={notification}>
              <img src={bell} alt="bell" />
            </button>
            {isshow && (
              <span className="noti">
                <h4>notification</h4>
              </span>
            )}
          </div>
          <div onClick={() => navigate(ROUTES.member)}>
            <button className="btn-icon member-icon">
              <img src={user} alt="user" />
            </button>
          </div>
        </section>
      </nav>

      <div className="container">
        <div className="sideNavSection">
          <SideNav setNodeInfo={setNodeInfo} searchRef={searchRef.current} />
          {nodeInfo.list.length ? (
            <NodeList
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
