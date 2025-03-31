import React, { useContext, useRef, useState } from "react";
import { ImageContext } from "../context/ImageContext";

function Upload() {
  const inputRef = useRef(null);
  const { setOriginalImage, setEnhancedImage } = useContext(ImageContext);
  const [error, setError] = useState(null);

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

    if (!file) return;

    // Validate file type & size
    if (!file.type.startsWith("image/")) {
      setError("Invalid file type. Please upload an image.");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setError("File is too large. Maximum size is 5MB.");
      return;
    }

    setError(null); // Reset previous errors

    const reader = new FileReader();

    reader.onload = () => {
      setOriginalImage(reader.result);
      setEnhancedImage(null);

      try {
        // Simulate AI enhancement (Replace with actual API call)
        const enhancedImage = reader.result;
        setEnhancedImage(enhancedImage);
      } catch (error) {
        console.error("Error enhancing image:", error);
        setEnhancedImage(null);
      }
    };

    reader.onerror = () => {
      setError("Error reading file. Please try again.");
    };

    reader.readAsDataURL(file);
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
      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
    </div>
  );
}

export default Upload;
