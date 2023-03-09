
import React from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

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



const Tool = (props) => {
  const { onLayout, canvasFunc } = props;
  const handle = useFullScreenHandle();

  
  return (
    <div className="navigation">
      <nav className="menu">

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

<img src={camera} alt="Screenshot" className="btn" />

      </nav>
    </div>
  );
  
};

export default Tool;
