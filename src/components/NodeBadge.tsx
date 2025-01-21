import React from "react";
import clsx from "clsx";

import { BADGE_ICONS } from "@/constants";

interface NodeBadgeProps {
  type: string;
}

export function NodeBadge({ type }: NodeBadgeProps) {
  const icon = BADGE_ICONS[type];

  return (
    <div
      className={clsx(
        "absolute right-[-4px] top-[-4px] flex h-5 w-5 items-center justify-center rounded-full",
        type === "users" && "bg-purple-500 text-white",
        type === "protected" && "bg-red-500 text-white",
      )}
    >
      {icon && <div className="h-3 w-3">{icon}</div>}
    </div>
  );
}
