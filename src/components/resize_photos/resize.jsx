var MAX_WIDTH = 800;
var MAX_HEIGHT = 600;

export default function resize(image, callback) {
  const img = new Image();
  const reader = new FileReader();

  const createFileFromBlob = (blob) => {
    const imageResized = new File([blob], image.name, {
      type: image.type,
      lastModified: Date.now(),
    });
    callback(imageResized);
  };

  reader.onload = (e) => {
    img.src = e.target.result;

    img.onload = () => {
      let width = img.width;
      let height = img.height;

      if (width > height) {
        if (width > MAX_WIDTH) {
          height *= MAX_WIDTH / width;
          width = MAX_WIDTH;
        }
      } else {
        if (height > MAX_HEIGHT) {
          width *= MAX_HEIGHT / height;
          height = MAX_HEIGHT;
        }
      }

      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, width, height);
      ctx.canvas.toBlob(createFileFromBlob, image.type, 0.8);
    };
  };

  reader.readAsDataURL(image);
}
