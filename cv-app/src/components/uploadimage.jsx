import { useContext } from "react";
import { CVContext } from "../App";

export function UploadImage() {
  const { cvinfo, setUserInfo } = useContext(CVContext);

  function handleImageChange(e) {
    const file = e.target.files[0];

    if (file) {
      const photoUrl = URL.createObjectURL(file);
      setUserInfo({
        ...cvinfo,
        Image: photoUrl,
      });
    }
  }

  //   async function handleUpload(photo) {
  //     const formData = new FormData();
  //     formData.append("photo", photo);

  //     try {
  //       const result = await fetch("/", {
  //         method: "POST",
  //         body: formData,
  //       });

  //       const data = await result.kson();
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  return (
    <div>
      <label for="imageUpload">Upload profile photo</label>
      <input
        type="file"
        name="imageUpload"
        accept="image/*"
        onChange={handleImageChange}
      ></input>
    </div>
  );
}
