import React from "react";
import "../assets/css/Block.css";

function ExpBlock({
  heading,
  size,
  content,
}: {
  heading: string;
  size: number;
  content: string[];
}) {
  function contentLines() {
    return content.map((contentLine: string) => <li>{contentLine}</li>);
  }

  return (
    <div className="block">
      <div className="blockContent">
        <h3>{heading}</h3>
        <ul>{contentLines()}</ul>
      </div>
    </div>
  );
}

export default ExpBlock;
