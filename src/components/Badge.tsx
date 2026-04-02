// Auto-generated from Figma SDS — Silicon Design System
// Component: Badge — uses SDS semantic color tokens

import React from "react";

type BadgeColor   = "brand" | "gray" | "error" | "warning" | "success" | "orange-peel";
type BadgeVariant = "subtle" | "outlined" | "solid";
type BadgeSize    = "sm" | "md" | "lg";

interface BadgeProps {
  color?:   BadgeColor;
  variant?: BadgeVariant;
  size?:    BadgeSize;
  dot?:     boolean;
  iconLeft?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const colorMap: Record<BadgeColor, Record<BadgeVariant, string>> = {
  brand: {
    subtle:   "bg-brand-50   text-brand-700",
    outlined: "border border-brand-300 text-brand-700",
    solid:    "bg-brand-600  text-white",
  },
  gray: {
    subtle:   "bg-gray-100   text-gray-700",
    outlined: "border border-gray-300 text-gray-700",
    solid:    "bg-gray-700   text-white",
  },
  error: {
    subtle:   "bg-error-50   text-error-700",
    outlined: "border border-error-300 text-error-700",
    solid:    "bg-error-600  text-white",
  },
  warning: {
    subtle:   "bg-warning-50  text-warning-700",
    outlined: "border border-warning-300 text-warning-700",
    solid:    "bg-warning-600 text-white",
  },
  success: {
    subtle:   "bg-success-50  text-success-700",
    outlined: "border border-success-300 text-success-700",
    solid:    "bg-success-600 text-white",
  },
  "orange-peel": {
    subtle:   "bg-orange-peel-50  text-orange-peel-700",
    outlined: "border border-orange-peel-300 text-orange-peel-700",
    solid:    "bg-orange-peel-500 text-white",
  },
};

const sizeMap: Record<BadgeSize, string> = {
  sm: "px-2   py-0.5 text-xs  rounded-full gap-1",
  md: "px-2.5 py-0.5 text-sm  rounded-full gap-1.5",
  lg: "px-3   py-1   text-sm  rounded-full gap-1.5",
};

export function Badge({
  color   = "brand",
  variant = "subtle",
  size    = "md",
  dot,
  iconLeft,
  children,
  className = "",
}: BadgeProps) {
  return (
    <span
      className={[
        "inline-flex items-center font-medium font-body",
        colorMap[color][variant],
        sizeMap[size],
        className,
      ].join(" ")}
    >
      {dot && (
        <span className="w-1.5 h-1.5 rounded-full bg-current shrink-0" />
      )}
      {iconLeft && <span className="shrink-0">{iconLeft}</span>}
      {children}
    </span>
  );
}
