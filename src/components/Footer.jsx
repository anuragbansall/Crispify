import React from "react";

function Footer() {
  return (
    <div>
      <p className="text-center text-sm md:text-lg text-zinc-500 dark:text-zinc-200 mt-10 mb-5">
        &copy; {new Date().getFullYear()} Crispify. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
