export function Input({ labelname }) {
  return (
    <div>
      <label>{labelname}</label>
      <input name="name" />
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

export function TextArea({ labelname, value }) {
  return (
    <div>
      <label>{labelname}</label>
      <textArea name="name" value={value} rows="9" />
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
