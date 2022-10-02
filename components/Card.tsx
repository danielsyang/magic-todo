import { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {}

export default function Card({ children, className, ...rest }: CardProps) {
  return (
    <div className={"p-6 rounded-3 shadow-soft-sm " + className} {...rest}>
      {children}
    </div>
  );
}
