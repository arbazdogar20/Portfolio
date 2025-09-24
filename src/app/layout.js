import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "John Doe - Full Stack Developer",
  description:
    "Professional portfolio of John Doe, a passionate Full Stack Developer specializing in modern web technologies including React, Node.js, and cloud solutions.",
  keywords:
    "Full Stack Developer, React, Node.js, JavaScript, Web Development, Portfolio",
  authors: [{ name: "John Doe" }],
  openGraph: {
    title: "John Doe - Full Stack Developer",
    description:
      "Professional portfolio showcasing full stack development projects and skills",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
