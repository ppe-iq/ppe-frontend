import { Bebas_Neue } from "next/font/google";
import { Montserrat } from "next/font/google";

// Bebas Neue from google fonts
export const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas",
  display: "swap",
});

// Montserrat from google fonts
export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});
