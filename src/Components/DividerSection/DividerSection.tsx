import React, { ReactNode } from "react";
import Container from "../Container/Container";

interface IProps {
  children: ReactNode;
}

const DividerSection: React.FC<IProps> = ({ children }) => {
  return (
    <section className="divider-section">
      <Container>{children}</Container>
    </section>
  );
};

export default DividerSection;
