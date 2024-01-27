import React from "react";
import "../assets/css/PictureBlock.css";
import picture from "../assets/images/IMG_6346 2.png";

function PictureBlock() {
  return (
    <div className="picture-block">
      <img
        className={"profile-picture"}
        src={picture}
        alt={"profile.picture"}
      />
    </div>
  );
}

export default PictureBlock;
