import React, { useContext } from "react";
import { ImageContext } from "../context/ImageContext";

function Upload() {
  const inputRef = React.useRef(null);
  const { setOriginalImage, setEnhancedImage } = useContext(ImageContext);

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      inputRef.current?.click();
    }
  };

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setOriginalImage(reader.result);
        setEnhancedImage(null);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-white dark:bg-zinc-800 shadow-md rounded-lg p-6 xl:p-8 w-full max-w-md mx-auto">
      <label
        className="border-2 border-dashed border-gray-300 dark:border-zinc-600 rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer focus-visible:ring focus-visible:ring-blue-500"
        tabIndex="0"
        onKeyDown={handleKeyDown}
        onClick={handleClick}
        role="button"
        aria-label="Upload an image"
      >
        <span className="text-gray-500 dark:text-zinc-400">
          Drag & drop your image here or click to upload
        </span>
      </label>
      <input
        type="file"
        ref={inputRef}
        accept="image/*"
        className="hidden"
        id="file-upload"
        aria-labelledby="file-upload"
        onChange={handleChange}
      />
    </div>
  );
}

export default Upload;
