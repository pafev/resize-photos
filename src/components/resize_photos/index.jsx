import { useState } from "react";
import resize from "./resize";

export function ResizeImages() {

  function callback(image) {
    console.log(image);
  }

  function handleChange(ev) {
    const files = ev.target.files;

    if (files.length > 0) {
      console.log(files[0]);
  
      resize(files[0], callback);
    }
  }

  return (
    <div>
      <label htmlFor="addImage">Coloque uma foto para ser comprimida</label>
      <input type="file" onChange={handleChange} id="addImage" />
    </div>
  );
}
