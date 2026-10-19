import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import Footer from "./components/footer";
import Header from "./components/header";
import Providers from "./components/providers";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Khushii | NGO for Children | Child Welfare NGO in India",
  description:
    "KHUSHII is a child welfare NGO in India working on education, wellbeing, and community empowerment.",
  openGraph: {
    title: "Khushii | NGO for Children",
    description:
      "Kinship for Humanitarian Social and Holistic Intervention in India.",
    images: ["/images/main-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-poppins`}>
        <Providers>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
