import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "signature" | "outline" | "emerald" | "ruby";
}

export function Badge({
  className,
  variant = "default",
  children,
  ...props
}: BadgeProps) {
  const variantStyles = {
    default: "bg-amber-100 text-amber-900 border-amber-300/70",
    signature:
      "bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold shadow-xs border-amber-400",
    outline: "bg-white/80 text-stone-700 border-stone-300",
    emerald: "bg-emerald-100 text-emerald-900 border-emerald-300/80",
    ruby: "bg-rose-100 text-rose-900 border-rose-300/80",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border tracking-wide",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
