import dagre from "dagre";

const degreeGraph = new dagre.graphlib.Graph();
degreeGraph.setDefaultEdgeLabel(() => ({}));

const nodeWidth = 172;
const nodeHeight = 36;

const getLayoutElements = (nodes, edges, direction = "TB") => {
  const isHorizontal = direction === "LR";
  degreeGraph.setGraph({ rankdir: direction });

  nodes.forEach((node) => {
    degreeGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
  });

  edges.forEach((edge) => {
    degreeGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(degreeGraph);

  nodes.forEach((node) => {
    const nodeWithPosition = degreeGraph.node(node.id);
    node.targetPosition = isHorizontal ? "left" : "top";
    node.sourcePosition = isHorizontal ? "right" : "bottom";

    node.position = {
      x: nodeWithPosition.x - nodeWidth / 2,
      y: nodeWithPosition.y - nodeHeight / 2,
    };

    return node;
  });

  return { nodes, edges };
};

export { getLayoutElements };
