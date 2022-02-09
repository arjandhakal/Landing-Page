import React from "react";
import Container from "../Container/Container";
import FeatureImage from "../../assets/images/feature_one.png";
import PreviewCard from "../PreviewCard/PreviewCard";

const detail =
  "AIO Launcher supports themes, including a black and white theme that will not distract you. Any theme settings can be changed, including font size, colors, the form of interface elements.";

const Previews: React.FC = () => {
  return (
    <section className="previews">
      <Container spacing={true}>
        <div className="previews__sticky-div">
          <h3>The psychology of color</h3>
          <p>
            Each color portrays a different feeling or emotion, and by
            understanding the psychology of color, you can choose a color that
            will resonate with your target audience and give off the vibe &
            emotion you want.
          </p>
        </div>
        <div className="previews__preview flow-content">
          <PreviewCard
            heading={"Distraction Free"}
            imgURL={FeatureImage}
            detail={detail}
          />
          <PreviewCard
            heading={"Distraction Free"}
            imgURL={FeatureImage}
            detail={detail}
          />
          <PreviewCard
            heading={"Distraction Free"}
            imgURL={FeatureImage}
            detail={detail}
          />
        </div>
      </Container>
    </section>
  );
};

export default Previews;
