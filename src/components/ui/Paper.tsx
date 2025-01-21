import React from "react";
import clsx from "clsx";

interface PaperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function Paper({ children, className, ...rest }: PaperProps) {
  return (
    <div
      className={clsx(
        "rounded-md border border-gray-200 bg-white p-6 shadow-md",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
