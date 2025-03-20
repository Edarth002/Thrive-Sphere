import { Inter } from "next/font/google";

import "./globals.css";
import { AuthProvider } from "@/lib/context/AuthContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["200", "400", "600"],
});

export const metadata = {
  title: "Thrive Sphere",
  description: "Take a course at ThriveSphere",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={`${inter.variable} antialiased`}>{children}</body>
      </AuthProvider>
    </html>
  );
}
