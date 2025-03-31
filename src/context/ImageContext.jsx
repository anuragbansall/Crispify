import { createContext, useState } from "react";

const ImageContext = createContext({
  originalImage: null,
  enhancedImage: null,
  setOriginalImage: () => {},
  setEnhancedImage: () => {},
});

const ImageProvider = ({ children }) => {
  const [originalImage, setOriginalImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);

  return (
    <ImageContext.Provider
      value={{
        originalImage,
        enhancedImage,
        setOriginalImage,
        setEnhancedImage,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};

export { ImageContext, ImageProvider };
