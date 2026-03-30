import { useContext } from "react";
import { CVContext } from "../App";

export function Input({ labelname, section }) {
  const { cvinfo, setUserInfo } = useContext(CVContext);

  function handleInput(e) {
    const text = e.target.value;
    if (section) {
      // get the editing element id
      const currentid = event.target.parentElement.getAttribute('data-id');

      const thesection = cvinfo[section];
      console.log(thesection.map((el) => el.id));
      
      if(thesection.length < parseInt(currentid)) appendInfo(cvinfo, section, labelname,text)
      else editInfo(cvinfo, section, labelname,text)

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

function editInfo(cvinfo, section, labelname,text){
  setUserInfo({
        ...cvinfo,
        [section]: cvinfo[section].map(
          item => {
            if (item.id === currentid){
              return {...item, [labelname]: text}
            } 
            return item
          }
        )     
      });
}

function appendInfo(cvinfo, section, labelname,text){
  setUserInfo(
    ...cvinfo,
    [section]: [...cvinfo[section],{[labelname]: text}]
  )
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

export function List(){

  return(
    <>
      
    </>
  )
}
