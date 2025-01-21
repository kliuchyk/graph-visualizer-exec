import { Node } from "@xyflow/react";

export enum NodeIcon {
  server = "server",
  mask = "mask",
}

export enum BadgeIcon {
  protected = "protected",
  users = "users",
}

export type NodeVariant = "primary" | "danger";

export type CustomGraphNode = Node<
  {
    label: string;
    icon: NodeIcon;
    variant: NodeVariant;
    badge?: BadgeIcon;
    info?: string;
  },
  "graphNode"
>;
