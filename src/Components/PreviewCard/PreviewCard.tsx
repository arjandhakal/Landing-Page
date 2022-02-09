import React from "react";

interface IProps {
  imgURL: string;
  heading: string;
  detail: string;
}

const PreviewCard: React.FC<IProps> = ({ imgURL, heading, detail }) => {
  return (
    <article className="preview-card flow-content">
      <div className="preview-card__header">
        <img src={imgURL} />
        <h3>{heading}</h3>
      </div>
      <div className="preview-card__detail">{detail}</div>
    </article>
  );
};

export default PreviewCard;
