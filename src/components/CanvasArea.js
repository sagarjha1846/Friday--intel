import React from "react";
import ReactFlow, { MiniMap, Background } from "reactflow";

import "reactflow/dist/style.css";
import "../css/canvas.css";

const minimapStyle = { height: 120 };

const OverviewFlow = (props) => {
  const { nodes, edges, onNodesChange, onEdgesChange, onConnect, onInit } =
    props;

    const newNode = [
      {
        id: 'zsjvvfabm5v45fcokhfraqxvuggijhpmaybxr3fhokmm7wdnni6tyhad.onion',
        type: 'custom',
        data: {
          label:
            'zsjvvfabm5v45fcokhfraqxvuggijhpmaybxr3fhokmm7wdnni6tyhad.onion',
        },
        position: {
          x: 238.5,
          y: -124,
        },
        width: 150,
        height: 102,
        selected: false,
        positionAbsolute: {
          x: 238.5,
          y: -124,
        },
        dragging: false,
      },
      {
        id: 'sunny',
        type: 'custom',
        data: {
          label: 'sunny',
        },
        position: {
          x: 74,
          y: -65,
        },
        width: 150,
        height: 42,
        selected: true,
        positionAbsolute: {
          x: 74,
          y: -65,
        },
        dragging: false,
      },
      {
        id: 'http://sunny.island.ac/robots.txt',
        type: 'custom',
        data: {
          label: 'http://sunny.island.ac/robots.txt',
        },
        position: {
          x: 84,
          y: 379,
        },
        width: 150,
        height: 62,
      },
      {
        id: 'http://sunny.island.ac/',
        type: 'custom',
        data: {
          label: 'http://sunny.island.ac/',
        },
        position: {
          x: 296,
          y: 57,
        },
        width: 150,
        height: 42,
      },
      {
        id: 'http://sunny.du.ac/',
        type: 'custom',
        data: {
          label: 'http://sunny.du.ac/',
        },
        position: {
          x: 336,
          y: 174,
        },
        width: 150,
        height: 42,
      },
      {
        id: 'aaa.aaa',
        type: 'custom',
        data: {
          label: 'aaa.aaa',
        },
        position: {
          x: 250,
          y: 0,
        },
        width: 150,
        height: 42,
      },
      {
        id: 'undefined',
        type: 'custom',
        data: {},
        position: {
          x: 148,
          y: 17,
        },
        width: 150,
        height: 22,
      },
      {
        id: 'http://aaa.aaa/',
        type: 'custom',
        data: {
          label: 'http://aaa.aaa/',
        },
        position: {
          x: 133,
          y: 321,
        },
        width: 150,
        height: 42,
      },
      {
        id: 'http://aaa.aaa/robots.txt',
        type: 'custom',
        data: {
          label: 'http://aaa.aaa/robots.txt',
        },
        position: {
          x: 397,
          y: 160,
        },
        width: 150,
        height: 62,
      },
    ];
    const newEdge = [
      {
        source: 'sunny',
        target: 'http://sunny.island.ac/robots.txt',
        type: 'floating',
        markerEnd: {
          type: 'arrow',
        },
      },
      {
        source: 'sunny',
        target: 'http://sunny.island.ac/',
        type: 'floating',
        markerEnd: {
          type: 'arrow',
        },
      },
      {
        source: 'sunny',
        target: 'http://sunny.du.ac/',
        type: 'floating',
        markerEnd: {
          type: 'arrow',
        },
      },

      {
        source: 'sunny',
        target: 'undefined',
        type: 'floating',
        markerEnd: {
          type: 'arrow',
        },
      },
      {
        source: 'aaa.aaa',
        target: 'http://aaa.aaa/',
        type: 'floating',
        markerEnd: {
          type: 'arrow',
        },
      },
      {
        source: 'aaa.aaa',
        target: 'http://aaa.aaa/robots.txt',
        type: 'floating',
        markerEnd: {
          type: 'arrow',
        },
      },
    ];
    console.log(nodes, edges);
    return (
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onInit={onInit}
        onConnect={onConnect}
        fitView
        attributionPosition="top-right">
        <MiniMap style={minimapStyle} zoomable pannable />
        <Background color="#000" gap={16} />
      </ReactFlow>
    );
};

export default OverviewFlow;
