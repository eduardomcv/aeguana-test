import clsx from "clsx";
import "./Button.scss";
import { ReactNode } from "react";

interface ButtonProps {
  color?: "primary" | "secondary";
  disabled?: boolean;
  className?: string;
  children: ReactNode;
}

export function Button({
  color = "primary",
  disabled = false,
  className,
  children,
}: ButtonProps) {
  return (
    <button
      className={clsx(
        {
          secondary: color === "secondary",
          disabled,
        },
        className,
      )}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
