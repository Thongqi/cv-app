import { PersonalInfo } from "./personal-info";
import "./cv-template.css";

export function Resume() {
  return <div class="resume"></div>;
}

export function TemplateToptoBottom() {
  return (
    <div class="vertical">
      <WorkExps></WorkExps>
      <EduBackgrounds></EduBackgrounds>
      <Skills></Skills>
      <Languages></Languages>
    </div>
  );
}

function TemplateLeftToRight() {
  return (
    <div class="ltor">
      <div class="left">
        <PersonalInfo></PersonalInfo>
        <Skills></Skills>
        <Languages></Languages>
      </div>
      <div class="right">
        <WorkExps></WorkExps>
        <EduBackgrounds></EduBackgrounds>
      </div>
    </div>
  );
}

function WorkExps() {
  return (
    <div>
      <div>
        <mark>
          <p class="template-h2">PROFESSIONAL EXPERIENCE</p>
        </mark>
      </div>
      <WorkExp></WorkExp>
    </div>
  );
}

function WorkExp({ work }) {
  if (work) {
    return (
      <div class="work">
        <p class="title">{work.jobtitle}</p>
        <p class="companyname">{work.companyname}</p>
        <p class="timeframe">{work.timeframe}</p>
        <p class="descr">{work.descr}</p>
      </div>
    );
  }
}

function EduBackgrounds() {
  return (
    <div>
      <div>
        <mark>
          <p class="template-h2">EDUCATIONAL BACKGROUND</p>
        </mark>
      </div>
      <EduBackground></EduBackground>
    </div>
  );
}

function EduBackground({ edu }) {
  if (edu) {
    return (
      <div class="edu">
        <p class="coursename">{edu.coursename}</p>
        <p class="institutename">{edu.institutename}</p>
        <p class="timeframe">{edu.timeframe}</p>
        <p class="descr">{edu.descr}</p>
      </div>
    );
  }
}

function Skills({ skills }) {
  if (skills) {
    const skillItems = skills.map((skill) => <li>{skill}</li>);

    return <ul>{skillItems}</ul>;
  }
  return (
    <div>
      <mark>
        <p class="template-h2">SKILLS</p>
      </mark>
    </div>
  );
}

function Languages({ languages }) {
  if (languages) {
    const languageItems = languages.map((language) => <li>{language}</li>);

    return <ul>{languageItems}</ul>;
  }
  return (
    <div>
      <mark>
        <p class="template-h2">LANGUAGE</p>
      </mark>
    </div>
  );
}

// `user select sets of color, primary and background
// react setcolor
// react changecolor`

// `user select font-family`
