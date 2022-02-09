import React from "react";
import Container from "../Container/Container";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer>
      <Container>
        <div className="footer-bar">
          <span>Copyright © 2021 Company Z</span>
          <span>
            <Link to="/privacy">Privacy Policy</Link>
          </span>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
