import React from "react";
import Container from "../Container/Container";
import FeatureIcon from "../../assets/images/feature.svg";
import FeatureCard from "../FeatureCard/FeatureCard";

const detail =
  "AIO Launcher has a concise and utilitarian interface that will not distract you with bright icons and unnecessary animation.";

const Features: React.FC = () => {
  return (
    <section className="features">
      <Container spacing={true}>
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
      </Container>
    </section>
  );
};

export default Features;
