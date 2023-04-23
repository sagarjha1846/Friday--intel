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
import axios from 'axios';
import { MagnifyingGlass } from 'react-loader-spinner';

const NewCase = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isshow, setIsshow] = useState(false);
  const navigate = useNavigate();
  const searchRef = useRef();
  const [nodeInfo, setNodeInfo] = useState({ query: '', data: null });
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [canvasFunc, setCanvasFunc] = useState();
  const [isChecked, setIsChecked] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [activeMenu, setActiveMenu] = useState('');

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

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setActiveMenu('');
    setIsLoading(true);

    axios
      .get(`https://fridayintel.io/api-dev/canvas.php?query=${search}`)

      .then((response) => {
        setNodeInfo({ query: search, data: response?.data });

        setNodes((prev) => [
          ...prev,
          {
            id: search,
            type: 'default',
            data: { label: search },
            position: { x: 250, y: 0 },
          },
        ]);

        setSearch('');
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
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
          <form onSubmit={handleSubmit} className="searchbar-box">
            <img src={fridaySearch} alt="star" />
            <input
              type="text"
              className="search-bar-NC"
              onChange={handleChange}
              placeholder="Search Keywords, TOR, URL, etc..."
              value={search}
            />
          </form>
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
          <SideNav
            setActiveMenu={setActiveMenu}
            nodeInfo={nodeInfo}
            searchRef={searchRef.current}
            activeMenu={activeMenu}
          />
          {nodeInfo && activeMenu !== '' ? (
            <NodeList
              activeMenu={activeMenu}
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
        <div className="canvasSection ">
          {isLoading ? (
            <div className=" w-full h-full grid place-content-center">
              <MagnifyingGlass
                visible={true}
                height="80"
                width="80"
                ariaLabel="MagnifyingGlass-loading"
                wrapperStyle={{}}
                wrapperClass="MagnifyingGlass-wrapper"
                glassColor="#c0efff"
                color="#e15b64"
              />
              <h1 className="p-2 text-4xl">Loading...</h1>
            </div>
          ) : (
            <CanvasArea
              nodes={nodes}
              edges={edges}
              onInit={onInit}
              onConnect={onConnect}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
            />
          )}
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
