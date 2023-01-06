import React from "react";
interface I_BaseInputprops extends React.ComponentProps<"input"> {}
const BaseInput = ({ className, ...rest }: I_BaseInputprops) => {
  return (
    <input className={`w-auto px-1 outline-none ${className}`} {...rest} />
  );
};
export { BaseInput };
