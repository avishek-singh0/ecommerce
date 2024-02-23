import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from './../components/Navbar';
import ReduxProvider from "@/Redux/Provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Combu",
  description: "combu of any web",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
       <ReduxProvider>
        <Navbar/>
        <main>
          {children}
        </main>
        </ReduxProvider>
      </body>
    </html>
  );
}
