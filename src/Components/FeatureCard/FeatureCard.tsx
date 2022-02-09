import React from "react";
import PreviewCard from "../PreviewCard/PreviewCard";

interface IProps {
  imgURL: string;
  heading: string;
  detail: string;
}

const FeatureCard: React.FC<IProps> = ({ imgURL, heading, detail }) => {
  return (
    <article className="feature-card flow-content">
      <div className="feature-card__header">
        <img src={imgURL} />
        <h3>{heading}</h3>
      </div>
      <div className="feature-card__detail">{detail}</div>
    </article>
  );
};

export default FeatureCard;
