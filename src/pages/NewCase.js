/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { createRef, useCallback, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

import { ReactFlowProvider, addEdge } from 'reactflow';
import { toPng } from 'html-to-image';
import Footer from '../components/Footer-newcase';
import CanvasArea from '../components/CanvasArea';
import NodeList from '../components/NodeList';
import SideNav from '../components/Sidebar';
import Tool from '../components/Tool';
import '../css/newcase.css';
import { getLayoutElements } from '../utils';
import { useParams } from 'react-router-dom';
import { MagnifyingGlass } from 'react-loader-spinner';
import { createFileName, useScreenshot } from 'use-react-screenshot';
import Ransomware from './Ransomware';
import PopUp from '../components/PopUp';
import Profile from '../components/Profile';
import { httpCall } from '../axios/httpService';

const NewCase = ({
  setEdges,
  setNodes,
  setCanvasFunc,
  nodes,
  edges,
  setActiveMenu,
  nodeInfo,
  ransomeData,
  activeMenu,
  isChecked,
  setIsChecked,
  isLoading,
  setNodeInfo,
  nodeInfoList,
  onNodesChange,
  onEdgesChange,
  canvasFunc,
  mode,
  activeButton,
  setCaseName,
}) => {
  const ref = createRef(null);
  const [_, takeScreenshot] = useScreenshot({
    type: 'image/jpeg',
    quality: 1.0,
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState(1);
  let { id } = useParams();

  useEffect(() => {
    if (id) {
      httpCall(`loadcase.php/?caseid=${id}`, 'GET', {}, {})
        .then((res) => {
          setCaseName(res[0].casename);
          setNodes(JSON.parse(res[0].data).nodes);
          setEdges(JSON.parse(res[0].data).edges);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [id]);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };
  const download = (image, { name = 'img', extension = 'jpg' } = {}) => {
    const a = document.createElement('a');
    a.href = image;
    a.download = createFileName(extension, name);
    a.click();
  };
  const getImage = () => takeScreenshot(ref.current).then(download);

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
    [JSON.stringify(nodes)],
  );
  const handleFullScreen = () => {
    if (ref.current) {
      if (ref.current.requestFullscreen) {
        ref.current.requestFullscreen();
      } else if (ref.current.webkitRequestFullscreen) {
        ref.current.webkitRequestFullscreen();
      } else if (ref.current.msRequestFullscreen) {
        ref.current.msRequestFullscreen();
      }
    }
  };

  const saveNode = async () => {
    if (nodes.length > 0 && edges.length > 0) {
      const data = {
        data: {
          edges,
          nodes,
        },
        caseid: id,
      };
      const result = await httpCall('savecase.php', 'POST', data, {});
      return result;
    } else {
      const error = 'No node is present in the canvas to be saved!';
      throw error;
    }
  };

  useEffect(() => {
    saveNode()
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
  }, [nodes, edges]);

  return (
    <>
      <Helmet>
        <title>FridayIntel-NewCase</title>
        <link rel="icon" type="image/png" href="favicon.ico" sizes="16x16" />
      </Helmet>

      {/* PROFILE HOVER ICON-------------------------------------------------------------------- */}
      {activeButton === 'openprofile' && <Profile />}
      {activeTab === 1 && (
        <div className="container">
          <div className="flex">
            <div className="sideNavSection">
              <SideNav
                setActiveMenu={setActiveMenu}
                nodeInfo={nodeInfo}
                activeMenu={activeMenu}
                mode={mode}
              />
            </div>
            <div className="sideNavSections">
              {nodeInfo && activeMenu !== '' ? (
                <NodeList
                  activeMenu={activeMenu}
                  nodes={nodes}
                  nodeList={nodeInfo}
                  setNodes={setNodes}
                  setEdges={setEdges}
                  isChecked={isChecked}
                  setIsChecked={setIsChecked}
                />
              ) : null}
            </div>
          </div>

          <div className="canvasSection" ref={ref}>
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
              <ReactFlowProvider>
                <CanvasArea
                  setNodeInfo={setNodeInfo}
                  nodeInfoList={nodeInfoList}
                  searchTerm={searchTerm}
                  nodes={nodes}
                  edges={edges}
                  onInit={onInit}
                  onConnect={onConnect}
                  onNodesChange={onNodesChange}
                  onEdgesChange={onEdgesChange}
                />
              </ReactFlowProvider>
            )}
          </div>
          <PopUp />

          <div className="toolSection-container">
            <div className="toolSection">
              <Tool
                zoomAction={handleFullScreen}
                getImage={getImage}
                onLayout={onLayout}
                canvasFunc={canvasFunc}
                toPng={toPng}
                nodes={nodes}
              />
            </div>
          </div>
        </div>
      )}
      {activeTab === 2 && <Ransomware ransomeData={ransomeData} />}

      <Footer
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        activeTab={activeTab}
        handleTabClick={handleTabClick}
      />
    </>
  );
};

export default NewCase;
