"use client";

import { useEffect } from "react";

export default function BrowserDetect() {
  useEffect(() => {
    // Detect if NOT Safari (Safari doesn't support feDisplacementMap well)
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    if (!isSafari) {
      document.documentElement.classList.add("supports-svg-filters");
    }
  }, []);

  return null;
}
