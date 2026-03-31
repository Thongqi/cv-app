import { Input, ImageInput } from "./input";
import { TextArea } from "./textarea";

export function PersonalInfoForm() {
  return (
    <div class="form-accordion">
      <Input labelname={"Name"}></Input>
      <Input labelname={"Contact"}></Input>
      <Input labelname={"Email"}></Input>
      <TextArea labelname={"Description"}></TextArea>
      {/* <ImageInput></ImageInput> */}
    </div>
  );
}
