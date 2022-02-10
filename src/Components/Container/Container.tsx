import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  spacing?: boolean;
}

const Container: React.FC<IProps> = ({ children, spacing }) => {
  return (
    <div className={`container ${spacing ? "flow-content" : ""}`}>
      {children}
    </div>
  );
};

export default Container;
