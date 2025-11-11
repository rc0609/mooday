// For bg changes in dark and light mode and smooth transition between them

import { useState, useEffect } from "react";

const PageWrapper = ({ children }) => {
  const [themeKey, setThemeKey] = useState(0);
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const darkMode = document.documentElement.classList.contains("dark");
      setIsDark(darkMode);
      setThemeKey((prev) => prev + 1);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
      <main className="relative px-6 py-10 pt-24 min-h-screen overflow-hidden transition-colors duration-700">

      {/* Background Layers */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-[#FFD6FF] to-[#E4ECFD] transition-opacity duration-700 ease-in-out ${
          isDark ? "opacity-0" : "opacity-100"
        }`}
      />
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-700 ease-in-out ${
          isDark ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Content */}
      <div
        className={`relative z-10 transition-all duration-700 ease-in-out transform ${
          isDark ? "opacity-90 scale-[0.995]" : "opacity-100 scale-100"
        }`}
      >
        {typeof children === "function" ? children(themeKey) : children}
      </div>
    </main>
  );
};

export default PageWrapper;


