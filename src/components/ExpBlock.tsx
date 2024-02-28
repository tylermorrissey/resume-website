import React from "react";
import "../assets/css/Block.css";

function ExpBlock({
  heading,
  content,
  image,
  imgClassName,
}: {
  heading: string;
  content: string[];
  image: string;
  imgClassName: string;
}) {
  function contentLines() {
    return content.map((contentLine: string) => <li>{contentLine}</li>);
  }

  return (
    <div className="body-row experience-row section">
      <div className={imgClassName}>
        <img className={"company-logo"} src={image} alt={"company logo"} />
      </div>
      <div className="block-content">
        <h3>{heading}</h3>
        <ul>{contentLines()}</ul>
      </div>
    </div>
  );
}

export default ExpBlock;
