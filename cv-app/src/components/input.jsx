export function Input({ labelname, value }) {
  return (
    <>
      <label>{labelname}</label>
      <input name="name" value={value} />
    </>
  );
}

export function ImageInput() {
  return (
    <>
      <label>Picture of you</label>
      <input type="file" name="picture" accept=".png, .jpg, .jpeg" />
    </>
  );
}

export function TextArea({ labelname, value }) {
  return (
    <>
      <label>{labelname}</label>
      <textArea name="name" value={value} />
    </>
  );
}

// function handleChange(event){
//   setValue(event.target.value)

// }
// function changeHTML(labelname, value){
//   const [value, setValue] = useState("")

//   return(
//     <div>
//       {value}
//     </div>
//   )
// };
