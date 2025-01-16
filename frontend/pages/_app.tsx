import { cn } from "@/lib/utils";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import type { AppProps } from "next/app";
import { Rubik as FontSans } from "next/font/google";
import "../styles/globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div
      className={cn(
        "min-h-screen font-sans antialiased",
        "bg-[#FBF8F4]",
        fontSans.variable
      )}
    >
      <main className='flex flex-col items-center'>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </main>
    </div>
  );
}

export default MyApp;
