"use client";
import "./globals.css";
import { useState } from "react";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme, darkTheme } from "./theme";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <html lang="en">
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <body className={`${inter.className} ${darkMode ? "darkmode" : ""}`}>
        <ThemeProvider theme={darkMode ? darkTheme : theme}>
          <CssBaseline />
          <Header
            darkMode={darkMode}
            toggleDarkMode={() => setDarkMode(!darkMode)}
          />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
