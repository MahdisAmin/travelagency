import localFont from "next/font/local";
import "./globals.css";
import Layout from "@/components/layout/Layout";
import Main from "@/components/templates/Main";
import Image from "next/image";
import Input from "@/components/templates/Input";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="font-yekanbakh">
        <Layout />
        <div>
          <Image
            src="/images/banner.jpg"
            width={1440}
            height={350}
            alt="banner"
            className="w-full"
          ></Image>
        </div>
        <Main />
        <Input/>
      </body>
    </html>
  );
}
