"use client";

import React, { useCallback, useMemo } from "react";

import {
  OnConnect,
  ReactFlow,
  addEdge,
  useEdgesState,
  useNodesState,
} from "@xyflow/react";

import { edgesList, nodesList, proOptions } from "./constants";
import { containerSx, reactFlowContainerSx } from "./styles";
import { GraphNode } from "../../components/GraphNode";

export function ReactFlowContainer() {
  const [nodes, , onNodesChange] = useNodesState(nodesList);
  const [edges, setEdges, onEdgesChange] = useEdgesState(edgesList);

  const onConnect: OnConnect = useCallback(
    (connection) => setEdges((edges) => addEdge(connection, edges)),
    [setEdges],
  );

  const nodeTypes = useMemo(() => ({ graphNode: GraphNode }), []);

  return (
    <div style={containerSx}>
      <ReactFlow
        nodes={nodes}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        style={reactFlowContainerSx}
        proOptions={proOptions}
      />
    </div>
  );
}
