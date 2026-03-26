import { Input, TextArea, ImageInput } from "./input";

export function PersonalInfo() {
  return (
    <div class="">
      <Input labelname={"Name"}></Input>
      <Input labelname={"Contact"}></Input>
      <Input labelname={"Email"}></Input>
      <TextArea labelname={"description"}></TextArea>
      {/* <ImageInput></ImageInput> */}
    </div>
  );
}
