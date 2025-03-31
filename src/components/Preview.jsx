import React from "react";
import Loading from "./Loading";

function Preview({ image, alternativeText, tag = "original" }) {
  return (
    <div className="relative shrink-0 w-[18rem] h-[18rem] xl:w-[20rem] xl:h-[20rem] rounded-md overflow-hidden">
      <div className="w-full h-full flex items-center justify-center bg-zinc-200 dark:bg-zinc-800">
        <p className="absolute top-2 left-2 text-sm font-semibold text-gray-700 bg-white dark:bg-zinc-700 dark:text-zinc-200 px-2 py-1 rounded-md shadow-md">
          {tag === "original" ? "Original Image" : "Enhanced Image"}
        </p>
        {image ? (
          <>
            <img
              src={image}
              alt={alternativeText || "Preview"}
              className="w-full h-full object-cover"
            />
            {tag === "enhanced" ? (
              <a
                href={image}
                download
                aria-label="Download enhanced image"
                className="absolute bottom-2 right-2 bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition duration-200"
              >
                Download
              </a>
            ) : null}
          </>
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
