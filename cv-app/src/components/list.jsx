import { useContext, useState } from "react";
import { CVContext } from "../App";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export function List({ section }) {
  const { cvinfo, setUserInfo } = useContext(CVContext);

  const [number, setNumber] = useState(1);

  function handleChange(e) {
    const currentid = e.target.getAttribute("data-id");
    const text = e.target.value;
    console.log(section);
    if (currentid < cvinfo[section].length) {
      // get editingid, get the matching index in the array, update it
      const updatedValue = cvinfo[section].map((item, index) => {
        if (index === currentid - 1) {
          return text;
        } else return item;
      });
      console.log(updatedValue);

      setUserInfo({ ...cvinfo, section: updatedValue });

      console.log(cvinfo);
    } else // if outofarray.length, append to array
    {
      setUserInfo({ ...cvinfo, [section]: [...cvinfo[section], text] });
      console.log(cvinfo[section]);
    }
  }
  const [list, setList] = useState([
    <input data-id={number} onChange={(e) => handleChange(e)}></input>,
  ]);

  function addList() {
    setNumber(number + 1);
    setList((existing) => [
      ...existing,
      <input data-id={number + 1} onChange={(e) => handleChange(e)}></input>,
    ]);
  }
  return (
    <>
      {list}
      <button onClick={() => addList()}>
        <AddCircleOutlineIcon></AddCircleOutlineIcon>
      </button>
    </>
  );
}
