import React from "react";

function Container({ children }) {
  return (
    <div className="mx-auto px-4 py-6  w-full container flex flex-col items-center justify-center">
      {children}
    </div>
  );
}

export default Container;
