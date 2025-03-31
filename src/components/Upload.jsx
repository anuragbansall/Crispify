import React, { useContext, useRef, useState } from "react";
import { ImageContext } from "../context/ImageContext";
import axiosInstance from "../utils/axiosInstance";

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

    if (!file.type.startsWith("image/")) {
      setError("Invalid file type. Please upload an image.");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setError("File is too large. Maximum size is 5MB.");
      return;
    }

    setError(null);

    setOriginalImage(URL.createObjectURL(file));

    setEnhancedImage(null);

    enhanceImage(file);
  };

  const enhanceImage = async (imageFile) => {
    try {
      const formData = new FormData();
      formData.append("image_file", imageFile);

      const uploadResponse = await axiosInstance.post(
        "/api/tasks/visual/scale",
        formData,
        {
          headers: {
            "X-API-KEY": import.meta.env.VITE_X_API_KEY,
          },
        }
      );

      const taskId = uploadResponse.data.data.task_id;
      if (!taskId) throw new Error("Failed to retrieve task ID");

      console.log("Task ID:", taskId);

      let enhancedImageUrl = null;
      let attempts = 0;
      const maxAttempts = 10;
      const pollingInterval = 3000;

      while (attempts < maxAttempts) {
        await new Promise((resolve) => setTimeout(resolve, pollingInterval));

        const statusResponse = await axiosInstance.get(
          `/api/tasks/visual/scale/${taskId}`,
          {
            headers: {
              "X-API-KEY": import.meta.env.VITE_X_API_KEY,
            },
          }
        );

        console.log("Task Status:", statusResponse.data);
        const taskData = statusResponse.data.data;

        if (taskData.progress === 100 && taskData.image) {
          enhancedImageUrl = taskData.image;
          break;
        } else if (taskData.state < 0) {
          throw new Error("Image enhancement failed.");
        }

        attempts++;
      }

      if (!enhancedImageUrl) {
        throw new Error("Image enhancement took too long or failed.");
      }

      setEnhancedImage(enhancedImageUrl);
      console.log("Enhanced Image URL:", enhancedImageUrl);
    } catch (error) {
      console.error("Error enhancing image:", error.response?.data || error);
      setError("Error enhancing image. Please try again.");
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
      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
    </div>
  );
}

export default Upload;
