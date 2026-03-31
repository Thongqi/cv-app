import { useContext, useState } from "react";
import { Input } from "./input";
import { TextArea } from "./textarea";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { CVContext } from "../App";

function ExpEduTemplate({ id, section }) {
  return (
    <div class="form-accordion" data-id={id}>
      <Input
        labelname={section == "edu" ? "Course" : "Position"}
        section={section}
      ></Input>
      <Input labelname={"Timeframe"} section={section}></Input>
      <Input labelname={"Location"} section={section}></Input>
      <TextArea labelname={"Description"} section={section}></TextArea>
    </div>
  );
}

export function ExpEduBox({ section }) {
  const { cvinfo, setUserInfo } = useContext(CVContext);

  const [number, setNumber] = useState(1);
  console.log(number);
  const [List, setList] = useState([
    <ExpEduTemplate id={number} section={section}></ExpEduTemplate>,
  ]);

  function addList() {
    setNumber(number + 1);
    setList((existing) => [
      ...existing,
      <ExpEduTemplate id={number + 1} section={section}></ExpEduTemplate>,
    ]);

    const title = section == "edu" ? "Course" : "Position";

    const newObject = {
      id: parseInt(number + 1),
      [title]: "",
      Location: "",
      Timeframe: "",
      Description: [],
    };
    setUserInfo({
      ...cvinfo,
      [section]: [...cvinfo[section], newObject],
    });
    console.log(cvinfo);
  }
  return (
    <>
      {List}
      <button onClick={() => addList(`${section}element`)}>
        <AddCircleOutlineIcon></AddCircleOutlineIcon>
      </button>
    </>
  );
}
