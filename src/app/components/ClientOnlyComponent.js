"use client"; // Mark this component as client-side

import { useEffect } from "react";

export default function ClientOnlyComponent() {
  useEffect(() => {
    // Disable right-click and text selection
    const disableContextMenu = (e) => e.preventDefault();
    document.addEventListener("contextmenu", disableContextMenu);
    document.addEventListener("selectstart", disableContextMenu);

    return () => {
      document.removeEventListener("contextmenu", disableContextMenu);
      document.removeEventListener("selectstart", disableContextMenu);
    };
  }, []);

  return null; // This component doesn't render any UI
}
