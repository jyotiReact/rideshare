import Header from "@/components/layout/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Providers } from "./providers";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Add only the weights you use
  display: "swap",
});

export const metadata: Metadata = {
  title: "RideShare - Book Your Ride",
  description: "Modern ride booking application with seamless user experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth w-screen">
      <body
        className={`${plusJakartaSans.className} overflow-x-hidden bg-gray-50 min-h-screen w-full`}
      >
        <Providers>
          <Header />
          <main className="min-h-screen w-full">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
