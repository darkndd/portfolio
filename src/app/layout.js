import "./globals.css";

export const metadata = {
  title: "Jan Diéz de los Ríos | Fullstack Developer Portfolio",
  description: "Personal portfolio showcasing Fullstack applications, technical skills, and creative interests.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
