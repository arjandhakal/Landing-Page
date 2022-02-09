import React from "react";
import Navbar from "../Navbar/Navbar";
import Container from "../Container/Container";
import HeroBackgroundImage from "../../assets/images/hero_bg.png";

const Header: React.FC = () => {
  return (
    <header className="hero">
      <Container>
        <Navbar />
      </Container>
      <Container spacing={true}>
        <div className="hero__left">
          <h1 className="primary-title"> An amazing mobile launcher</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consectetur velit recusandae accusamus, incidunt cupiditate expedita
            vero dolores assumenda enim aperiam corporis repellat totam eum aut
            molestias sit tenetur commodi illum.
          </p>
          <a href="#" className="btn">
            Get Happy Launcher
          </a>
        </div>
        <div className="hero__right">
          <img src={HeroBackgroundImage} />
        </div>
      </Container>
    </header>
  );
};

export default Header;
