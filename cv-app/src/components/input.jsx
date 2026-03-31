import { useContext } from "react";
import { CVContext } from "../App";

export function Input({ labelname, section }) {
  const { cvinfo, setUserInfo } = useContext(CVContext);

  function handleInput(e) {
    const text = e.target.value;
    const currentid =
      e.target.parentElement.parentElement.getAttribute("data-id");

    if (section) {
      // get the editing element id

      editInfo(text, parseInt(currentid));
      console.log(cvinfo);
    } else {
      setUserInfo({
        ...cvinfo,
        [labelname]: e.target.value,
      });
    }
  }

  function editInfo(text, currentid) {
    // if(section === "Description")

    setUserInfo({
      ...cvinfo,
      [section]: cvinfo[section].map((item) => {
        if (parseInt(item.id) === currentid) {
          console.log("hi");
          return { ...item, [labelname]: text };
        } else return item;
      }),
    });
  }

  return (
    <div>
      <label>{labelname}</label>
      <input
        name={labelname}
        data-section={section}
        onChange={(e) => {
          handleInput(e);
        }}
      />
    </div>
  );
}

export function ImageInput() {
  return (
    <div>
      <label>Picture of you</label>
      <input type="file" name="picture" accept=".png, .jpg, .jpeg" />
    </div>
  );
}

export function List() {
  return <></>;
}
