import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Пенза | Архитектура и Наследие", 
  description: "Интерактивный проект о развитии, истории и архитектуре города Пенза",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}