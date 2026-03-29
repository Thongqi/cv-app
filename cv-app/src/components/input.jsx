import { useContext } from "react";
import { CVContext } from "../App";

export function Input({ labelname, section }) {
  const { cvinfo, setUserInfo } = useContext(CVContext);

  function handleInput(e) {
    const text = e.target.value;
    if (section) {
      const thesection = cvinfo[section];
      console.log(thesection.map((el) => el.id));
      setUserInfo({
        [labelname]: thesection.map((el) =>
          el.id === 1 ? { ...el, [labelname]: text } : el,
        ),
      });
    } else {
      setUserInfo({
        ...cvinfo,
        [labelname]: e.target.value,
      });
    }
  }

  return (
    <div>
      <label>{labelname}</label>
      <input
        name={labelname}
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

export function TextArea({ labelname }) {
  const { cvinfo, setUserInfo } = useContext(CVContext);

  return (
    <div>
      <label>{labelname}</label>
      <textArea
        name={labelname}
        rows="9"
        onChange={(e) => {
          setUserInfo({ ...cvinfo, [labelname]: e.target.value });
        }}
      />
    </div>
  );
}

// function changeHTML(labelname, value){
//   const [value, setValue] = useState("")

//   return(
//     <div>
//       {value}
//     </div>
//   )
// };
