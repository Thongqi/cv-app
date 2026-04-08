import { useContext } from "react";
import { CVContext } from "../App";

export function TextArea({ labelname, section }) {
  const { cvinfo, setUserInfo } = useContext(CVContext);

  function editInfo(text, currentid) {
    const textArray = text.split("\n");

    if (section == "skills" || section == "languages") {
      setUserInfo({ ...cvinfo, [section]: textArray });
    } else {
      setUserInfo({
        ...cvinfo,
        [section]: cvinfo[section].map((item) => {
          if (parseInt(item.id) === currentid) {
            return { ...item, [labelname]: textArray };
          } else return item;
        }),
      });
    }
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
