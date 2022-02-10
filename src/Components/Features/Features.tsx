import React from "react";
import Container from "../Container/Container";
import FeatureIcon from "../../assets/images/feature.svg";
import FeatureCard from "../FeatureCard/FeatureCard";

const detail =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, temporibus rerum! Ea, ducimus, exercitationem rem quas culpa cupiditate nobis assumenda aperiam quae eos eveniet, quisquam placeat nesciunt possimus excepturi inventore?";

const Features: React.FC = () => {
  return (
    <section className="features flow-content">
      <Container spacing={true}>
        <div className="features__header flow-content">
          <h2 className="section-title">Happy Launchers features</h2>
          <p>
            Let's learn some things you can do with this app. You can think of
            all this can help you in daily life.
          </p>
        </div>
      </Container>

      <Container spacing={true}>
        <div className="feature__cards">
          <FeatureCard
            heading={"Distraction Free"}
            imgURL={FeatureIcon}
            detail={detail}
          />
          <FeatureCard
            heading={"Distraction Free"}
            imgURL={FeatureIcon}
            detail={detail}
          />
          <FeatureCard
            heading={"Distraction Free"}
            imgURL={FeatureIcon}
            detail={detail}
          />
          <FeatureCard
            heading={"Distraction Free"}
            imgURL={FeatureIcon}
            detail={detail}
          />
        </div>
      </Container>
    </section>
  );
};

export default Features;
