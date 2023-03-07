<<<<<<< HEAD
// import React from "react";
import React from 'react';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
// import React, { createRef, useState , usecallback} from 'react'
// import { useScreenshot } from 'use-react-screenshot'
=======
import React from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
>>>>>>> 2055c8afe05647a061990d19201e4834aa9b9543
import Zoomin from "../images/tools svg/Zoomin.svg"
import Zoomout from "../images/tools svg/Zoomout.svg"
import TargetIcon from "../images/tools svg/TargetIcon.svg"
import Fullscreen from "../images/tools svg/Fullscreen.svg"
import LayoutIcon from "../images/tools svg/LayoutIcon.svg"
import TreeIcon from "../images/tools svg/TreeIcon.svg"
import SnapshotIcon from "../images/tools svg/SnapshotIcon.svg"
import camera from "../images/tools svg/camera.svg"
import CanvasArea from "../components/CanvasArea";

import "../css/tool.css";
// import OverviewFlow from "./CanvasArea";



const Tool = (props) => {
  const { onLayout, canvasFunc } = props;
  const handle = useFullScreenHandle();
<<<<<<< HEAD
  
  

  return (
    <div className="navigation">
      <nav className="menu">
=======
  return (
    <div className="navigation">
      <nav className="menu">
      <img src={Fullscreen} alt="Fullscreen" className="btn" onClick={handle.enter}/>
>>>>>>> 2055c8afe05647a061990d19201e4834aa9b9543

      <img src={Fullscreen} alt="Fullscreen" className="btn" onClick={handle.enter} />
      <FullScreen
        handle={handle}>
          
              </FullScreen>
  

 <img  src = {Zoomin} alt ="Zoomin"className="btn" onClick={() => canvasFunc?.zoomIn()} />

<img src = {Zoomout} alt="Zoomout" className="btn" onClick={() => canvasFunc?.zoomOut()} />

<img src={TargetIcon} alt ="Targeticon" className="btn" onClick={() => canvasFunc?.fitView()} />

<img src={LayoutIcon}  alt ="Icon" className="btn" onClick={() => canvasFunc?.fitView()} />

<img src ={TreeIcon} alt ="TreeIcon" className="btn" onClick={() => onLayout("LR")} />

<img src={SnapshotIcon}  alt="SnapshotIcon" className="btn" onClick={() => onLayout("TB")} />

<<<<<<< HEAD
<img src={camera} alt="Screenshot" className="btn" />


=======
<img src={camera} alt="Screenshot" className="btn"  />
<FullScreen handle={handle}>
        <CanvasArea/>
      </FullScreen>
>>>>>>> 2055c8afe05647a061990d19201e4834aa9b9543
      </nav>
    </div>
  );
};

export default Tool;
