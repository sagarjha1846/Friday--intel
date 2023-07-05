import React, { useState } from 'react';
import ReactFlow, { MiniMap, Background } from 'reactflow';

import 'reactflow/dist/style.css';
import '../css/canvas.css';
import { useEffect } from 'react';

const minimapStyle = { height: 120 };

const OverviewFlow = (props) => {
  const {
    nodes,
    edges,
    onNodesChange,
    onEdgesChange,
    onConnect,
    onInit,
    nodeInfoList,
    setNodeInfo,
  } = props;

  const [nodeClicked, setNodeClicked] = useState('');
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  useEffect(() => {
    const node =
      nodeInfoList && nodeInfoList.filter((el) => el.query === nodeClicked);
    if (node?.length === 1) {
      setNodeInfo(node[0]);
      setIsPopUpOpen(true);
    } else {
      setIsPopUpOpen(false);
    }
  }, [nodeClicked, nodeInfoList, setNodeInfo]);

  const handleNodeClick = (e) => {
    const clickedNodeId = e.target.attributes.getNamedItem('data-id').value;
    setNodeClicked(clickedNodeId);
    setIsPopUpOpen(true);
  };
  return (
    <ReactFlow
      snapToGrid={true}
      snapGrid={[16, 16]}
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onInit={onInit}
      onConnect={onConnect}
      fitView
      attributionPosition="top-right"
      onClick={() =>
        handleNodeClick()
      }

    >
      <MiniMap style={minimapStyle} zoomable pannable />
      <Background color="var(--primary-color-2)" gap={16} />
      {isPopUpOpen && (
        <div>
          {/* Content of the pop-up */}
          <div>
            <h1>huhdhdeidjeidjoejdoej</h1>
            {/* Additional information */}
            {/* ... */}
          </div>
        </div>
      )}
    </ReactFlow>
  );
};

export default OverviewFlow;
