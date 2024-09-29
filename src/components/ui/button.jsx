import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

const buttonVariant = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  destructive:
    "bg-destructive text-destructive-foreground hover:bg-destructive/90",
  outline:
    "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  ghost: "hover:bg-accent hover:text-accent-foreground",
  link: "text-primary underline-offset-4 hover:underline",
};
const buttonSizes = {
  default: "h-10 px-4 py-2",
  sm: "h-9 rounded-md px-3",
  lg: "h-11 rounded-md px-8",
  icon: "h-10 w-10",
};

const deliverButton = ({ variant, size, className }) => {
  const variantClass = buttonVariant[variant];
  const sizeClass = buttonSizes[size];
  return `${variantClass} ${sizeClass} ${className}`;
};

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    const buttonStyles = deliverButton({ variant, size, className });
    return <Comp className={buttonStyles} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button };
