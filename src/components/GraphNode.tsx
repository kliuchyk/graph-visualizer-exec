"use client";

import React, { useState } from "react";
import { Handle, NodeProps, Position } from "@xyflow/react";
import clsx from "clsx";

import { NODE_ICONS } from "@/constants";
import { NodeBadge } from "./NodeBadge";
import { Popover } from "./Popover";
import { CustomGraphNode } from "@/types";

export function GraphNode({ data }: NodeProps<CustomGraphNode>) {
  const [isPopoverOpen, setPopoverOpen] = useState(false);

  const togglePopover = () => {
    setPopoverOpen((prev) => !prev);
  };

  const onClose = () => {
    setPopoverOpen(false);
  };

  const { label, variant, badge, icon, info = "" } = data;
  const nodeIcon = NODE_ICONS[icon];

  return (
    <div className="relative flex flex-col items-center">
      <div
        onClick={togglePopover}
        className={clsx(
          "relative flex h-[53px] w-[53px] items-center justify-center rounded-full shadow-md",
          "transition-all hover:shadow-lg",
          variant === "primary" && "bg-blue-100 text-blue-600",
          variant === "danger" && "bg-red-100 text-red-600",
        )}
      >
        <div className="h-6 w-6">{nodeIcon}</div>
        {badge && <NodeBadge type={badge} />}
      </div>

      <span className="mt-2 text-sm font-medium text-gray-500">{label}</span>
      {info && (
        <span className="text-xs font-medium text-gray-400">{info}</span>
      )}

      {isPopoverOpen && (
        <Popover onClose={onClose}>
          <p className="text-sm text-gray-800">{label}</p>
          <p className="text-sm text-gray-800">Info...</p>
        </Popover>
      )}

      <Handle
        type="target"
        position={Position.Left}
        className="absolute -left-2 top-1/2 h-2 w-2 -translate-y-1/2 bg-gray-400"
      />
      <Handle
        type="source"
        position={Position.Right}
        className="absolute -right-2 top-1/2 h-2 w-2 -translate-y-1/2 bg-gray-400"
      />
    </div>
  );
}
