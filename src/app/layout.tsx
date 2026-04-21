import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "SpriteDex",
  description: "Sua biblioteca completa de sprites de Pokemon.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Header/>
          <main>
            {children}
          </main>
        <Footer/>
      </body>
    </html>
  );
}
