import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="w-full">{children}</main>
        <Footer/>

      </body>
    </html>
  );
}
