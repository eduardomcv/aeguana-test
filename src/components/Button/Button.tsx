import clsx from "clsx";
import "./Button.scss";
import { ReactNode } from "react";

interface ButtonProps {
  color?: "primary" | "secondary";
  disabled?: boolean;
  className?: string;
  children: ReactNode;
  onClick: () => void;
}

export function Button({
  color = "primary",
  disabled = false,
  className,
  children,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "button",
        {
          secondary: color === "secondary",
          disabled,
        },
        className,
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
