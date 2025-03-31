import React from "react";
import Upload from "./Upload";
import Loading from "./Loading";

function UploadSection() {
  return (
    <div className="my-10">
      <h2 className="text-2xl md:text-4xl mb-1 font-semibold text-center">
        AI Image Enhancer
      </h2>
      <p className="text-sm md:text-lg text-center text-zinc-500 dark:text-zinc-400 mb-5">
        Upload your image and let AI enhance it for you.
      </p>
      <Upload />
    </div>
  );
}

export default UploadSection;
