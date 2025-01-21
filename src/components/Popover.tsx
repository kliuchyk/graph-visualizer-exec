import React, { ReactNode } from "react";
import { X } from "lucide-react";

interface PopoverProps {
  children: ReactNode;
  onClose: () => void;
}

export function Popover({ children, onClose }: PopoverProps) {
  return (
    <div className="absolute">
      <div className="relative top-[70px] z-50 w-40 rounded-md border border-gray-300 bg-white p-2 shadow-lg">
        <button
          onClick={onClose}
          className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full text-gray-400 hover:text-gray-600 focus:outline-none"
          aria-label="Close"
        >
          <X className="h-3 w-3" />
        </button>
        {children}
      </div>
    </div>
  );
}
