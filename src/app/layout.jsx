import { Poppins, Montserrat } from "next/font/google";
import "@/styles/normalize.css";
import "@/styles/globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap"
})

const montserrat = Montserrat({
    weight: ["400", "500"],
    variable: "--font-montserrat",
    subsets: ["latin", "cyrillic"],
    display: "swap",
});

export const metadata = {
  title: "Dream Cosmetics",
  description: "Handmade cosmetic",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en" className={`${poppins.variable} ${montserrat.variable}`}>
          <body>
              <div className="wrapper">
                <header>
                  <Header />
                </header>
                <main>{children}</main>
                <footer>
                  <Footer />
                </footer>
              </div>
          </body>
      </html>
  );
}
