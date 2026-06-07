import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata = {
  title: "Jan Díez de los Ríos | Fullstack Developer Portfolio",
  description: "Personal portfolio showcasing Fullstack applications, technical skills, and creative interests.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${outfit.variable}`}>
      <body className="antialiased selection:bg-blue-500/30 selection:text-blue-200">{children}</body>
    </html>
  );
}
