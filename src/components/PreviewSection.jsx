import React from "react";
import Preview from "./preview";
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
      ) : null}
    </div>
  );
}

export default PreviewSection;
