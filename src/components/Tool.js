import React from "react";
import {
  AiOutlineCamera,
  AiOutlineZoomIn,
  AiOutlineZoomOut,
} from "react-icons/ai";
import { BiNetworkChart, BiTargetLock } from "react-icons/bi";
import { GrNetwork } from "react-icons/gr";
import { MdOutlineAccountTree } from "react-icons/md";

import "../css/tool.css";

const Tool = (props) => {
  const { onLayout, canvasFunc } = props;
  return (
    <div className="navigation">
      <nav className="menu">
        <button className="btn" onClick={() => canvasFunc?.zoomIn()}>
          <AiOutlineZoomIn />
        </button>
        <button className="btn" onClick={() => canvasFunc?.zoomOut()}>
          <AiOutlineZoomOut />
        </button>
        <button className="btn" onClick={() => canvasFunc?.fitView()}>
          <BiTargetLock />
        </button>
        <button className="btn">
          <BiNetworkChart />
        </button>
        <button className="btn" onClick={() => onLayout("LR")}>
          <MdOutlineAccountTree />
        </button>
        <button className="btn" onClick={() => onLayout("TB")}>
          <GrNetwork />
        </button>
        <button className="btn">
          <AiOutlineCamera />
        </button>
      </nav>
    </div>
  );
};

export default Tool;
