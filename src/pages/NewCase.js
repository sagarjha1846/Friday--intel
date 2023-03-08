
import React, { useCallback, useRef, useState } from "react";
import { addEdge, useEdgesState, useNodesState } from "reactflow";
import { toPng } from "html-to-image";

import CanvasArea from "../components/CanvasArea";
import NodeList from "../components/NodeList";
import SideNav from "../components/Sidebar";
import Tool from "../components/Tool";

import "../css/newcase.css";

import bookmark from "../images/bookmark.svg";
import bookmarkIcon from "../images/svg/bookmarkIcon.svg";
import notificationIcon from "../images/svg/notification.svg";
import searchLogo from "../images/svg/search-logo.svg";
import themeIcon from "../images/svg/theme.svg";
import userIcon from "../images/svg/user.svg";
import { getLayoutElements } from "../utils";
// import Footer from "../components/Footer";

const NewCase = () => {
  const searchRef = useRef();
  const [nodeInfo, setNodeInfo] = useState({ list: [], name: "" });
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [canvasFunc, setCanvasFunc] = useState();
  const [isChecked, setIsChecked] = useState({});
  const [search, setSearch] = useState("");

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
 
  return (
    <>
      <nav className="nav_bar">
        <section className="logo_box">
          <div className="case-dashboard">
            <img src={bookmark} className="logo" alt="logo" />
            <div className="dashboard-cases">
            <h3 className="dashboard-title">Dashboard / </h3>
            <h3 className="case-no"> Case 1</h3>
            </div>
          </div>
        </section>
        <section className="notification_btn">
          <div>
            <img src={bookmarkIcon} alt="bookmark" />
          </div>
          <div className="searchbar-box">
            <img
              className="searchbar-logo"
              src={searchLogo}
              alt="search-logo"
            />
            <input
              type="text"
              className="search-bar"
              onKeyUp={(e) => {
                searchRef.current = e.target.value;
                if (e.code === "Enter") {
                  const targetId = `${Math.floor(Math.random() * 400)}`;
                  setNodes((prev) => [
                    ...prev,
                    {
                      id: prev.length <= 0 ? "1" : targetId,
                      type: "custom",
                      data: { label: e.target.value },
                      position: { x: 250, y: 0 },
                    },
                  ]);
                  setEdges((prev) => [...prev, { source: "1" }]);
                  setSearch("");
                }
              }}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Type Something|"
              value={search}
            />
          </div>
          <div>
            <img src={themeIcon} alt="theme icon" />
          </div>
          <div>
            <img src={notificationIcon} alt="notification icon" />
          </div>
          <div>
            <img src={userIcon} alt="user icon" />
          </div>
        </section>
      </nav>

      <div className="container" >
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
        <div className="toolSection">
          <Tool
            onLayout={onLayout}
            canvasFunc={canvasFunc}
            toPng={toPng}
            nodes={nodes}
          />
        </div>
      </div>
      {/* <Footer/> */}
    </>
  );
};

export default NewCase;

