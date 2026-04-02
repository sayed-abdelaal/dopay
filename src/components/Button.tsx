// Auto-generated from Figma SDS — Silicon Design System
// Component: button | Page: Global "Cross Platform & Web"
// Variants: Filled, Outlined, Text, Flat × Enabled/Hovered/Focused/Pressed/Disabled × Large/Medium/Small

import React from "react";

type ButtonVariant = "filled" | "outlined" | "text" | "flat";
type ButtonSize    = "lg" | "md" | "sm";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:   ButtonVariant;
  size?:      ButtonSize;
  iconLeft?:  React.ReactNode;
  iconRight?: React.ReactNode;
  rtl?:       boolean;
  children:   React.ReactNode;
}

const sizeStyles: Record<ButtonSize, string> = {
  lg: "h-12 px-5 text-[16px] gap-2",
  md: "h-10 px-4 text-[14px] gap-1.5",
  sm: "h-9  px-3 text-[14px] gap-1.5",
};

const variantStyles: Record<ButtonVariant, string> = {
  filled:   "bg-brand-600 text-white hover:bg-brand-700 focus:ring-2 focus:ring-brand-300 active:bg-brand-800 disabled:bg-gray-100 disabled:text-gray-400",
  outlined: "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-2 focus:ring-brand-300 active:bg-gray-100 disabled:border-gray-200 disabled:text-gray-300",
  text:     "bg-transparent text-brand-600 hover:bg-brand-50 focus:ring-2 focus:ring-brand-300 active:bg-brand-100 disabled:text-gray-300",
  flat:     "bg-transparent text-gray-700 hover:bg-gray-50 focus:ring-2 focus:ring-gray-300 active:bg-gray-100 disabled:text-gray-300",
};

export function Button({
  variant = "filled",
  size    = "lg",
  iconLeft,
  iconRight,
  rtl     = false,
  children,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      dir={rtl ? "rtl" : "ltr"}
      className={[
        "inline-flex items-center justify-center rounded-xl font-medium font-body transition-colors",
        "focus:outline-none focus-visible:ring-offset-2",
        "disabled:cursor-not-allowed",
        sizeStyles[size],
        variantStyles[variant],
        className,
      ].join(" ")}
      {...props}
    >
      {iconLeft && <span className="shrink-0">{iconLeft}</span>}
      <span>{children}</span>
      {iconRight && <span className="shrink-0">{iconRight}</span>}
    </button>
  );
}
