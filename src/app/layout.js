import { Be_Vietnam_Pro, Raleway } from "next/font/google";
import "./globals.css";
import Navigation from "./components/navigation";
import Script from "next/script";

import FlickeringGrid from "./components/flick";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "PFE | ACM x TRC",
  description: "A 3 day programming workshop organized by TRC and ACM",
  metadata: new URL("https://mpstmeacm.com"),
  alternates: {
    canonical: "/",
  },
  creator: "ACM MPSTME",
  publisher: "ACM MPSTME",
  metadataBase: new URL("https://mpstmeacm.com"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script
        defer
        src="https://analytics.nmims.tech/script.js"
        data-website-id="540d5b66-23ef-4e54-8a60-ae37f5c9665b"
      ></Script>

      <body className={`${raleway.className} relative bg-black px-4`}>
        <Navigation />
        {children}
        <FlickeringGrid
          className="z-0 fixed inset-0 h-screen w-screen"
          squareSize={4}
          gridGap={10}
          color="#6B7280"
          maxOpacity={0.2}
          flickerChance={1}
        />
      </body>
    </html>
  );
}
