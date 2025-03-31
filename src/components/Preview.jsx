import React from "react";
import Loading from "./Loading";

function Preview({ image, alternativeText, tag = "original" }) {
  return (
    <div className="relative shrink-0 w-[18rem] h-[18rem] rounded-md overflow-hidden">
      <div className="w-full h-full flex items-center justify-center bg-zinc-200 dark:bg-zinc-800">
        <p className="absolute top-2 left-2 text-sm font-semibold text-gray-700 bg-white dark:bg-zinc-700 dark:text-zinc-200 px-2 py-1 rounded-md shadow-md">
          {tag === "original" ? "Original Image" : "Enhanced Image"}
        </p>
        {image ? (
          <img
            src={image}
            alt={alternativeText || "Preview"}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-gray-500 dark:text-zinc-200">
            {tag === "original"
              ? "Upload an image"
              : "Enhanced image will appear here"}
          </span>
        )}
      </div>
    </div>
  );
}

export default Preview;
