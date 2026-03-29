import { useState } from "react";
import { Input, TextArea } from "./input";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

function ExpTemplate({ id }) {
  return (
    <div class="form-accordion" data-id={id}>
      <Input labelname={"Position"} section="exp"></Input>
      <Input labelname={"Timeframe"} section="exp"></Input>
      <Input labelname={"Location"} section="exp"></Input>
      <TextArea labelname={"Description"} section="exp"></TextArea>
    </div>
  );
}

export function Experience() {
  const [number, setNumber] = useState(1);
  console.log(number);
  const [expList, setExpList] = useState([
    <ExpTemplate id={number}></ExpTemplate>,
  ]);

  function addExpList() {
    setNumber(number + 1);
    setExpList((existing) => [
      ...existing,
      <ExpTemplate id={number + 1}></ExpTemplate>,
    ]);
  }
  return (
    <>
      {expList}
      <button onClick={() => addExpList("expelement")}>
        <AddCircleOutlineIcon></AddCircleOutlineIcon>
      </button>
    </>
  );
}
