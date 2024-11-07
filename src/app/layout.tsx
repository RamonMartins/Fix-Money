import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Fix Money",
  description: "Gerencie suas finanças",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
      <body
        style={{display: 'flex', flexDirection: 'column', height: '100%'}}
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
        {children}
        
      </body>
    </html>
  );
}
