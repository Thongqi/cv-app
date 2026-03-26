import { useState } from "react";

function Input(labelname, value) {
  return (
    <>
      <label>{labelname}</label>
      <input name="name" value={value} onChange={handleChange}/>
    </>
  );
}

function handleChange(event){
  setValue(event.target.value)
}

function changeHTML(labelname, value){
  return(
    <div>
      {value}
    </div>
  )
}

export function handleInput(labelname, value){
  const [value, setValue] = useState("")

  return(
    <Input labelname={labelname} value={value}></Input>
  )
}

