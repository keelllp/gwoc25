import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import Navigation from "./components/Navigation"; // ✅ Fixed Import

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata = {
  title: "Bindi's Cupcakery",
  description: "Homemade, vegetarian, preservative-free desserts in Surat",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-pink-100">
        <Navigation /> {/* ✅ Sticky Navbar */}
        <main className="pt-16"> {/* Adds space below navbar */}
          {children}
        </main>
      </body>
    </html>
  );
}
