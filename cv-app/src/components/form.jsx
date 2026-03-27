import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./form.css";
import { PersonalInfoForm } from "./personal-info.jsx"



export function Form() {
  return (
    <div class="form">
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

      <Accordion class="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">Professional Experience</Typography>
        </AccordionSummary>
        <AccordionDetails></AccordionDetails>
      </Accordion>

      <Accordion class="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">Educational Background</Typography>
        </AccordionSummary>
        <AccordionDetails></AccordionDetails>
      </Accordion>

      <Accordion class="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">Skills</Typography>
        </AccordionSummary>
        <AccordionDetails></AccordionDetails>
      </Accordion>

      <Accordion class="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">Language</Typography>
        </AccordionSummary>
        <AccordionDetails></AccordionDetails>
      </Accordion>
    </div>
  );
}
