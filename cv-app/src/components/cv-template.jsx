import { PersonalInfoForm } from "./personal-info";
import "./cv-template.css";
import { useContext } from "react";
import { CVContext } from "../App";
import personimage from "../assets/santa.jpg";
import { useTemplateContext } from "./TemplateContext";

export function Resume() {
  const { templatetype } = useTemplateContext();
  return (
    <div class="resume">
      {(() => {
        switch (templatetype) {
          case "ttob":
            return <TemplateToptoBottom></TemplateToptoBottom>;
          case "ltor":
            return (
              <TemplateSidebySide flexdirection={"row"}></TemplateSidebySide>
            );
          case "rtol":
            return (
              <TemplateSidebySide
                flexdirection={"row-reverse"}
              ></TemplateSidebySide>
            );
          default:
            return <TemplateToptoBottom></TemplateToptoBottom>;
        }
      })()}
    </div>
  );
}

export function TemplateToptoBottom() {
  const infos = useContext(CVContext).cvinfo;

  return (
    <div class="vertical">
      <p class="name">{infos.Name}</p>

      <PersonalInfo></PersonalInfo>
      <p class="descr">{infos.Description}</p>
      <img src={personimage}></img>
      <WorkExps></WorkExps>
      <EduBackgrounds></EduBackgrounds>
      <Skills></Skills>
      <Languages></Languages>
    </div>
  );
}

function TemplateSidebySide({ flexdirection }) {
  const infos = useContext(CVContext).cvinfo;
  return (
    <div class="sidebyside" style={{ flexDirection: flexdirection }}>
      <div class="left">
        <img src={personimage}></img>
        <PersonalInfo></PersonalInfo>

        <Skills></Skills>
        <Languages></Languages>
      </div>
      <div class="right">
        <p class="name">{infos.Name}</p>

        <p class="pidescr">{infos.Description}</p>
        <WorkExps></WorkExps>
        <EduBackgrounds></EduBackgrounds>
      </div>
    </div>
  );
}

function PersonalInfo() {
  const infos = useContext(CVContext).cvinfo;

  return (
    <div class="personalinfo">
      <div class="contact">
        <p>Email {infos.Email}</p>
        <p>Contact {infos.Contact}</p>
      </div>
    </div>
  );
}

function WorkExps() {
  const infos = useContext(CVContext);
  const works = infos.cvinfo.exp;
  return (
    <div>
      <div>
        <p class="template-h2">
          <mark>PROFESSIONAL EXPERIENCE</mark>
        </p>
      </div>
      <div>
        {works.map((work) => (
          <div class="work" key={work.id}>
            <p class="title">{work.Position}</p>
            <div>
              <p class="location">{work.Location}</p>
              <p class="timeframe">{work.Timeframe}</p>
            </div>

            <ul class="descr">
              {work.Description.map((des) => (
                <li>{des}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function EduBackgrounds() {
  const infos = useContext(CVContext);
  const edus = infos.cvinfo.edu;
  return (
    <div>
      <div>
        <p class="template-h2">
          <mark>EDUCATIONAL BACKGROUND</mark>
        </p>
      </div>
      <div>
        {edus.map((edu) => (
          <div class="edu" key={edu.id}>
            <p class="title">{edu.Course}</p>
            <div>
              <p class="location">{edu.Location}</p>
              <p class="timeframe">{edu.Timeframe}</p>
            </div>

            <ul class="descr">
              {edu.Description.map((des) => (
                <li>{des}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function Skills() {
  const infos = useContext(CVContext);

  return (
    <div>
      <p class="template-h2">
        <mark>SKILLS</mark>
      </p>

      <ul>
        {infos.cvinfo.skills.map((skill) => (
          <li>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

function Languages() {
  const infos = useContext(CVContext);
  return (
    <div>
      <p>
        <mark class="template-h2">LANGUAGE</mark>
      </p>
      <ul>
        {infos.cvinfo.languages.map((language) => (
          <li>{language}</li>
        ))}
      </ul>
    </div>
  );
}

// `user select sets of color, primary and background
// react setcolor
// react changecolor`

// `user select font-family`
