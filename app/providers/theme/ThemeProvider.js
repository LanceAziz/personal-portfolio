"use client";
import { useEffect } from "react";
import { colors } from "@/app/utils/colors";

export default function ThemeProvider({ children }) {
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--highlight-bg", colors.white);
    root.style.setProperty("--highlight-text", colors.black);
    root.style.setProperty("--bg-color", colors.black);
    root.style.setProperty("--text-color", colors.white);
    root.style.setProperty("--scrollbar-track", colors.transparent);
    root.style.setProperty("--scrollbar-thumb", colors.white_300);
    root.style.setProperty("--scrollbar-thumb-hover", colors.white_300);
  }, []);

  return children;
}