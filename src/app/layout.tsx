import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";

const font = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Travel For You",
  description: "Travel Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialised`}>
        <ResponsiveNav/>
        
        {children} 
        
        </body>
    </html>
  );
}
