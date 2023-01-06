import React from "react";

interface I_BaseButtonProps extends React.ComponentProps<"button"> {
  children: string;
}

const BaseButton = ({ children, className, ...rest }: I_BaseButtonProps) => {
  return (
    <button className={`text-white ${className}`} {...rest}>
      {children}
    </button>
  );
};
export { BaseButton };
