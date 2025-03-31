import React from "react";
import Preview from "./preview";
import Loading from "./Loading";

function PreviewSection() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center mt-10 gap-5">
      <Preview image={null} alternativeText="Original Image" tag="original" />
      <Preview image={null} alternativeText="Enhanced Image" tag="enhanced" />
    </div>
  );
}

export default PreviewSection;
