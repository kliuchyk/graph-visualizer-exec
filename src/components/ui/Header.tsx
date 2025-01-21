import React from "react";
import clsx from "clsx";

interface HeaderProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  className?: string;
  children: React.ReactNode;
}

export function Header({
  as: Component = "h1",
  fontSize = "text-lg",
  fontWeight = "font-bold",
  color = "text-black",
  className,
  children,
  ...props
}: HeaderProps) {
  return (
    <Component
      className={clsx(fontSize, fontWeight, color, className)}
      {...props}
    >
      {children}
    </Component>
  );
}
