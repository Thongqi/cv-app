import { Input, TextArea, ImageInput } from "./input";

export function PersonalInfoForm() {
  return (
    <div class="form-accordion">
      <Input labelname={"Name"}></Input>
      <Input labelname={"Contact"}></Input>
      <Input labelname={"Email"}></Input>
      <TextArea labelname={"description"}></TextArea>
      {/* <ImageInput></ImageInput> */}
    </div>
  );
}
