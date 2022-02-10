import React from "react";
import Container from "../Container/Container";
const Download: React.FC = () => {
  return (
    <section className="download">
      <Container spacing={true}>
        <h3 className="download__header"> Download Now</h3>
        <a className="btn">Download Now</a>
      </Container>
    </section>
  );
};

export default Download;
