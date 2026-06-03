import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "Jan Díez de los Ríos | Fullstack Developer Portfolio",
  description: "Personal portfolio showcasing Fullstack applications, technical skills, and creative interests.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${poppins.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
