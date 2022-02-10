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
        <div id="wrapper">
          <div className="previews__sticky-div">
            <h3 className="section-title">Preview of the launcher</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              quibusdam ipsam assumenda ad expedita obcaecati hic cumque
              reiciendis quo nulla ipsa, unde ducimus saepe, quisquam tempore
              numquam. Quibusdam, ex aliquid.
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
        </div>
      </Container>
    </section>
  );
};

export default Previews;
