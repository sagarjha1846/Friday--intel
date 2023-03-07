// import React, { useCallback, useState } from "react";
// import { addEdge, useEdgesState, useNodesState } from "reactflow";

// import CanvasArea from "../components/CanvasArea";
// // import Footer from "../components/Footer";
// import NodeList from "../components/NodeList";
// import SideNav from "../components/Sidebar";
// import Tool from "../components/Tool";

// import "../css/newcase.css";

// import bookmark from "../images/bookmark.svg";
// import bookmarkIcon from "../images/svg/bookmarkIcon.svg";
// import notificationIcon from "../images/svg/notification.svg";
// import searchLogo from "../images/svg/search-logo.svg";
// import themeIcon from "../images/svg/theme.svg";
// import userIcon from "../images/svg/user.svg";
// import { getLayoutElements } from "../utils";

// const NewCase = () => {
//   const [nodeInfo, setNodeInfo] = useState({ list: [], name: "" });
//   const [nodes, setNodes, onNodesChange] = useNodesState([]);
//   const [edges, setEdges, onEdgesChange] = useEdgesState([]);
//   const [canvasFunc, setCanvasFunc] = useState();
//   const [isChecked, setIsChecked] = useState({});

//   const onConnect = useCallback(
//     (params) => setEdges((eds) => addEdge(params, eds)),
//     [setEdges]
//   );

//   const onInit = (reactFlowInstance) => setCanvasFunc(reactFlowInstance);

//   const onLayout = useCallback(
//     (direction) => {
//       const { nodes: layoutNodes, edges: layoutEdges } = getLayoutElements(
//         nodes,
//         edges,
//         direction
//       );

//       setNodes([...layoutNodes]);
//       setEdges([...layoutEdges]);
//     },
//     [nodes, edges, setNodes, setEdges]
//   );

//   return (
//     <>
//       <nav className="nav_bar">
//         <section className="logo_box">
//           <div className="case-dashboard">
//             <img src={bookmark} className="logo" alt="logo" />
//             <span className="dashboard-title">Dashboard / </span>
//             <span className="case-no">Case 1</span>
//           </div>
//         </section>
//         <section className="notification_btn">
//           <div>
//             <img src={bookmarkIcon} alt="bookmark" />
//           </div>
//           <div className="searchbar-box">
//             <img
//               className="searchbar-logo"
//               src={searchLogo}
//               alt="search-logo"
//             />

//             <input
//               type="search"
//               className="search-bar"
//               onBlur={(e) => {
//                 const targetId = `${Math.floor(Math.random() * 400)}`;
//                 setNodes((prev) => [
//                   ...prev,
//                   {
//                     id: prev.length <= 0 ? "1" : targetId,
//                     type: "custom",
//                     data: { label: e.target.value },
//                     position: { x: 250, y: 0 },
//                   },
//                 ]);
//                 setEdges((prev) => [
//                   ...prev,
//                   { source: "1", target: targetId },
//                 ]);
//               }}
//               placeholder="Type Something|"
//             />
//           </div>
//           <div>
//             <img src={themeIcon}  alt="theme icon" />
//           </div>
//           <div>
//             <img src={notificationIcon} alt="notification icon" />
//           </div>
//           <div>
//             <img src={userIcon} alt="user icon" />
//           </div>
//         </section>
//       </nav>

//       <div className="container">
//         <div className="sideNavSection">
//           <SideNav setNodeInfo={setNodeInfo} />
//           {nodeInfo.list.length ? (
//             <NodeList
//               nodes={nodes}
//               nodeList={nodeInfo}
//               setNodes={setNodes}
//               setEdges={setEdges}
//               isChecked={isChecked}
//               setIsChecked={setIsChecked}
//             />
//           ) : null}
//         </div>
//         <div className="canvasSection">
//           <CanvasArea
//             nodes={nodes}
//             edges={edges}
//             onInit={onInit}
//             onConnect={onConnect}
//             onNodesChange={onNodesChange}
//             onEdgesChange={onEdgesChange}
//           />
//         </div>
//         <div className="toolSection">
//           <Tool onLayout={onLayout} canvasFunc={canvasFunc} />
//         </div>
//       </div>
//       {/* <Footer/> */}
//     </>
//   );
// };

// export default NewCase;


import React, { useCallback, useRef, useState } from "react";
import { addEdge, useEdgesState, useNodesState } from "reactflow";
import { toPng } from "html-to-image";



import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'

import CanvasArea from "../components/CanvasArea";
import NodeList from "../components/NodeList";
import SideNav from "../components/Sidebar";
import Tool from "../components/Tool";

import "../css/newcase.css";
import "../css/drawer.css";

import bookmark from "../images/bookmark.svg";
import bookmarkIcon from "../images/svg/bookmarkIcon.svg";
import notificationIcon from "../images/svg/notification.svg";
import searchLogo from "../images/svg/search-logo.svg";
import themeIcon from "../images/svg/theme.svg";
import userIcon from "../images/svg/user.svg";
import { getLayoutElements } from "../utils";
// import Footer from "../components/Footer";

const NewCase = () => {

  const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
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
  // state = { drawerOpen: false }
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
        <section className="notification_btn" onClick={toggleDrawer}>
        <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
                className='bla bla bla'
            >
                <div id="Drawer">
                  <h2>Search Guidelines</h2>
                  <hr />
                  <h1>Keyword Search</h1>
                  <p>Friday Intel offers full-text search and retrieves recent darkweb content that includes the search keyword.</p>
                  <p>Just as search engines, put Keybord to search</p>

                  <p>If there are too many results to study, try a more specific keyword search to get more relevant results. To find more specific results, use

the search operator.</p>

<p>Just as search engines, put Keybord to search</p>
<h1>Search Operator</h1>
<p>Search operators are special commands that enable advanced full text</p>
<div className="parent">
<div className="Diff1">
<h4>Operator&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Description</h4>
<hr />
<p>""&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The search results are exact matches to &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;the keywords in""</p>
<hr />
<p>AND&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Search results include both X and Y</p>
<hr />
<p>OR&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Search results include X and Y</p>
<hr />
<p>NOT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Search results include X but exclude &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;results contain Y</p>
<hr />
<p>Sites:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Filtered site search results Support for &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;the darkweb surfaceweh website A site &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; must be a full domain address (perfect &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; match), for example Friday Intel  NOT &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; inurl:xxxxxxxxxxxxx.onion</p>
<hr />
<p>inurl:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Search result in filtered URL Support for &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; darkweb/surface URL URL should be &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; match with specific pattern (Like match) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; e.g.Friday Intel NOT inurl http://xxxxxxxxx.com</p>
</div>
<div className="diff2">
  {/* <h4></h4> */}
  <p></p>
  <p></p>
  <p></p>
  <p> </p>
  <p></p>
  <p></p>
</div>
</div>
<p>The purpose of indicator search is to extract information that is linked to the searched keyword. The keyword or source of the keyword could be used to generate a list of analysis results.

The Monography of Friday Intel button displays a list of indicators that

you can use. To search, click an indicator and enter an exact keyword

for a perfect match.
</p>

                  

                </div>
            </Drawer>

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

      <div className="container" style={{ maxHeight: "550px" }}>
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

