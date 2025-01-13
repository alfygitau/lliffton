import { Nunito } from "next/font/google";
import "./globals.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Lliffton Analytica Limited",
  description:
    "To be the leading provider of Research and Training Services related to economic growth and development in all sectors",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} antialiased`}>
        <main className="relative w-full">
          <nav className="w-full fixed bg-white top-0 right-0">
            <Header />
          </nav>
          <div className="mt-[150px] w-full">{children}</div>
          <div className="w-full">
            <Footer />
          </div>
        </main>
      </body>
    </html>
  );
}
