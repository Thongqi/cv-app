import { useContext } from "react";
import { CVContext } from "../App";

export function TextArea({ labelname, section }) {
  const { cvinfo, setUserInfo } = useContext(CVContext);

  function editInfo(text, currentid) {
    setUserInfo({
      ...cvinfo,
      [section]: cvinfo[section].map((item) => {
        if (parseInt(item.id) === currentid) {
          return { ...item, [labelname]: [text] };
        } else return item;
      }),
    });
    console.log(cvinfo);
  }

  const handleChange = (e) => {
    const currentid =
      e.target.parentElement.parentElement.getAttribute("data-id");
    if (section) editInfo(e.target.value, parseInt(currentid));
    else setUserInfo({ ...cvinfo, [labelname]: e.target.value });
  };

  return (
    <div>
      <label>{labelname}</label>
      <textArea
        name={labelname}
        data-section={section}
        rows="9"
        onChange={(e) => {
          handleChange(e);
        }}
      />
    </div>
  );
}
