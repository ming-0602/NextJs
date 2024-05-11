import { Inter as FontSans } from "next/font/google"
import "./globals.css";
import { cn } from "@/lib/utils"



const fontsans = FontSans({ subsets: ["latin"], variable: "--font-sans", });

export const metadata = {
  title: "React App",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontsans.variable)}>
      {children}
      </body>
    </html>
  );
}
