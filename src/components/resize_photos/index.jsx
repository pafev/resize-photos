import { useState } from "react";
import resize from "./resize";

export function ResizeImages() {
  const [imageToShow, setImageToShow] = useState();

  function callback(image) {
    console.log(image);

    setImageToShow(image.name);
  }

  function handleChange(ev) {
    const files = ev.target.files;

    if (files.length === 0) {
      return;
    }

    console.log(files[0]);

    resize(files[0], callback);
  }

  return (
    <div>
      <label htmlFor="addImage">Coloque uma foto para ser comprimida</label>
      <input type="file" onChange={handleChange} id="addImage" />

      <img src={imageToShow} alt="imagem selecionada e comprimida" />
    </div>
  );
}
