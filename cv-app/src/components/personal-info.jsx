import { Input, TextArea, ImageUpload } from "./input"

export function PersonalInfo(){
    return(
        <div class="">
            <Input labelname="Name"></Input>
            <Input labelname="Contact"></Input>
            <Input labelname="Email"></Input>
            <TextArea labelname="description"></TextArea>
            <ImageUpload></ImageUpload>
        </div>
    )
}