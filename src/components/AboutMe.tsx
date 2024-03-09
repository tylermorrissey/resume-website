import "../assets/css/AboutMe.css";
import React from "react";

function AboutMe() {
  return (
    <>
      <div className={"about-me-column"}>
        <div className={"about-me-text-title"}>
          <div className={"about-me-text-large"}>What I've been up to...</div>
        </div>
        <div className={"about-me-text-content"}>
          <div className={"about-me-text-small"}>
            I started my career in 2017 at Columbus City Schools working as a
            full stack engineer on a Grails team. Since then I've worked at two
            growing startups, cutting my teeth in fast paced insurance
            industries. I'm comfortable collaborating with other talented
            engineers and I enjoy mentoring those who are new to the field. If
            you need a well rounded engineer who produces elegant architecture
            and smooth, functional UI, you can count on me.
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
