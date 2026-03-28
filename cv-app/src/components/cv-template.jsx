import { PersonalInfoForm } from "./personal-info";
import "./cv-template.css";
import { useContext } from "react";
import { CVContext } from "../App";
import personimage from "../assets/santa.jpg";

export function Resume() {
  return (
    <div class="resume">
      switch
      <TemplateLeftToRight></TemplateLeftToRight>
    </div>
  );
}

export function TemplateToptoBottom() {
  const infos = useContext(CVContext).cvinfo;

  return (
    <div class="vertical">
      <p class="name">{infos.name}</p>

      <PersonalInfo></PersonalInfo>
      <p class="descr">{infos.descr}</p>
      <img src={personimage}></img>
      <WorkExps></WorkExps>
      <EduBackgrounds></EduBackgrounds>
      <Skills></Skills>
      <Languages></Languages>
    </div>
  );
}

function TemplateLeftToRight() {
  const infos = useContext(CVContext).cvinfo;
  return (
    <div class="sidebyside" style={{ flexDirection: "row" }}>
      <div class="left">
        <img src={personimage}></img>
        <PersonalInfo></PersonalInfo>

        <Skills></Skills>
        <Languages></Languages>
      </div>
      <div class="right">
        <p class="name">{infos.name}</p>

        <p class="pidescr">{infos.descr}</p>
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
        <p>Email {infos.email}</p>
        <p>Contact {infos.contact}</p>
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
        <mark>
          <p class="template-h2">PROFESSIONAL EXPERIENCE</p>
        </mark>
      </div>
      <div>
        {works.map((work) => (
          <div class="work" key={work.id}>
            <p class="title">{work.position}</p>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <p class="location">{work.location}</p>
              <p class="timeframe">{work.timeframe}</p>
            </div>

            <ul class="descr">
              {work.descr.map((des) => (
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
        <mark>
          <p class="template-h2">EDUCATIONAL BACKGROUND</p>
        </mark>
      </div>
      <div>
        {edus.map((edu) => (
          <div class="edu" key={edu.id}>
            <p class="title">{edu.course}</p>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <p class="location">{edu.location}</p>
              <p class="timeframe">{edu.timeframe}</p>
            </div>

            <ul class="descr">
              {edu.descr.map((des) => (
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
      <mark>
        <p class="template-h2">SKILLS</p>
      </mark>
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
      <mark>
        <p class="template-h2">LANGUAGE</p>
      </mark>
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
