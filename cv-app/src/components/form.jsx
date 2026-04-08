import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import "../styles/form.css";
import { PersonalInfoForm } from "./personal-info.jsx";
import svg_ttob from "../assets/svg_ttob.png";
import svg_rtol from "../assets/svg_rtol.png";
import svg_ltor from "../assets/svg_ltor.png";
import { useTemplateContext } from "./TemplateContext.jsx";
import { ExpEduBox } from "./expedu.jsx";
import { TextArea } from "./textarea.jsx";
import { ColorSwitcher } from "./color.jsx";
import { useState } from "react";

function SelectTemplate() {
  const { setTemplate } = useTemplateContext();

  return (
    <div class="svgs">
      <img
        src={svg_ttob}
        id="ttob"
        onClick={(e) => setTemplate(e.target.id)}
      ></img>
      <img
        src={svg_ltor}
        id="ltor"
        onClick={(e) => setTemplate(e.target.id)}
      ></img>
      <img
        src={svg_rtol}
        id="rtol"
        onClick={(e) => setTemplate(e.target.id)}
      ></img>
    </div>
  );
}

export function Form() {
  const [visibility, setVisibility] = useState(false);

  function toggleView() {
    setVisibility(!visibility);
    console.log(visibility);
  }

  return (
    <div className={`form ${visibility ? "reveal" : "hide"}`}>
      <button onClick={() => toggleView()} class="togglebutton">
        {visibility ? (
          <ExpandMoreIcon></ExpandMoreIcon>
        ) : (
          <ExpandLessIcon></ExpandLessIcon>
        )}
      </button>
      <section></section>
      <SelectTemplate></SelectTemplate>
      <ColorSwitcher></ColorSwitcher>
      <Accordion class="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">Personal Information</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <PersonalInfoForm />
        </AccordionDetails>
      </Accordion>

      <Accordion class="accordion" id="expelement">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">Professional Experience</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ExpEduBox section="exp"></ExpEduBox>
        </AccordionDetails>
      </Accordion>

      <Accordion class="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">Educational Background</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ExpEduBox section="edu"></ExpEduBox>
        </AccordionDetails>
      </Accordion>

      <Accordion class="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">Skills</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TextArea section="skills"></TextArea>
        </AccordionDetails>
      </Accordion>

      <Accordion class="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">Language</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TextArea section="languages"></TextArea>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
