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
import javascript from "../assets/images/skills/javascript.svg";
import gitIcon from "../assets/images/skills/git-icon.svg";
import "../assets/css/skillsBlock.css";
import "../assets/css/AboutMe.css";
import AboutMe from "./AboutMe";

function SkillBlock() {
  type logoPair = { name: string; logo: string };
  const languageLogos: logoPair[] = [
    { name: "Ruby", logo: ruby },
    { name: "Java", logo: java },
    { name: "TypeScript", logo: typescript },
    { name: "Groovy", logo: groovy },
    { name: "Javascript", logo: javascript },
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
    { name: "Git", logo: gitIcon },
  ];

  function skills(logoPair: logoPair[]) {
    return logoPair.map(({ name, logo }) => (
      <div className="skill">
        <img
          className="skill-image"
          width={25}
          height={25}
          src={logo}
          alt={"skill-image"}
        />
        <div className="skill-text">
          <div className="">{name}</div>
        </div>
      </div>
    ));
  }

  return (
    <div className={"body-row"}>
      <div className={"info-block"}>
        <div id={"about-me"} className={"skills-section"}>
          <div className={"skills-column"}>
            <div className={"skill-row"}>
              <AboutMe />
            </div>
            <div id={"skills-block"} className={"skill-row skills-margin"}>
              <div className={"skill-column"}>
                <div className={"skills-text-container"}>
                  <div className={"small-skills-text"}>Languages</div>
                </div>
                <div className={"skills-box-row"}>{skills(languageLogos)}</div>
              </div>
              <div className={"skill-column"}>
                <div className={"skills-text-container"}>
                  <div className={"small-skills-text"}>Frameworks</div>
                </div>
                <div className={"skills-box-row"}>{skills(frameworkLogos)}</div>
              </div>
              <div className={"skill-column"}>
                <div className={"skills-text-container"}>
                  <div className={"small-skills-text"}>Tools</div>
                </div>
                <div className={"skills-box-row"}>{skills(toolLogos)}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillBlock;
