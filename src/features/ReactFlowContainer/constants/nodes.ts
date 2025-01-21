import { BadgeIcon, CustomGraphNode, NodeIcon } from "@/types";

export const nodesList: CustomGraphNode[] = [
  {
    id: "1",
    type: "graphNode",
    position: { x: 100, y: 100 },
    data: {
      label: "Loremipsumm",
      icon: NodeIcon.mask,
      variant: "danger",
      badge: BadgeIcon.users,
    },
  },
  {
    id: "2",
    type: "graphNode",
    position: { x: 250, y: 100 },
    data: {
      label: "Loremipsu",
      icon: NodeIcon.server,
      variant: "primary",
    },
  },
  {
    id: "3",
    type: "graphNode",
    position: { x: 400, y: 100 },
    data: {
      label: "Loremipsu",
      icon: NodeIcon.server,
      variant: "primary",
    },
  },
  {
    id: "4",
    type: "graphNode",
    position: { x: 700, y: 25 },
    data: {
      label: "Child Node A",
      icon: NodeIcon.server,
      variant: "primary",
      badge: BadgeIcon.protected,
      info: "192.162.1.1",
    },
  },
  {
    id: "5",
    type: "graphNode",
    position: { x: 700, y: 175 },
    data: {
      label: "Child Node B",
      icon: NodeIcon.server,
      variant: "primary",
      badge: BadgeIcon.protected,
      info: "192.162.1.2",
    },
  },
];
