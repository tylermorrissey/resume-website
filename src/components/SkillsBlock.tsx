import React from "react";
import buildKite from "../assets/images/skills/buildkite-icon.svg";
import dataDog from "../assets/images/skills/datadog-icon.svg";
import docker from "../assets/images/skills/docker-icon.svg";
import java from "../assets/images/skills/java.svg";
import jest from "../assets/images/skills/jest.svg";
import nodejs from "../assets/images/skills/nodejs-icon-alt.svg";
import postgresql from "../assets/images/skills/postgresql.svg";
import rails from "../assets/images/skills/rails.svg";
import ruby from "../assets/images/skills/ruby.svg";
import typescript from "../assets/images/skills/typescript-icon.svg";
import spring from "../assets/images/skills/spring-icon.svg";
import react from "../assets/images/skills/react.svg";
import groovy from "../assets/images/skills/groovy.svg";
import "../assets/css/skillsBlock.css";

function SkillBlock() {
  type logoPair = { name: string; logo: string };
  const languageLogos: logoPair[] = [
    { name: "Ruby", logo: ruby },
    { name: "Java", logo: java },
    { name: "TypeScript", logo: typescript },
    { name: "Groovy", logo: groovy },
  ];
  const frameworkLogos: logoPair[] = [
    { name: "React", logo: react },
    { name: "Rails", logo: rails },
    { name: "Node.js", logo: nodejs },
    { name: "Jest", logo: jest },
    { name: "Spring", logo: spring },
  ];
  const toolLogos: logoPair[] = [
    { name: "DataDog", logo: dataDog },
    { name: "Docker", logo: docker },
    { name: "BuildKite", logo: buildKite },
    { name: "PostgreSQL", logo: postgresql },
  ];

  function skills(logoPair: logoPair[]) {
    return logoPair.map(({ name, logo }) => (
      <div className="skill">
        <img
          className="skill-image"
          width={100}
          height={100}
          src={logo}
          alt={"skill-image"}
        />
        <div className="hidden-text-wrap">
          <div className="hidden-text">{name}</div>
        </div>
      </div>
    ));
  }

  return (
    <body className={"skills-section section"}>
      <div className={"skillBlock"}>
        <div className={"skills-row"}>
          <h3>Languages</h3>
          <div className={"skills-row"}>{skills(languageLogos)}</div>
        </div>
        <div className={"skills-row"}>
          <h3>Frameworks</h3>
          <div className={"skills-row"}>{skills(frameworkLogos)}</div>
        </div>
        <div className={"skills-row"}>
          <h3>Tools</h3>
          <div className={"skills-row"}>{skills(toolLogos)}</div>
        </div>
      </div>
    </body>
  );
}

export default SkillBlock;
