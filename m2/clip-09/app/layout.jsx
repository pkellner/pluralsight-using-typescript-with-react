import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import React from "react";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-free/css/all.min.css";

config.autoAddCss = false;
export const metadata = {
  title: "Pluralsight React TypeScript Course",
  description:
    "Generated by Peter Kellner Pluralsight course on React and TypeScript",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
