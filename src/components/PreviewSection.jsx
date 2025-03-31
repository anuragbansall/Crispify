import React from "react";
import Preview from "./Preview";
import Loading from "./Loading";
import { useContext } from "react";
import { ImageContext } from "../context/ImageContext";

function PreviewSection() {
  const { originalImage, enhancedImage } = useContext(ImageContext);

  return (
    <div>
      {originalImage ? (
        <div className="flex flex-col md:flex-row items-center justify-center mt-10 gap-5">
          <Preview
            image={originalImage}
            alternativeText="Original Image"
            tag="original"
          />
          <Preview
            image={enhancedImage}
            alternativeText="Enhanced Image"
            tag="enhanced"
          />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center mt-10 gap-5">
          <p className="text-center text-sm md:text-lg text-zinc-500 dark:text-zinc-200">
            No image uploaded yet. Please upload an image to see the preview.
          </p>
        </div>
      )}
    </div>
  );
}

export default PreviewSection;
