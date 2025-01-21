import { ReactNode } from "react";

import { Server } from "lucide-react";
import { VenetianMask } from "lucide-react";
import { ShieldX } from "lucide-react";
import { Users } from "lucide-react";

export const NODE_ICONS: Record<string, ReactNode> = {
  server: <Server />,
  mask: <VenetianMask />,
};

export const BADGE_ICONS: Record<string, ReactNode> = {
  protected: <ShieldX size={12} />,
  users: <Users size={12} />,
};
