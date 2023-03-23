import React from 'react';
import { AiFillPlusSquare } from 'react-icons/ai';
import { ImCheckboxChecked } from 'react-icons/im';
import { Menu } from 'react-pro-sidebar';
import { MarkerType } from 'reactflow';

import '../css/nodeList.css';

const NodeList = (props) => {
  const {
    searchRef,
    nodes,
    nodeList,
    setNodes,
    setEdges,
    setIsChecked,
    isChecked,
  } = props;

  const setNodeInCanvas = (data) => {
    const targetId = data;
    const isPrimaryNode = nodes.find((node) => node.data.label === data);
    if (isPrimaryNode?.id !== '1') {
      setIsChecked((prev) => ({ ...prev, [data]: !isChecked[data] }));

      setNodes((prev) =>
        isChecked[data]
          ? [...prev.filter((info) => info.data.label !== data)]
          : [
              ...prev,
              {
                id: data ? data : 'no record',
                type: 'custom',
                data: { label: data ? data : undefined },
                position: {
                  x: Math.floor(Math.random() * 400),
                  y: Math.floor(Math.random() * 400),
                },
              },
            ],
      );

      setEdges((prev) =>
        isChecked[data]
          ? [...prev.filter((info) => info.target !== targetId)]
          : [
              ...prev,
              {
                source: searchRef,
                target: data ? data : 'no record',
                type: 'floating',
                markerEnd: { type: MarkerType.Arrow },
              },
            ],
      );
    }
  };

  return (
    <Menu>
      {nodeList.list.map((node, index) => {
        return (
          <>
            <li className="listItem" key={index}>
              <ul className="listName">{node?.urls || '-'}</ul>
              {isChecked[node?.urls] ? (
                <ImCheckboxChecked
                  size={'25px'}
                  onClick={() => setNodeInCanvas(node?.urls)}
                />
              ) : (
                <AiFillPlusSquare
                  size={'25px'}
                  onClick={() => setNodeInCanvas(node?.urls)}
                />
              )}
            </li>
            <br />
          </>
        );
      })}
    </Menu>
  );
};

export default NodeList;
