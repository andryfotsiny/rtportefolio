import * as React from "react";
import { cn } from "../lib/Utils";

// Define the types for the props
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  type?: React.InputHTMLAttributes<HTMLInputElement>["type"];
}

// Define the Input component using TypeScript
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-[48px] rounded-md border dark:text-gray-200 dark:bg-gray-800 bg-white focus:border-accent",
          "font-light  px-4 py-5 text-base placeholder:dark:text-gray-200",
          "outline-none",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
