import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import {Poppins} from 'next/font/google';   //for google font
import "./globals.css";
import ResposiveNav from "@/components/Home/Navbar/ResposiveNav";
import Footer from "@/components/Home/Footer/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";


const font = Poppins({ //code for google font
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin']
})

// local font
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {  // very important for SEO purpose
  title: "SunTrail | Next js 15",  //Suntrail meaning= "A journey guided by the sun"
  description: " SunTrail landing page using next js 15",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
      >
        {/* Navbar */}
        <ResposiveNav />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
