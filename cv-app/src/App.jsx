import { Resume } from "./components/cv-template";
import { Form } from "./components/form";
import { createContext, useState } from "react";
import { TemplateContextProvider } from "./components/TemplateContext";

export const CVContext = createContext(null);

export default function App() {
  let cvinfos = {
    Name: "Santa Claus",
    Contact: "+12345678910",
    Email: "santaatnorthpole@gmail.com",
    Description:
      "Known for elite chimney navigation, unmatched night-shift endurance, and a strong commitment to spreading joy (and mild chaos) across all continents. Thrives under extreme deadlines, cold environments, and cookie-based compensation systems.",
    Image: "./assets/santa.jpg",
    exp: [
      {
        id: "1",
        Position: "Chief Gift Officer (CGO)",
        Location: "Santa’s Workshop Inc., North Pole",
        Timeframe: "Year 0 - Now",
        Description: [
          "Execute worldwide gift delivery to billions of households in a single night—no delays, no excuses",
          "Manage and supervise a large-scale elf workforce across toy production, packaging, and quality control",
          "Maintain and update the Naughty/Nice List™ using highly questionable but festive criteria",
          "Coordinate reindeer-powered logistics operations under extreme weather conditions",
          "Specialize in stealth entry via chimneys, windows, and “creative access points”",
          "Handle annual PR campaigns every December with 100% brand recognition",
        ],
      },
    ],
    edu: [
      {
        id: "1",
        Location: "North Pole University",
        Course: "Bachelor of Holiday Spirit & Cheer Management",
        Timeframe: "1830-1834",
        Description: [
          "Focus: Advanced Gift Wrapping, Sleigh Engineering, and Cookie Evaluation",
          "Capstone Project: “Optimizing Global Gift Distribution in 24 Hours Without Getting Arrested”",
          "Achievement: The only graduate",
        ],
      },
    ],
    skills: [
      "Global navigation",
      "Crisis management",
      "Reindeer management & flight coordination",
      "Data tracking",
    ],
    languages: ["Hohoho"],
  };

  const [cvinfo, setcvinfo] = useState(cvinfos);

  function setUserInfo(info) {
    setcvinfo(info);
  }

  return (
    <>
      <CVContext value={{ cvinfo, setUserInfo }}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <TemplateContextProvider>
            <Form></Form>
            <Resume></Resume>
          </TemplateContextProvider>
        </div>
      </CVContext>
    </>
  );
}
