import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SUP · Soft Skills Lab",
  description:
    "Repositorio de actividades para trabajar habilidades blandas en espacios SUP de formación tecnológica.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
