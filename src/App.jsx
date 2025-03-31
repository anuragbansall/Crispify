import React from "react";
import Container from "./components/Container";
import Loading from "./components/Loading";
import UploadSection from "./components/UploadSection";
import PreviewSection from "./components/PreviewSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-white dark:bg-zinc-900 min-h-screen flex flex-col items-center justify-center text-gray-800 dark:text-gray-200">
      <Container>
        <UploadSection />
        <PreviewSection />
      </Container>

      <Footer />
    </div>
  );
}

export default App;
