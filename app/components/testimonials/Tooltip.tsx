import React, { ReactNode } from "react";

interface Props {
  text: string;
  children: ReactNode;
}

const Tooltip = ({ text, children }: Props) => {
  return (
    <div className="relative inline-block">
      {children}
      <div className="tooltip absolute bottom-full mb-2 w-48 rounded bg-black p-2 text-sm text-white opacity-0 shadow-lg transition-opacity duration-300 ease-in-out">
        {text}
      </div>
    </div>
  );
};

export default Tooltip;
