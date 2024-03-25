import Navbar from "@/components/Navbar";
import "./globals.css";
import { Footer } from "@/components";


export const metadata = {
  title: "Solguide",
  description: "Developers' community tool",
  icons:
  {
    icon: "/assets/favicon.svg",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
